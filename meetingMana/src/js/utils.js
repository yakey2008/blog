export default {
    timeFormat(date, fmt = 'YYYY-MM-DD HH:mm:ss') {
        var o = {
          'M+': date.getMonth() + 1,
          'D+': date.getDate(),
          'h+': date.getHours() % 12 === 0 ? 12 : date.getHours() % 12,
          'H+': date.getHours(),
          'm+': date.getMinutes(),
          's+': date.getSeconds(),
          'q+': Math.floor((date.getMonth() + 3) / 3),
          'S': date.getMilliseconds()
        }
        var week = {
          '0': '\u65e5',
          '1': '\u4e00',
          '2': '\u4e8c',
          '3': '\u4e09',
          '4': '\u56db',
          '5': '\u4e94',
          '6': '\u516d'
        }
        if (/(Y+)/.test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
        }
        if (/(E+)/.test(fmt)) {
          fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? '\u661f\u671f' : '\u5468') : '') + week[date.getDay() + ''])
        }
        for (var k in o) {
          if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
          }
        }
        return fmt
    },
    dayFormat(date) {
        let now = new Date()
        let curMon = now.getMonth()
        let curDate = now.getDate()
        let selMon = date.getMonth()
        let selDate = date.getDate()
        let cur = date.getDate()
         
        if (curMon !== selMon)
        {
            return ''
        }

        let diff = curDate - selDate

        let week = ''
        if (diff === 2)
        {
            week = "前天"
        }
        if (diff === 1)
        {
            week = "昨天"
        }
        if (diff === 0)
        {
            week = "今天"
        }
        if (diff === -1)
        {
            week = "明天"
        }
        if (diff === -2)
        {
            week = "后天"
        }
        return week
    },
    weekFormat(date) {
        let week = ['日', '一', '二', '三', '四', '五', '六']
        let cur = date.getDay()

        return '周' + week[cur]
    }
}