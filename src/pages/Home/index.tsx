import { CarrosselContainer, CategorySection, Container, FooterConteiner, NavContainer } from './styles'

import meteoraLogo from '../../assets/meteora-logo.svg'
import Banner1 from '../../assets/banners/banner-1.png'

export function Home() {

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

    return (
        <>
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

                    <form>

                        <input type="text" placeholder='Digite o produto' />
                        <button type='submit'>Buscar</button>

                    </form>

                </Container>

            </NavContainer>

            <CarrosselContainer>
                <img src={Banner1} alt="" />
            </CarrosselContainer>

            <CategorySection>

                <h1>Busque por categoria:</h1>

                <section>

                    {categoryList.map(category => {
                        return (
                            <div key={category.id}>

                                <img src={category.img} />

                                <footer>

                                    <span>{category.title}</span>

                                </footer>

                            </div>
                        )
                    })}

                </section>
            </CategorySection>

            <FooterConteiner>
                <span>2023 © Desenvolvido por Jhones | Projeto fictício sem fins comerciais.</span>
            </FooterConteiner>
        </>
    )
}