import './Item.css'
import { Link } from 'react-router-dom'


const Item = ({id, nombre, precio, category, img, stock, descripcion}) => {
    return(
        <article className='CardItem'>
            <header className='header'>
                <h2 className='ItemHeader'>{nombre}</h2>
            </header>
            <picture>
                <img src={img} alt={nombre} className='ItemImage'/>
            </picture>
            <section>
                <p className='info'>
                    Precio: ${precio}
                </p>
                <p className='info'>
                    Stock Disponible: {stock}
                </p>
                <Link to={`/Item/${Item.id}`} >Detalles  </Link>
            </section>
            <footer className='ItemFooter'>
                
            </footer>
        </article>
    )
}

export default Item