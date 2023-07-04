import { NewsLetterArea } from "./styles";
import { useForm, SubmitHandler } from 'react-hook-form'

interface FormInputSchema{
    email: string
}

export function NewsLetterSection(){

    const { register, handleSubmit } = useForm({
        defaultValues: {
            email: ''
        }
    })

    const onSubmit: SubmitHandler<FormInputSchema> = data => {
        console.log(data)
    }

    return(
        <NewsLetterArea>

                <h2>Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? Cadastre-se!</h2>

                <form onSubmit={(handleSubmit(onSubmit))}>

                    <input type="email" placeholder='Digite seu email' {...register('email')} required/>
                    <button type="submit" >Enviar</button>

                </form>

        </NewsLetterArea>
    )
}