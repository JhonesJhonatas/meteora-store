import { styled } from "styled-components"

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