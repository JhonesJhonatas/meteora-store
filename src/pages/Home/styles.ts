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