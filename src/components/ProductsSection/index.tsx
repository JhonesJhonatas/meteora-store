import { useContext } from 'react'
import { ProductsContext } from '../../contexts/productsContext'
import { ProductsArea } from './styles'

export function ProductsSection(){

    const { productsList } = useContext(ProductsContext)

    return(
        <ProductsArea>
                <h1>Produtos que estão bombando!</h1>

                <section>
                    {productsList.map(product => {

                        const priceFormated = new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(product.price)

                        return (
                            <div key={product.id}>

                                <img src={product.image} alt='imagem do produto' />

                                <footer>

                                    <h3>{product.title}</h3>

                                    <p>{product.description}</p>

                                    <div>
                                        <span>{priceFormated}</span>
                                        <button>Ver mais</button>
                                    </div>

                                </footer>

                            </div>
                        )
                    })}
                </section>
            </ProductsArea>
    )
}