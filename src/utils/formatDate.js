const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export const getMonth = date => monthNames[date.getMonth()]

export const getDayMonth = date => `${getMonth(date)} ${date.getDate()} ${date.getFullYear()}`
