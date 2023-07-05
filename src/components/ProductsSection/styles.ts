import { styled } from "styled-components";
import * as Dialog from '@radix-ui/react-dialog'

export const ProductsArea = styled.div`
    max-width: 1290px;
    margin: 0 auto;

    h1{
        margin: 4rem 0 2rem;
        text-align: center;
    }

    section{
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        justify-content: space-between;

        @media(max-width: 1120px){
            justify-content: center;
        }

        div{
            max-width: 22rem;
            border: 1px solid ${props => props.theme['--gray']}
        }

        footer{
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;

            p{
                height: 4rem;
            }

            div{
                border: 0;
                display: flex;
                justify-content: space-between;
                align-items: center;

                span{
                    font-weight: bold;
                    font-size: 1.25rem;
                }

                button{
                    border: 0;
                    background-color: ${props => props.theme['--purple']};
                    padding: 0.75rem;
                    color: ${props => props.theme['--white']};
                    font-weight: bold;
                    cursor: pointer;
                    transition: all 0.2s ease-in;

                    &:hover{
                        transform: scale(1.05)
                    }
                }
            }
        }
    }
`

export const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    width: 100vw;
    height: 100vh;
    inset: 0;
    background: rgba(0, 0, 0, 0.75);
`

export const ModalHeader = styled.header`
    display: flex;
    gap: 1rem;
    align-items: center;

    background-color: ${props => props.theme['--black']};
    color: ${props => props.theme['--white']};
    padding: 1rem;

    svg{
        color: ${props => props.theme['--green']};
    }
`

export const DialogContent = styled(Dialog.Content)`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    border-radius: 4px;
    background-color: ${props => props.theme['--white']};

    section{
        display: flex;
        gap: 1rem;
        padding: 1rem;

        @media(max-width: 800px){
            flex-wrap: wrap;
        }

        img{
            min-height: 22rem;

            @media(max-width: 800px){
                max-height: 10rem;
            }
        }
    }
`

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.5rem;

    

    form{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        span{
            font-weight: bold;
        }

        button{
            flex: 1;
            border: 0;
            background-color: ${props => props.theme['--purple']};
            color: ${props => props.theme['--white']};
            font-weight: bold;
            padding: 1rem;
        }
    }
`

export const RadioContainer = styled.div`
    display: flex;
    gap: 2rem;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
    }
`