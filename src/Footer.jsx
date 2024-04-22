import './assets/css/styles.css'

function Footer() {
    return ( <footer className="footer">
    <div className="container-footer">
      <div className="row">
        <div className="col">
          <h3>INFORMACION DE CONTACTO</h3>
          <p>Dirección: Sede Vaultec - ZN Vernon Square</p>
          <p>Teléfono: 123-456-789</p>
          <p>Email: Intra-Vault@vaultec.com</p>
        </div>
        <div className="col">
          <h3>ENLACES UTILES</h3>
          <ul class="lista-footer">
            <li><a href="/acerca" >ACERCA DE</a></li>
            <li><a href="/servicios" >NUESTROS SERVICIOS</a></li>
            <li><a href="/contacto" >CONTACTO</a></li>
          </ul>
        </div>
      </div>
      <h4>Todos los derechos reservados©</h4>
    </div>
  </footer> );
}

export default Footer;