import './Item.css'

const Item = ({id, nombre, precio, categoria, img, stock, descripcion}) => {
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
            </section>
            <footer className='ItemFooter'>
                <link to={'/item/${id}'} className='option'>Ver detalle</link>
            </footer>
        </article>
    )
}

export default Item