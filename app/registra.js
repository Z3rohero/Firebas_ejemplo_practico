
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"

import { auth } from './firebase.js'

const ingresa = document.querySelector("#ingresaForm");
ingresa.addEventListener('submit', async (e) => {
  e.preventDefault
  const email = ingresa['email-ingresa'].value
  const contraseña = ingresa['contraseña-ingresa'].value
  try {
    const crende = await createUserWithEmailAndPassword(auth, email, password)
    console.log(crede);
    //ciera el registro el modal
    const registrar = document.querySelector('#registrar');
    const modal = boostrap.Modal.getInstance(registrar);
    modal.hide()

  } catch (error) {
    console.log(error.message)
    
  }


})