import pagination from './pagination'
import * as config from './config'

let list = []

let $pagination = pagination.init()

let pageTotal = 1

// let url = config.APIDOMAIN  + '/api/Meeting/GetServiceNotification'

const get = (url,$http, options) => {
  return new Promise((resolve, reject) => {
    $pagination.Index++
    if (pageTotal >= $pagination.Index) {
      $http.get(url, {params: {page: $pagination.Index, pageSize: $pagination.Size}}).then(
        response => {
          let re = response.body
          if (re.status === 200) {
            $pagination.Index = re.page
            $pagination.Size = re.pageSize
            $pagination.Total = re.total
            pageTotal = pagination.getPageTotal($pagination)
            list = list.concat(re.data.list)
            resolve({ list: list, hasMore: $pagination.Total > $pagination.Size })
          } else {
            $pagination.Index--
            reject(re.errorMessage)
          }
        },
        response => {
          $pagination.Index--
          reject(config.ERROR)
        })
    } else {
      reject(config.STOP)
    }
  })
}

const init = () => {
  list = []
  $pagination = pagination.init()
  pageTotal = 1
}

export default {
  init: init,
  get: (url,$http, options) => {
    return get(url,$http, options)
  },
  reload: (url,$http, options) => {
    init()
    return get(url,$http, options)
  }
}

