import CartWidget from '../CartWidget/CartWidget';
import "../NavBar/NavBar.css";
const NavBar = () => {
    return (
        <nav>
            <h1>Venta de Skins de Armas de Valorant</h1>
            <div>
                <button className='Button'>Pistolas</button>
                <button className='Button'>Escopetas</button>
                <button className='Button'>Metralletas</button>
                <button className='Button'>Francotiradores</button>
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar