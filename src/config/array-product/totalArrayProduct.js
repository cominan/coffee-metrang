


export default function totalArrayProduct(data) {
    let products = []
    const names = ['GroundCofffe', 'RoastedCoffeeBeans', 'InstantCoffee', 'VacuumGroundCoffee', 'Tea', 'Premium']
    names.map(name => {
        products = [...products, ...data.Category[name]]
    })
    return products
}
