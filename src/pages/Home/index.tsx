import { CarrosselContainer, CategorySection, Container, FacilitieBox, FacilitiesArea, FooterConteiner, NavContainer, NewsLetterArea, ProductsArea } from './styles'

import meteoraLogo from '../../assets/meteora-logo.svg'
import Banner1 from '../../assets/banners/banner-1.png'
import pixImg from '../../assets/facilites/pix.svg'
import changeImg from '../../assets/facilites/change.svg'
import flowerImg from '../../assets/facilites/flower.svg'

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

    const productsList = [
        {
            id: '1',
            image: '/src/assets/products/Camiseta.png',
            title: 'Camiseta Conforto',
            description: 'Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex.',
            category: 'Camisetas',
            price: 70
        },
        {
            id: '2',
            image: '/src/assets/products/Calça.png',
            title: 'Calça Alfaiataria',
            description: 'Modelo Wide Leg alfaiataria em linho. Uma peça pra vida toda!',
            category: 'Calças',
            price: 180
        },
        {
            id: '3',
            image: '/src/assets/products/Tenis.png',
            title: 'Tênis Chunky',
            description: 'Snicker casual com solado mais alto e modelagem robusta. Modelo unissex.',
            category: 'Calçados',
            price: 250
        },
        {
            id: '4',
            image: '/src/assets/products/Jaqueta.png',
            title: 'Jaqueta Jeans',
            description: 'Modelo unissex oversized com gola de camurça. Atemporal e autêntica!',
            category: 'Casacos',
            price: 150
        },
        {
            id: '5',
            image: '/src/assets/products/óculos.png',
            title: 'Óculos Redondo',
            description: 'Armação metálica em grafite com lentes arredondadas. Sem erro!',
            category: 'Óculos',
            price: 120
        },
        {
            id: '6',
            image: '/src/assets/products/Bolsa.png',
            title: 'Bolsa coringa',
            description: 'Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!',
            category: 'Bolsas',
            price: 120
        },
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