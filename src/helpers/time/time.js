export function getFullDate(timestamp) {
    if (timestamp) {
        let matchDate = new Date(timestamp * 1000)
        let now = new Date(Date.now())
        if (matchDate.getFullYear() > now.getFullYear() || matchDate.getMonth() > now.getMonth()) {
            return matchDate.toLocaleDateString()
        } else if (matchDate.getFullYear() === now.getFullYear() && matchDate.getMonth() === now.getMonth()) {
            if (matchDate.getDate() === now.getDate()) {
                return 'Сегодня'
            } else if (matchDate.getDate() - now.getDate() === 1) {
                return 'Завтра'
            } else {
                return matchDate.toLocaleDateString()
            }
        }
    } else {
        return ''
    }
}

export function getDateTime(timestamp) {
    if (timestamp) {
        let matchDate = new Date(timestamp * 1000)
        return matchDate.toLocaleTimeString('ru-RU', {hour: '2-digit', minute:'2-digit'})
    } else {
        return ''
    }
}