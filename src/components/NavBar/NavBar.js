import CartWidget from '../CartWidget/CartWidget';
const NavBar = () => {
    return (
        <nav>
            <h1>Venta de Skins</h1>
            <div>
                <button>Pistolas</button>
                <button>Escopetas</button>
                <button>Metralletas</button>
                <button>Francotiradores</button>
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar