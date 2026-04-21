import axios from "axios";

const URL = '/api/usuarios/'

export const userPOST = async (payload) => {

  const url = `${URL}usuario_crear`;

  const response = await axios.post(url,payload);

  console.log(response);

  return response

}

export const userPUT = async (payload) => {

  const url = `${URL}usuario_actualizar`;

  const response = await axios.put(url,payload);

  console.log(response);

  return response
}
