import { styled } from "styled-components";

export const ProductsArea = styled.div`
    max-width: 1220px;
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