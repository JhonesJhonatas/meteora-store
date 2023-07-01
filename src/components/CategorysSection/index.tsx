import {useContext} from 'react'
import { ProductsContext } from '../../contexts/productsContext'
import { Funnel } from '@phosphor-icons/react'

import { CategorySection } from "./styles"

export function CategorysSection(){

    const { filterProductListByCategory, hasFilter, clearFilter } = useContext(ProductsContext)

    const categoryList = [
        {
            id: '1',
            title: 'Camisetas',
            img: '/src/assets/categorys/camisetas.png'
        },
        {
            id: '2',
            title: 'Bolsas',
            img: '/src/assets/categorys/bolsas.png'
        },
        {
            id: '3',
            title: 'Calçados',
            img: '/src/assets/categorys/calcados.png'
        },
        {
            id: '4',
            title: 'Calças',
            img: '/src/assets/categorys/calcas.png'
        },
        {
            id: '5',
            title: 'Casacos',
            img: '/src/assets/categorys/casacos.png'
        },
        {
            id: '6',
            title: 'Óculos',
            img: '/src/assets/categorys/oculos.png'
        }
    ]

    function searchByCategory(category: string){
        filterProductListByCategory(category)
    }

    function handleClearFilters(){
        clearFilter()
    }

    return(
            <CategorySection>

                <h1>Busque por categoria:</h1>

                <section>

                    {categoryList.map(category => {
                        return (
                            <div key={category.id} onClick={() => {searchByCategory(category.title)}}>

                                <img src={category.img} />

                                <footer>

                                    <span>{category.title}</span>

                                </footer>

                            </div>
                        )
                    })}

                </section>

                {hasFilter === true ? <button onClick={handleClearFilters}><Funnel size={20} />Limpar Filtro</button> : <></>}
                
            </CategorySection>
    )
}