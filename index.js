const formatDateUTC3 = date => {
	if (!(date instanceof Date && !isNaN(date))) throw new Error('formatDateUTC expects a Date instance')
	return date.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })
}

const formatDateUTC = date => {
	if (!(date instanceof Date && !isNaN(date))) throw new Error('formatDateUTC expects a Date instance')
	return date.toLocaleString('pt-BR', { timeZone: 'UTC' })
}

exports.formatDateUTC3 = formatDateUTC3
exports.formatDateUTC = formatDateUTC