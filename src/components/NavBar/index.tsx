import { Container, NavContainer } from "./styles"
import meteoraLogo from '../../assets/meteora-logo.svg'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useContext } from "react"
import { ProductsContext } from '../../contexts/productsContext'

interface SearchFormSchema {
    queryInput: string
}

export function NavBar() {

    const navLinks = [
        {
            id: '1',
            title: 'Home',
            path: '#'
        },
        {
            id: '2',
            title: 'Nossas lojas',
            path: '#'
        },
        {
            id: '3',
            title: 'Novidades',
            path: '#'
        },
        {
            id: '4',
            title: 'Promoções',
            path: '#'
        }
    ]

    const { filterBySearchForm } = useContext(ProductsContext)

    const { register, handleSubmit } = useForm({
        defaultValues: {
            queryInput: ''
        }
    })

    const onSubmit: SubmitHandler<SearchFormSchema> = data => {
        filterBySearchForm(data.queryInput)
    }
    

    return (
        <NavContainer>

            <Container>

                <div>

                    <img src={meteoraLogo} alt="Meteora Logo" />

                    {navLinks.map(item => {
                        return (
                            <a key={item.id} href={item.path}>{item.title}</a>
                        )
                    })}

                </div>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <input type="text" placeholder='Digite o produto' {...register('queryInput')} />
                    <button type="submit">Buscar</button>

                </form>

            </Container>

        </NavContainer>
    )
}