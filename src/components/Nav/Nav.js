import { useEffect } from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuthContext } from '../../features/auth/AuthContext';
import styles from './Nav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShieldDog } from '@fortawesome/free-solid-svg-icons';



export function Nav() {
  const { user, logout } = useAuthContext();
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState
  (window.innerWidth)

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, []) 
  
  return (
    <nav className={styles['navigation']}>
    {(toggleMenu || screenWidth > 775) && (
    <ul className={styles['left-ul']}>
    
      <><li className={styles['list-item']}>
            <NavLink className={({ isActive }) => (isActive ? styles.active : "")} to="/" onClick={toggleNav}>Home</NavLink>
          </li><li className={styles['list-item']}>
              <NavLink className={({ isActive }) =>(isActive ? styles.active : "")} to="/Adopt" onClick={toggleNav}>Adopt</NavLink>
            </li><li className={styles['list-item']}>
              <NavLink className={({ isActive }) => (isActive ? styles.active : "")} to="/GiveUp" onClick={toggleNav}>Give Up</NavLink>
            </li><li className={styles['list-item']}>
              <NavLink className={({ isActive }) => (isActive ? styles.active : "")} to="/Donate" onClick={toggleNav}>Donate</NavLink>
            </li></>
      </ul>
      )}
      <ul className={styles['center-ul']}>
      <FontAwesomeIcon icon={faShieldDog} color="white" size='2x' flip  /></ul>
      <ul className={styles['right-ul']}>
        {user && (
            <>
          <li className={styles['push-right']}>
          <Link to={`userProfile/${user.id}`}> <><div className={styles['profile-picture']}> <img src={user.picture} alt={user.firstName} /></div> </></Link>
          <a href='/' onClick={(e) =>{
          e.preventDefault();
          logout();}
          }>Logout <i className="fa-solid fa-arrow-right-from-bracket"></i></a>
          </li>
          </>
          )}
          {!user && (
            <>
          <li className={styles['push-right']}>
          <NavLink className={({isActive}) => (isActive ? styles.active : '')} to="/register">Register</NavLink>
          </li>
          <li>
          <NavLink className={({isActive}) => (isActive ? styles.active : '')} to="/login"><i className="fa-solid fa-arrow-right-to-bracket"></i> Login</NavLink>
          </li>
          </>
          )}
    </ul>
    <button onClick={toggleNav} className={styles['btn']}>MENU</button>

    </nav>
  )
}
