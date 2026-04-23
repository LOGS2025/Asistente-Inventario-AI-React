export const Productos = ({productos})=>{
  return (  
  <>
    {productos.map((producto) => ( 
      <div key={producto.id}>  
        <span>{producto.categoria}</span>
        <span>{producto.descripcion}</span>
        <span>{producto.id}</span>
        <span>{producto.nombre}</span>
      </div>
    ))}
  </>)
}