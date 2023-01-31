export default function getDataInLocal (key) {
    return JSON.parse(sessionStorage.getItem(key))
}