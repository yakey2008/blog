<template>
  <div class="x-scroll-container" :id="containerId"
       @touchstart="touchStart($event)"
       @touchmove="touchMove($event)"
       @touchend="touchEnd($event)"
       @mousedown="mouseDown($event)"
       @mousemove="mouseMove($event)"
       @mouseup="mouseUp($event)"
  >

    <div class="content" :id="contentId" :style="contentStyle">
      <div v-if="onRefresh" class="pull-to-refresh-layer" :class="{'active': state == 1, 'active refreshing': state == 2}">
        <span class="spinner-holder">
          <arrow class="arrow" v-if="state != 2"></arrow>
          <spinner class="spinner" v-if="state == 2"></spinner>
          <span class="text" v-if="state == 0">{{refreshText}}</span>
          <span class="text" v-if="state == 1">{{releaseText}}</span>
        </span>
      </div>

      <slot></slot>

      <div v-if="onInfinite" class="loading-layer">
        <span class="spinner-holder" :class="{'active': showLoading && state != 2}">
          <spinner class="spinner"></spinner>
        </span>

        <div class="no-data-text"
          :class="{'active': !showLoading && loadingState == 2}" v-text="noDataText">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Arrow from './svg/arrow.vue'
  import Spinner from './svg/spinner.vue'
  import Scroller from './module/core.js'
  import Render from './module/render.js'
  
  const re = /^[\d]+(%)?$/

  const widthAndHeightCoerce = (v) => {
    if (v[v.length - 1] !== '%') return v + 'px'
    return v
  }

  const widthAndHeightValidator = (v) => {
    return re.test(v)
  }

  export default {
    components: {
      Arrow,
      Spinner
    },
    props: {
      onRefresh: Function,
      onInfinite: Function,
      refreshText: {
        type: String,
        default: '下拉刷新'
      },
      releaseText: {
        type: String,
        default: '释放更新'
      },
      noDataText: {
        type: String,
        default: '没有更多数据'
      },
      width: {
        type: String,
        default: '100%',
        validator: widthAndHeightValidator
      },
      height: {
        type: String,
        default: '100%',
        validator: widthAndHeightValidator
      },
      snapping: {
        type: Boolean,
        default: false
      },
      snapWidth: {
        type: Number,
        default: 100
      },
      snapHeight: {
        type: Number,
        default: 100
      },
      animating: {
        type: Boolean,
        default: true
      },
      animationDuration: {
        type: Number,
        default: 250
      },
      bouncing: {
        type: Boolean,
        default: true
      },
      contentStyle: Object
    },
    computed: {
      w: function () {
        return widthAndHeightCoerce(this.width)
      },
      h: function () {
        return widthAndHeightCoerce(this.height)
      }
    },
    data () {
      return {
        containerId: 'outer-' + Math.random().toString(36).substring(3, 8),
        contentId: 'inner-' + Math.random().toString(36).substring(3, 8),
        state: 0, // 0: pull to refresh, 1: release to refresh, 2: refreshing
        loadingState: 0, // 0: stop, 1: loading, 2: stopping loading
        showLoading: false,
        container: undefined,
        content: undefined,
        scroller: undefined,
        pullToRefreshLayer: undefined,
        mousedown: false,
        infiniteTimer: undefined
      }
    },
    mounted () {
      this.container = document.getElementById(this.containerId)
      this.container.style.width = this.w
      this.container.style.height = this.h
      this.content = document.getElementById(this.contentId)
      this.pullToRefreshLayer = this.content.getElementsByTagName('div')[0]
      let render = Render(this.content)

      this.scroller = new Scroller(render, {
        scrollingX: false,
        snapping: this.snapping,
        animating: this.animating,
        animationDuration: this.animationDuration,
        bouncing: this.bouncing
      })

      // enable PullToRefresh
      if (this.onRefresh) {
        this.scroller.activatePullToRefresh(60, () => {
          this.state = 1
        }, () => {
          this.state = 0
        }, () => {
          this.state = 2
          this.$on('$finishPullToRefresh', () => {
            setTimeout(() => {
              this.state = 0
              this.finishPullToRefresh()
            })
          })
          this.onRefresh()
        })
      }

      // enable infinite loading
      if (this.onInfinite) {
        this.infiniteTimer = setInterval(() => {
          if (this.loadingState === 2) {
            return
          }
          let { top } = this.scroller.getValues()
          if (this.content.offsetHeight - this.container.clientHeight < 60) {
            top = top - 60
          }
          if (top + 60 > this.content.offsetHeight - this.container.clientHeight) {
            if (this.loadingState) return
            this.loadingState = 1
            this.showLoading = true
            this.onInfinite()
          }
        }, 10)
      }
      // setup scroller
      let rect = this.container.getBoundingClientRect()
      this.scroller.setPosition(rect.left + this.container.clientLeft, rect.top + this.container.clientTop)
      // snapping
      if (this.snapping) {
        // console.log(this.snapWidth, this.snapHeight)
        this.scroller.setSnapSize(this.snapWidth, this.snapHeight)
      }
    },
    destroyed () {
      if (this.infiniteTimer) clearInterval(this.infiniteTimer)
    },
    methods: {
      resize () {
        let container = this.container
        let content = this.content
        this.scroller.setDimensions(container.clientWidth, container.clientHeight, content.offsetWidth, content.offsetHeight)
      },
      finishPullToRefresh () {
        this.scroller.finishPullToRefresh()
        setTimeout(() => {
          this.resize()
        })
      },
      triggerPullToRefresh () {
        this.scroller.triggerPullToRefresh()
      },
      scrollTo (x, y, animate) {
        this.scroller.scrollTo(x, y, animate)
      },
      scrollBy (x, y, animate) {
        this.scroller.scrollBy(x, y, animate)
      },
      touchStart (e) {
        // Don't react if initial down happens on a form element
        if (e.target.tagName.match(/input|textarea|select/i)) {
          return
        }
        this.scroller.doTouchStart(e.touches, e.timeStamp)
      },
      touchMove (e) {
        e.preventDefault()
        this.scroller.doTouchMove(e.touches, e.timeStamp)
      },
      touchEnd (e) {
        this.scroller.doTouchEnd(e.timeStamp)
      },
      mouseDown (e) {
        // Don't react if initial down happens on a form element
        if (e.target.tagName.match(/input|textarea|select/i)) {
          return
        }
        this.scroller.doTouchStart([{
          pageX: e.pageX,
          pageY: e.pageY
        }], e.timeStamp)
        this.mousedown = true
      },
      mouseMove (e) {
        if (!this.mousedown) {
          return
        }
        this.scroller.doTouchMove([{
          pageX: e.pageX,
          pageY: e.pageY
        }], e.timeStamp)
        this.mousedown = true
      },
      mouseUp (e) {
        if (!this.mousedown) {
          return
        }
        this.scroller.doTouchEnd(e.timeStamp)
        this.mousedown = false
      },
      getPosition () {
        let v = this.scroller.getValues()
        return {
          left: parseInt(v.left),
          top: parseInt(v.top)
        }
      },
      resetLoadingState () {
        let { top } = this.scroller.getValues()
        if (top + 60 > this.content.offsetHeight - this.container.clientHeight) {
          setTimeout(() => {
            this.resetLoadingState()
            this.resize()
          }, 1000)
        } else {
          this.loadingState = 0
        }
      },
      finishInfinite (hideSpinner) {
        this.loadingState = hideSpinner ? 2 : 0
        this.showLoading = false
        setTimeout(() => {
          this.resize()
        })

        if (this.loadingState === 2) {
          this.resetLoadingState()
        }
      },
      resetInfinite () {
        this.loadingState = 0
      }
    }
  }
</script>
<style lang="scss" scoped>
.x-scroll-container {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    &>.content {
        -webkit-transform-origin: left top;
        -webkit-transform: translateZ(0);
        -moz-transform-origin: left top;
        -moz-transform: translateZ(0);
        -ms-transform-origin: left top;
        -ms-transform: translateZ(0);
        -o-transform-origin: left top;
        -o-transform: translateZ(0);
        transform-origin: left top;
        transform: translateZ(0);
        width: 100%;
        &>.pull-to-refresh-layer {
            width: 100%;
            height: 60px;
            margin-top: -60px;
            text-align: center;
            font-size: 16px;
            color: #ccc;
        }
        &>.loading-layer {
            width: 100%;
            height: 60px;
            text-align: center;
            font-size: 16px;
            line-height: 60px;
            color: #ccc;
            position: relative;
            &>.no-data-text {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                z-index: 1;
                font-size: 14px;
            }
        }
    }
}

.x-scroll-container>.content>.loading-layer {
    &>.spinner-holder,
    &>.no-data-text {
        opacity: 0;
        transition: opacity .15s linear;
        -webkit-transition: opacity .15s linear;
    }
    &>.spinner-holder.active,
    &>.no-data-text.active {
        opacity: 1;
    }
}

.x-scroll-container>.content>.pull-to-refresh-layer .spinner-holder,
.x-scroll-container>.content>.loading-layer .spinner-holder {
    text-align: center;
    -webkit-font-smoothing: antialiased;
}

.x-scroll-container>.content>.pull-to-refresh-layer .spinner-holder .arrow,
.x-scroll-container>.content>.loading-layer .spinner-holder .arrow {
    width: 20px;
    height: 20px;
    margin: 8px auto 0 auto;
    -webkit-transform: translate3d(0, 0, 0) rotate(0deg);
    transform: translate3d(0, 0, 0) rotate(0deg);
    -webkit-transition: -webkit-transform .2s linear;
    transition: transform .2s linear;
}

.x-scroll-container>.content>.pull-to-refresh-layer .spinner-holder .text,
.x-scroll-container>.content>.loading-layer .spinner-holder .text {
    display: block;
    margin: 0 auto;
    font-size: 14px;
    line-height: 20px;
    color: #aaa;
}

.x-scroll-container>.content>.pull-to-refresh-layer .spinner-holder .spinner,
.x-scroll-container>.content>.loading-layer .spinner-holder .spinner {
    margin-top: 14px;
    width: 32px;
    height: 32px;
    // svg style
    fill: #444;
    stroke: #69717d;
}

.x-scroll-container>.content>.pull-to-refresh-layer.active .spinner-holder .arrow {
    -webkit-transform: translate3d(0, 0, 0) rotate(180deg);
    transform: translate3d(0, 0, 0) rotate(180deg);
}
</style>

