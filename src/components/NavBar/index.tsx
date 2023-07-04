import { Container, NavContainer } from "./styles"
import meteoraLogo from '../../assets/meteora-logo.svg'

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

                <form>

                    <input type="text" placeholder='Digite o produto' />
                    <button type='submit'>Buscar</button>

                </form>

            </Container>

        </NavContainer>
    )
}