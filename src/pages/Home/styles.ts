import { styled } from 'styled-components'

export const NavContainer = styled.nav`
    background-color: ${props => props.theme['--black']};
    padding: 1rem 0;
`

export const Container = styled.div`
    max-width: 1220px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    div{
        display: flex;
        align-items: center;
        gap: 1rem;

        a{
            text-decoration: none;
            color: ${props => props.theme['--white']};
            cursor: pointer;
        }
    }

    form{
        display: flex;
        align-items: center;
        gap: 0.5rem;

        input {
            border: 0;
            padding: 0.4rem 0.5rem;
            background-color: ${props => props.theme['--white']};
        }

        button {
            border: 1px solid ${props => props.theme['--white']};
            padding: 0.35rem 0.5rem;
            background-color: transparent;
            color: ${props => props.theme['--white']};
            font-weight: bold;
            cursor: pointer;
        }
    }
`

export const CarrosselContainer = styled.div`
    width: 100vw;
    text-align: center;
    margin-top: -2px;

    img{
        max-width: 1220px;
    }
`

export const CategorySection = styled.div`
    h1{
        text-align: center;
        margin: 3rem 0 2rem;
    }

    section{
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        max-width: 1220px;
        margin: 0 auto;

        div{

            background-color: ${props => props.theme['--green']};
            cursor: pointer;

            img{
                max-height: 8rem;
            }

            footer{
                padding: 0.5rem 0;
                text-align: center;
                color: ${props => props.theme['--white']};
                background-color :${props => props.theme['--black']};
            }
        }
    }
`

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
                }
            }
        }
    }
`

export const FacilitiesArea = styled.div`
    margin: 4rem 0 0;
    background-color: ${props => props.theme['--black']};
    color: ${props => props.theme['--white']};
    padding: 3rem 0;

    h1{
        text-align: center;
    }

    section{
        max-width: 1220px;
        margin: 0 auto;
        display: flex;
        margin-top: 3rem;
        justify-content: space-between;
    }
`

export const FacilitieBox = styled.div`
    display: flex;
    gap: 1rem;
    max-width: 22rem;
    
    div{
        display: flex;
        flex-direction: column;
        gap: 0.75rem;

        span{
            font-weight: bold;
            color: ${props => props.theme['--green']}
        }
    }
`

export const NewsLetterArea = styled.section`
    max-width: 900px;
    margin: 4rem auto;
    padding: 3rem;
    border: 1px solid ${props => props.theme['--black']};
    
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h2{
        text-align: center;
    }

    form{
        display: flex;
        gap: 1rem;

        input{
            flex: 1;
            padding: 0.5rem 1rem;
        }

        button{
            border: 0;
            padding: 0 1rem;
            background-color: ${props => props.theme['--purple']};
            color: ${props => props.theme['--white']};
            font-weight: bold;
        }
    }
`

export const FooterConteiner = styled.footer`
    background-color: ${props => props.theme['--black']};
    color: ${props => props.theme['--white']};
    text-align: center;

    padding: 1rem 0;
`