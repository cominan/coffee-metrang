import { array } from "./ValueTable"

export default function pushPrice(arr, product) {
    if (arr.length > 0 || product.length > 0) {
        if (arr.length !== product.length) {
            arr.map(item => {
                if (array.includes(item.props.price * item.value)) {
                    return
                } else {
                    array.push(item.props.price * item.value)
                }
            })
            return array
        } else {
            product.map(item => {
                if (array.includes(item.props.price * item.value)) {
                    return
                } else {
                    array.push(item.props.price * item.value)
                }
            })
            return array
        }
    } else {
        array.splice(0)
        return array
    }
}