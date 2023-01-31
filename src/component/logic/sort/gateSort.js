import { sortBy } from "./sort";

export default function gateSort(key, value) {
    // eslint-disable-next-line default-case
    switch (key) {
        case 'Giá tăng dần':
            return sortBy.priceBig(value)
        case 'Giá giảm dần':
            return sortBy.priceSmall(value)
        case 'Mới nhất':
            return sortBy.new(value)
        case 'Cũ nhất' :
            return sortBy.old(value)
        case 'Từ A-Z' :
            return sortBy.aToz(value)
        case 'Từ Z-A' :
            return sortBy.zToa(value)
    }
}