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
    clearFilter: Function,
    filterBySearchForm: Function
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

    function filterBySearchForm(query: string){

        const newList = listWithNoFilter.filter(product => {

            const { title, description, category } = product

            const lowerCaseQuery = query.toLowerCase()

            return title.toLowerCase().includes(lowerCaseQuery) || description.toLowerCase().includes(lowerCaseQuery) || category.toLowerCase().includes(lowerCaseQuery)

        })

        setProductsList(newList)
        
        if(query !== ''){
            setHasFilter(true)
        }else{
            setHasFilter(false)
        }
        
    }

    return (

        <ProductsContext.Provider value={{productsList, filterProductListByCategory, hasFilter, clearFilter, filterBySearchForm }} >

            {children}

        </ProductsContext.Provider>

    )
}