import { createContext, ReactNode, useEffect, useState } from 'react'
import axios from 'axios'

interface ProductsProviderProps {
    children: ReactNode,
}

interface ProductSchema {
    id: string,
    image: string,
    title: string,
    description: string,
    category: string,
    price: number
}

interface ProductContextSchema{
    productsList: ProductSchema[],
    filterProductListByCategory: Function
    hasFilter: boolean,
    clearFilter: Function
}

export const ProductsContext = createContext({} as ProductContextSchema)

export function ProductsProvider({ children }: ProductsProviderProps) {

    const [listWithNoFilter, setListWithNoFilter] = useState<ProductSchema[]>([])
    const [hasFilter, setHasFilter] = useState(Boolean)
    const [productsList, setProductsList] = useState<ProductSchema[]>([])

    useEffect(() => {
        axios.get('/src/utils/listOfProducts.json')
            .then(res => {
                setProductsList(res.data)
                setListWithNoFilter(res.data)
            })
    }, [])

    function filterProductListByCategory(category: string){

        const filteredList = listWithNoFilter.filter(product => product.category === category)

        setProductsList(filteredList)
        setHasFilter(true)

    }

    function clearFilter(){
        setHasFilter(false)
        setProductsList(listWithNoFilter)
    }

    return (

        <ProductsContext.Provider value={{productsList, filterProductListByCategory, hasFilter, clearFilter}} >

            {children}

        </ProductsContext.Provider>

    )
}