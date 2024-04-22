import './assets/css/styles.css'
import Serie from './assets/img/fallout_logo.svg'

function Principal() {
    return ( 
    <div class="container">
    <div class="ppal">
        <h1 class="titulo">VAULT - TEC - INFORMACION</h1>
        <h2>Juegos</h2>
        <ul class="juegos">
            <li>Fallout (1997)</li>
            <li>Fallout 2 (1998)</li>
            <li>Fallout Tactics: Brotherhood of Steel (2003)</li>
            <li>Fallout: Brotherhood of Steel (2004)</li>
            <li>Fallout 3 (2008)</li>
            <li>Fallout: New Vegas (2010)</li>
            <li>Fallout Shelter (2014)</li>
            <li>Fallout 4 (2015)</li>
            <li>Fallout 76 (2018)</li>            
        </ul>

        <h2>Línea de tiempo de cada entrega en orden cronológico</h2>
        <ul class="juegos">
            <li>Fallout 76: Año 2102</li>
            <li>Fallout: Año 2161</li>
            <li>Fallout 2: Año 2197</li>
            <li>Fallout 3: Año 2277</li>
            <li>Fallout New Vegas: Año 2281</li>
            <li>Fallout 4: Año 2287</li>           
        </ul>

        
    </div>
    <div class="aside">
        <h3>SERIE DE STREAMING</h3>
        <p>La serie describe las consecuencias de una guerra nuclear apocalíptica en una historia 
            alternativa de la Tierra donde los avances en la tecnología nuclear después de la Segunda 
            Guerra Mundial llevaron al surgimiento de una sociedad retrofuturista y una posterior guerra 
            por los recursos. Muchos supervivientes se refugiaron en búnkeres nucleares conocidos como Bóvedas,
             construidos para preservar a la humanidad en caso de una aniquilación nuclear, sin saber que cada 
             Bóveda estaba diseñada para realizar experimentos psicológicos con los habitantes.
            Más de doscientos años después, una joven llamada Lucy deja atrás su casa en el Refugio 33 
            para aventurarse en el peligroso e implacable páramo de la devastada Los Ángeles en busca de su padre.
             En el camino, conoce a un escudero de la Hermandad del Acero y a un cazarrecompensas necrófago, cada 
             uno con su propio pasado misterioso y agendas que resolver.</p>

        <h4 class="serie">CAPITULOS 1era TEMPORADA (2024)</h4>

        <ul class="juegos2">
            <li>1- EL FIN</li>
            <li>2- EL OBJETIVO </li>
            <li>3- LA CABEZA</li>
            <li>4- LOS NECROFAGOS</li>
            <li>5- EL PASADO</li>
            <li>6- LA TRAMPA</li>
            <li>7- EL RADIO</li>
            <li>8- EL COMIENZO</li>
        </ul>
        
        <img class="aside-img" src={Serie}/>
    </div>
    </div> )
}

export default Principal;