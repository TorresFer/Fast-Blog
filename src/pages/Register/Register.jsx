import styles from '../Register/Register.module.css'

import {useState, useEffect} from 'react'

const Register = () => {
    const [displayName, setDisplayName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <div>
        <h1>Cadastre-se e faça seu primeiro post!</h1>
        <p>Crie e compartilhe suas histórias!</p>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Nome:</span>
                <input type="text" name='displayName' required placeholder="Nome do usuário"/>
            </label>
            <label>
                <span>E-mail:</span>
                <input type="email" name='email' required placeholder="E-mail do usuário"/>
            </label>
            <label>
                <span>Senha:</span>
                <input type="password" name='password' required placeholder="Insira sua senha"/>
            </label>
            <label>
                <span>Confirmação de senha:</span>
                <input type="password" name='confirmPassword' required placeholder="Confirme sua senha"/>
            </label>
            <button className='btn'>Cadastrar</button>
        </form>
    </div>
  )
}

export default Register