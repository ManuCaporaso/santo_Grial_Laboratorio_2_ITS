import './assets/css/styles.css'
import Logo from './assets/img/logo.svg'

function NavBar() {
    return (  <nav className="navbar">
    <img class="navbar-logo" src={Logo}/>
    <ul className="navbar-list">
      <li className="navbar-item">
        <a href="/" className="navbar-link">INICIO</a>
      </li>
      <li className="navbar-item">
        <a href="/acerca" className="navbar-link">ACERCA DE</a>
      </li>
      <li className="navbar-item">
        <a href="/contacto" className="navbar-link">CONTACTO</a>
      </li>
    </ul>
  </nav> );
}

export default NavBar;