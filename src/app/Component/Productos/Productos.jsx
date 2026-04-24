export const Productos = ({productos})=>{
  return (  
  <div className="items_container">
    {productos.map((producto) => ( 
      <div className="item_card" key={producto.id}>  
        <span className="item_prop">{producto.categoria}</span>
        <span className="item_prop">{producto.descripcion}</span>
        <span className="item_prop">{producto.id}</span>
        <span className="item_prop">{producto.nombre}</span>
      </div>
    ))}
  </div>
  )
}