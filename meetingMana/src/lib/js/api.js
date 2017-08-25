const exec = (url) => {
  setTimeout(() => {
    window.location.href = url
  }, 10)
}

const updateNavTitle = (title) => {
  if (title && typeof title === 'string') exec('vipoa://updateTitleBar?' + encodeURI(title))
}

const resetNavTitle = () => {
  exec('vipoa://resetTitle')
}

const showNavMenu = (iconUrl) => {
  if (iconUrl && !/http/.test(iconUrl)) iconUrl = window.location.protocol + '//' + window.location.host + iconUrl
  exec(`vipoa://rightHeaderMenuImg?Url=${iconUrl}`)
}

const showListNavMenu = (list)=>{
  window.location.href = 'vipoa://showHeaderMenu?menu='+encodeURIComponent(list);
}

const hideNavMenu = () => {
  window.location.href = 'vipoa://hiddenRightHeaderMenuImg'
  // exec('vipoa://hiddenRightHeaderMenuImg')
}

const closeWin = (title) => {
  exec('vipoa://close')
}

const callUserProfile = (userId) => {
  if (userId) exec(`vipoa://userprofile?userId=${userId}`)
}

const openKeyboardManager = () => {
  exec('vipoa://openKeyboardManager')
}

const closeKeyboardManager = () => {
  window.location.href = 'vipoa://closeKeyboardManager'
  // exec('vipoa://closeKeyboardManager')
}
//禁用ios橡皮筋效果
const closeWebkitSpringBack = ()=>{
  window.location.href = 'vipoa://closeWebkitSpringBack';
}

const selUser = (type, multi) => {
  window.location.href = 'vipoa://selUser?multi=' + type + '&action=' + multi;
}

const plugin = {
  install(vue) {
    // register plugins
    if (!vue.$moaapi) {
      vue.$moaapi = {
        exec,
        updateNavTitle,
        resetNavTitle,
        showNavMenu,
        showListNavMenu,
        hideNavMenu,
        callUserProfile,
        openKeyboardManager,
        closeKeyboardManager,
        closeWebkitSpringBack,
        closeWin,
        selUser
      }
    }

    vue.mixin({
      created: function () {
        this.$moaapi = vue.$moaapi
      }
    })
  }
}

export default plugin