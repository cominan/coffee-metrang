export default function saveLocal (key,value) {
 sessionStorage.setItem(key,JSON.stringify(value))   
}