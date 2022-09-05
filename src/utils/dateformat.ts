function formatDate(dateStr: string) {
    if (!dateStr) {
        return ''
    }
    let result = ''
    const currDate = new Date()
    const year = currDate.getFullYear()
    const month = currDate.getMonth()
    const date = currDate.getDate()

    //  需要根据时区，把时间加上
    const tz = new Date().getTimezoneOffset() * 60 * 1000
    const publishTime = new Date(new Date(dateStr).getTime() - tz)
    const cyear = publishTime.getFullYear()
    const cmonth = publishTime.getMonth()
    const cdate = publishTime.getDate()
    const hours = publishTime.getHours()
    const minutes = publishTime.getMinutes()
    const timeStr = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`
    if (cyear === year && cmonth === month && date === cdate) {
      result =  timeStr
    } else {
      result =  `${(cmonth + 1 < 10) ? '0' + (cmonth + 1): cmonth + 1}/${cdate < 10 ? '0' + cdate : cdate} ${timeStr}`
    }
    return result
}

export {
    formatDate
}