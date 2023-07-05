import { styled } from 'styled-components'

export const CarrosselContainer = styled.div`
    width: 100vw;
    text-align: center;
    margin-top: -2px;

    img{
        max-width: 1220px;

        @media (max-width: 800px) {
            max-width: 100%;
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

export const FooterConteiner = styled.footer`
    background-color: ${props => props.theme['--black']};
    color: ${props => props.theme['--white']};
    text-align: center;

    padding: 1rem 0;
`