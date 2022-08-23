import { NavLink } from "react-router-dom"

import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav  className={styles.navbar}>
        <NavLink to='/' className={styles.brand}>
            Fast <span>Blog</span>
        </NavLink>
        <ul className={styles.links_list}>
            <li>
                <NavLink to='/' className={({isActive}) => (isActive ? styles.active : "")}>Home</NavLink>
            </li>
            <li>
                <NavLink to='/About' className={({isActive}) => (isActive ? styles.active : "")}>Sobre</NavLink>
            </li>
            <li>
                <NavLink to='/Login' className={({isActive}) => (isActive ? styles.active : "")}>Entrar</NavLink>
            </li>
            <li>
                <NavLink to='/Register' className={({isActive}) => (isActive ? styles.active : "")}>Cadastre-se</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar