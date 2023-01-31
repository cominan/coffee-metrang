import aToz from "./compare/aToz"
import big from "./compare/big"
import small from "./compare/small"
import zToa from "./compare/zToa"

export const sortBy = {

    priceBig: (value) => {
        let price = []
        let newProduct = []
        value.map(item => {
            price.push(item.price)
            price.sort(big)
        })
        // console.log(price);
        for (let i = 0; i < price.length; i++) {
            for (let j = 0; j < value.length; j++) {
                if (value[j].price === price[i]) {
                    newProduct.push(value[j])
                }
            }
        }
        return newProduct
    },
    priceSmall: (value) => {
        let price = []
        let newProduct = []
        value.map(item => {
            price.push(item.price)
            price.sort(small)
        })
        // console.log(price);
        for (let i = 0; i < price.length; i++) {
            for (let j = 0; j < value.length; j++) {
                if (value[j].price === price[i]) {
                    newProduct.push(value[j])
                }
            }
        }
        return newProduct
    },
    new: (value) => {
        let product = []
        let newProduct = []
        value.map(item => {
            product.push(item.id)
            product.sort(big)
        })
        for (let i = 0; i < product.length; i++) {
            for (let j = 0; j < value.length; j++) {
                if (value[j].id === product[i]) {
                    newProduct.push(value[j])
                }
            }
        }
        return newProduct
    },
    old: (value) => {
        let product = []
        let newProduct = []
        value.map(item => {
            product.push(item.id)
            product.sort(small)
        })
        for (let i = 0; i < product.length; i++) {
            for (let j = 0; j < value.length; j++) {
                if (value[j].id === product[i]) {
                    newProduct.push(value[j])
                }
            }
        }
        return newProduct
    },
    aToz: (value) => {
        let product = []
        let newProduct = []
        value.map(item => {
            product.push(item.title)
            product.sort(aToz)
        })
        for (let i = 0; i < product.length; i++) {
            for (let j = 0; j < value.length; j++) {
                if (value[j].title === product[i]) {
                    newProduct.push(value[j])
                }
            }
        }
        return newProduct
    },
    zToa: (value) => {
        let product = []
        let newProduct = []
        value.map(item => {
            product.push(item.title)
            product.sort(zToa)
        })
        for (let i = 0; i < product.length; i++) {
            for (let j = 0; j < value.length; j++) {
                if (value[j].title === product[i]) {
                    newProduct.push(value[j])
                }
            }
        }
        return newProduct
    },
}