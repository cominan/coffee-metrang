import { saveLocal } from "../../../config"


let products = []
let ids = []

export default function filterDuplicateElements(payload) {
    if (products.length === 0) {
        products.push(payload)
        ids.push(payload.props.id)
    } else {
        for (let i = 0; i < products.length; i++) {
            if (ids.includes(payload.props.id)) {
                if (products[i].props.id === payload.props.id) {
                    products[i].value += payload.value
                    products[i] = products[i]
                    break
                }
            } else {
                products.push(payload)
                ids.push(payload.props.id)
                break
            }
        }

    }
    saveLocal('product', products)
}