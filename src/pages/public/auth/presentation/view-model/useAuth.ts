import { useLoginMutation } from '@/hooks/login/useLoginMutation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import useLogin from '../../domain/auth/UseLogin'


interface FormInput {    
    email: string,
    password: string,    
}
const useAuth = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const {loginHandler} = useLogin()


    const { control, handleSubmit } = useForm<FormInput>({
        defaultValues: {
            email: '',
            password: ''
        }
    })
    const { mutate } = useLoginMutation()
    console.log(mutate)
    const onSubmit: SubmitHandler<FormInput> = (data) => {
        loginHandler(data)     
    }
    const toggleVisible = () => setIsVisible(!isVisible)


    return {
        isVisible,
        control,
        handleSubmit,
        toggleVisible,
        onSubmit
    }
}

export default useAuth
