const toast = (text) => {
    return {
        type: 'TOAST_SHOW',
        text: text
    }
}

module.exports = {
    toast
}