import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, nombre, img, category, descripcion, precio, stock}) => {
    return(
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>

                </h2>
            </header>
            <picture>
                <img src={img} alt={nombre} className='ItemImg'/>
            </picture>
            <section>
                <p className='Info'>
                    categoría:{category}
                </p>
                <p className='Info'>
                    descripción:{descripcion}
                </p>
                <p className='Info'>
                    Precio:{precio}
                </p>
            </section>
            <footer className='ItemFooter'>
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada', quantity)}/>
            </footer>
        </article>
    )
}

export default ItemDetail