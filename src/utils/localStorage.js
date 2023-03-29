export const save = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))
}


export const retriveData = (key) => {
    return JSON.parse(localStorage.getItem(key))
}