import { useContext } from 'react'
import { ProductsContext } from '../../contexts/productsContext'
import { DialogContent, ModalContent, ModalHeader, Overlay, ProductsArea, RadioContainer } from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { CheckCircle } from '@phosphor-icons/react'

export function ProductsSection() {

    const { productsList } = useContext(ProductsContext)

    return (
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
                                    <Dialog.Root>
                                        <Dialog.Trigger asChild>
                                            <button>Ver mais</button>
                                        </Dialog.Trigger>
                                        <Dialog.Portal>
                                            <Overlay />
                                            <DialogContent>

                                                <ModalHeader>
                                                    <CheckCircle size={28} />
                                                    <Dialog.Title>Confira detalhes sobre o produto</Dialog.Title>
                                                </ModalHeader>

                                                <section>
                                                    <img src={product.image} alt="" />
                                                    <ModalContent>
                                                        <h3>{product.title}</h3>

                                                        <p>{product.title}</p>

                                                        <hr />

                                                        <h2>{priceFormated}</h2>

                                                        <span>Vendido e entregue por Riachuelo</span>

                                                        <hr />

                                                        <form>
                                                            <span>Cores:</span>
                                                            <RadioContainer>
                                                                <div>
                                                                    <input type="radio" name='cor' id='cor1' value='azulClaro' />
                                                                    <label htmlFor="cor1">Azul claro</label>
                                                                </div>
                                                                <div>
                                                                    <input type="radio" name='cor' id='cor2' value='offWhite' />
                                                                    <label htmlFor="cor2">Offwhite</label>
                                                                </div>
                                                                <div>
                                                                    <input type="radio" name='cor' id='cor3' value='preto' />
                                                                    <label htmlFor="cor3">Preto</label>
                                                                </div>
                                                            </RadioContainer>

                                                            <hr />

                                                            <span>Tamanho:</span>
                                                            <RadioContainer>
                                                                <div>
                                                                    <input type="radio" name='tamanho' id='pp' value='pp' />
                                                                    <label htmlFor="pp">PP</label>
                                                                </div>
                                                                <div>
                                                                    <input type="radio" name='tamanho' id='p' value='p' />
                                                                    <label htmlFor="p">P</label>
                                                                </div>
                                                                <div>
                                                                    <input type="radio" name='tamanho' id='m' value='m' />
                                                                    <label htmlFor="m">M</label>
                                                                </div>
                                                                <div>
                                                                    <input type="radio" name='tamanho' id='g' value='g' />
                                                                    <label htmlFor="g">G</label>
                                                                </div>
                                                                <div>
                                                                    <input type="radio" name='tamanho' id='gg' value='gg' />
                                                                    <label htmlFor="gg">GG</label>
                                                                </div>
                                                            </RadioContainer>

                                                            <button type='submit'>Adicionar à sacola</button>
                                                        </form>
                                                    </ModalContent>
                                                </section>

                                            </DialogContent>
                                        </Dialog.Portal>
                                    </Dialog.Root>
                                </div>

                            </footer>

                        </div>
                    )
                })}
            </section>
        </ProductsArea>
    )
}