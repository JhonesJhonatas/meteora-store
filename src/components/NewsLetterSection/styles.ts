import { styled } from "styled-components";

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