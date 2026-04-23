"use client"
import { Formulario } from "./Component/Form/Formulario";
import { Productos } from "./Component/Productos/Productos";
import { useEffect, useState } from "react";
import axios from "axios";

// 1. El usuario ingresa una idea del producto
// Component/Form -> Recibe y se envia por medio de post

// 2. Se envía a un endpoint del backend

// 3. El backend consulta el modelo en Ollama

// 4. Se recibe la respuesta estructurada

// 5. Se muestra al usuario

// 6. El usuario puede editar antes de guardar

export default function Home() {
  const [productos, setProductos] = useState([]);

  useEffect(()=>{
    const obtenerProductos = async ()=>{
      const response = await fetch('/API/productos/producto_get');
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
      <h1>Formulario</h1>
      <Formulario/>

      <Productos 
      productos={productos}
      />
    </>
  );
}

