import { CarrosselContainer, FacilitieBox, FacilitiesArea, FooterConteiner } from './styles'

import Banner1 from '../../assets/banners/banner-1.png'
import pixImg from '../../assets/facilites/pix.svg'
import changeImg from '../../assets/facilites/change.svg'
import flowerImg from '../../assets/facilites/flower.svg'
import { ProductsSection } from '../../components/ProductsSection'
import { ProductsProvider } from '../../contexts/productsContext'
import { CategorysSection } from '../../components/CategorysSection'
import { NewsLetterSection } from '../../components/NewsLetterSection'
import { NavBar } from '../../components/NavBar'

export function Home() {


    return (
        <>
            <ProductsProvider>

                <NavBar />

                <CarrosselContainer>
                    <img src={Banner1} alt="" />
                </CarrosselContainer>

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
         

            <NewsLetterSection />

            <FooterConteiner>
                <span>2023 © Desenvolvido por Jhones | Projeto fictício sem fins comerciais.</span>
            </FooterConteiner>
        </>
    )
}