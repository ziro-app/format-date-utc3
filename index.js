const hourUTC3 = hours => {
	let [hour, minute, second] = hours.split(':')
	const utc3 = (parseInt(hour) + 21) % 24
	return `${utc3 >= 10 ? utc3 : `0${utc3}`}:${minute}:${second}`
}
const formatDateUTC3 = date => {
	if (!(date instanceof Date && !isNaN(date))) throw new Error('formatDateUTC3 expects a Date instance')
	let utc = date.toUTCString() // receive a new Date() and convert it to GMT
	console.log(utc)
	const [day, monthEnglish, year, hours] = utc.substr(5).split(' ')
	const monthNumber = date.getMonth() + 1
	const month = monthNumber >= 10 ? monthNumber : `0${monthNumber}`
	return `${day}/${month}/${year} ${hourUTC3(hours)}`
}

module.exports = formatDateUTC3