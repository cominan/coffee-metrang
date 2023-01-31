import HomePage from "../../component/content/home-page/HomePage";

export const pathRoute = [

    {
        path: '/ground-coffee',
        key: 'GroundCofffe',
        name: 'Ground Coffee'
    },
    {
        path: '/roasted-coffe-bean',
        key: 'RoastedCoffeeBeans',
        name: 'Roasted Coffee Beans'
    },
    {
        path: '/instant-coffee',
        key: 'InstantCoffee',
        name: 'Instant Coffee'
    },

    {
        path: '/vacuum-ground-coffee',
        key: 'VacuumGroundCoffee',
        name: 'Vacuum Ground Coffee'
    },
    {
        path: '/tea',
        key: 'Tea',
        name: 'Tea'
    },
    {
        path: '/premium',
        key: 'Premium',
        name: 'Premium'
    },
    {
        path: '/',
        element: HomePage,
        key: null
    }
]