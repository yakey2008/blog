import * as config from './config'

// let url = config.APIDOMAIN + '/api/Meeting/ResponseMeeting'

const post = (url,$http, options) => {
  return new Promise((resolve, reject) => {
    $http.post(url, {ICalUid: options.iCalUid, IsAccept: options.isAccept}).then(
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
  post: (url,$http, options) => {
    return post(url,$http, options)
  }
}