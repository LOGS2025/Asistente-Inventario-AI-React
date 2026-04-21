"use client"
import { useRef } from "react"
import { userPOST, userPUT } from "@/app/services/userService";

export const Form = ()=>{

  const inputRef = useRef();


  const handleButton = async ()=>{
    console.log(inputRef.current.value);

    const objectPayload_dante = {
      "first_name" : 'Dante',
      "last_name_f" : 'Barrera',
      "last_name_m" : 'Barrera',
      "birth_date" : '2004-10-20',
      "email" : 'dante@gmail.com',
      "password_hash" : "santi_me_cae_bien",
      "phone" : "1010",
    }

    const response = userPOST(objectPayload_dante);
  }

  const handlerUpdate = async ()=>{
    console.log(inputRef.current.value);

    const objectPayload_dante = {
      "id" : "2",
      "email" : 'danteElMasCapito@gmail.com',
    }

    const response = userPUT(objectPayload_dante);
  }


  return (
  <>
    <input ref={inputRef} type="text"/>

    <button onClick={handleButton}>Enviar</button>
    <button onClick={handlerUpdate}>Actualizar</button>

  </>
  )
}
