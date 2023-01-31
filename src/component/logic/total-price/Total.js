export default function totalPrice(array) {
    let b = array.reduce((init, current) => {
        return init += current
    }, 0)
    return b
}