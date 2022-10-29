import {useForm} from "react-hook-form";


export default function LoginSingUp()
{
    const {register,handleSubmit} = useForm()


    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor={'username'}>Username</label>
            <input {...register('userName')} placeholder={'username'}/>
            <label htmlFor={'email'}>Email</label>
            <input {...register('email')} placeholder={'email'}/>
            <label htmlFor={'password'}>Password</label>
            <input {...register('passord')} placeholder={'password'}/>
        </form>
    )
}