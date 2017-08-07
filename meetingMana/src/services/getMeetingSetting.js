import * as config from './config'

let url = config.APIDOMAIN + '/api/Meeting/PersonSetting'

const get = ($http, options) => {
  return new Promise((resolve, reject) => {
    $http.get(url, {}).then(
      response => {
        let re = response.body
        if (re.status === 200) {
          resolve(re.data)
        } else {
          reject(re.errorMessage)
        }
      },
      response => {
        reject(config.ERROR)
      })
  })
}

export default {
  get: ($http, options) => {
    return get($http, options)
  }
}