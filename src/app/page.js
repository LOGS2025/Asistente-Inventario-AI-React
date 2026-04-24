"use client"
import { Productos } from "./Component/Productos/Productos";
import { useEffect, useState } from "react";

export default function Home() {
  const [productos, setProductos] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    const obtenerProductos = async ()=>{
      const response = await fetch('/api/productos/producto_get');
      await response.json().then((res)=>{
        if (res.ok) {
          setProductos(res.data);
          console.log(res.data);
        }
      })};
      
      obtenerProductos();
    },[]);  

  return (
    <>
      <h1>/</h1>

      <Productos 
      productos={productos}
      />
    </>
  );
}

