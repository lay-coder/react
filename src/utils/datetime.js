
/**
 *
 * @param datetime 要格式化的时间
 * @param format 格式化格式默认'{y}-{m}-{d} {h}:{i}:{s}'
 */
const formatDate = (
  datetime,
  format = '{y}-{m}-{d} {h}:{i}:{s}',
) => {
  if (datetime) {
    let date = new Date()
    if (typeof datetime === 'object') {
      date = datetime
    } else {
      if (('' + datetime).length === 10) {
        datetime = parseInt(datetime, 10) * 1000
      }
      date = new Date(datetime)
    }
    const formatObj = {
      y: date.getFullYear(),
      m: date.getMonth() + 1,
      d: date.getDate(),
      h: date.getHours(),
      i: date.getMinutes(),
      s: date.getSeconds(),
      a: date.getDay(),
    }
    const timeStr = format.replace(
      /{(y|m|d|h|i|s|a)+}/g,
      (result, key) => {
        let value = formatObj[key]
        if (key === 'a') {
          return ['日', '一', '二', '三', '四', '五', '六'][value]
        }
        if (result.length > 0 && value < 10) {
          value = '0' + value
        }
        return value || 0
      },
    )
    return timeStr
  } else {
    return '未知'
  }
}

/**
 * @param time给定时间参数默认为当前时间
 * @param interval相差秒数现在之后正值之前负值
 * @returns 格式化后的时间
 */
const getIntervalTime = (interval = 0, time = new Date()) => {
  const detal = interval * 1000
  const datetime = new Date(time)
  return formatDate(new Date(Math.round(datetime.getTime()) + detal))
}

/**
 * @param time给定时间参数
 * @returns 秒时间戳
 */
const getTimeS = (interval = 0) => {
  if (interval) {
    const time = JSON.parse(JSON.stringify(interval))
    return (new Date(time).getTime() / 1000).toFixed(0)
  } else {
    return (new Date().getTime() / 1000).toFixed(0)
  }
}
export { formatDate, getIntervalTime, getTimeS }
