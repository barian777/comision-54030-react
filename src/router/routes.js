import { ItemListContainer, ItemDetailContainer, Cart, CheckOutContainer } from "../components/pages"

export const routes = [

    {
        id:"home",
        path:"/",
        Element: ItemListContainer 
    },
    {
        id:"details",
        path:"/item/:id",
        Element: ItemDetailContainer
    },
    {
        id:"categories",
        path:"/category/:category",
        Element: ItemListContainer
    },
    {
        id:"checkout",
        path:"/checkout",
        Element: CheckOutContainer
    },
    {
        id:"cart",
        path:"/cart",
        Element: Cart
    }

]

