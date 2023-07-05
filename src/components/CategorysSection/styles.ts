import { styled } from "styled-components";

export const CategorySection = styled.div`
    max-width: 1290px;
    margin: 0 auto;

    h1{
        text-align: center;
        margin: 3rem 0 2rem;
    }

    section{
        padding: 2rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 1rem;

        div{
            background-color: ${props => props.theme['--green']};
            cursor: pointer;
            transition: all 0.2s ease-in-out;

            img{
                max-height: 8rem;
            }

            footer{
                padding: 0.5rem 0;
                text-align: center;
                color: ${props => props.theme['--white']};
                background-color :${props => props.theme['--black']};
            }

            &:hover{
                transform: scale(1.03);
            }
        }
    }

    button{
        margin-top: 1rem;
        width: 100%;
        border: 0;
        background-color: ${props => props.theme['--purple']};
        padding: 0.5rem 0.5rem;
        font-weight: bold;
        color: ${props => props.theme['--white']};
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        display: flex;
        gap: 0.25rem;
        align-items: center;
        justify-content: center;

        &:hover{
            transform: scale(1.02);
        }
    }
`