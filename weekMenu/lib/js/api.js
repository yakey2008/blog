
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

const plugin = {
  install (vue) {
    // register plugins
    if (!vue.$moaapi) {
      vue.$moaapi = {
        exec,
        updateNavTitle,
        resetNavTitle,
        showNavMenu,
        hideNavMenu,
        callUserProfile,
        openKeyboardManager,
        closeKeyboardManager,
        closeWin
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

