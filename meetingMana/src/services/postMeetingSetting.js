import * as config from './config'

let url = config.APIDOMAIN + '/api/Meeting/SetPersonSetting'

const post = ($http, options) => {
  return new Promise((resolve, reject) => {
    $http.post(url, {Key: options.key, Value: options.value}).then(
      response => {
        let re = response.body
        if (re.status === 200) {
          resolve(config.SUCCESS)
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
  post: ($http, options) => {
    return post($http, options)
  }
}