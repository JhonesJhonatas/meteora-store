import { CarrosselContainer, Container, FacilitieBox, FacilitiesArea, FooterConteiner, NavContainer, NewsLetterArea } from './styles'

import meteoraLogo from '../../assets/meteora-logo.svg'
import Banner1 from '../../assets/banners/banner-1.png'
import pixImg from '../../assets/facilites/pix.svg'
import changeImg from '../../assets/facilites/change.svg'
import flowerImg from '../../assets/facilites/flower.svg'
import { ProductsSection } from '../../components/ProductsSection'
import { ProductsProvider } from '../../contexts/productsContext'
import { CategorysSection } from '../../components/CategorysSection'

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

            <ProductsProvider>

                <CategorysSection />

                <ProductsSection />

            </ProductsProvider>

            <FacilitiesArea>
                <h1>Conheça todas as nossas facilidades</h1>

                <section>
                    <FacilitieBox>
                        <img src={pixImg} />
                        <div>
                            <span>PAGUE PELO PIX</span>
                            <p>Ganhe 5% OFF empagamentos via PIX.</p>
                        </div>
                    </FacilitieBox>
                    <FacilitieBox>
                        <img src={changeImg} />
                        <div>
                            <span>TROCA GRÁTIS</span>
                            <p>Fique livre para trocar em até 30 dias.</p>
                        </div>
                    </FacilitieBox>
                    <FacilitieBox>
                        <img src={flowerImg} />
                        <div>
                            <span>SUSTENTABILIDADE</span>
                            <p>Moda responsável, que respeita o meio ambiente.</p>
                        </div>
                    </FacilitieBox>
                </section>
            </FacilitiesArea>

            <NewsLetterArea>

                <h2>Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? Cadastre-se!</h2>

                <form>
                    <input type="text" placeholder='Digite seu email' />
                    <button>Enviar</button>
                </form>

            </NewsLetterArea>

            <FooterConteiner>
                <span>2023 © Desenvolvido por Jhones | Projeto fictício sem fins comerciais.</span>
            </FooterConteiner>
        </>
    )
}