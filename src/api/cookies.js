export const getCookie = () => {
    return JSON.parse(document.cookie)
}

export const setCookie = (data) => {
    document.cookie = JSON.stringify(data)
}