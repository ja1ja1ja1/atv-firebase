import { createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const usuarioCriadoListener = (userCredential) =>{
    document.write("Bem-Vindo novo usuario " + userCredential.user.email)
}
const usuarioLogadoListener = (userCredential) =>{
    document.write("Bem-Vindo " + userCredential.user.email)
}
const usuarioExiste = ()=>{
    alert("Usuario já existe!!!")
}

globalThis.registrarUsuario = (email,senha) =>{
    let txtemail = document.querySelector("#user_email").value
    let txtsenha = document.querySelector("#user_password").value
    createUserWithEmailAndPassword(window.auth, txtemail, txtsenha)
      .then(usuarioCriadoListener)
      .catch((error) => {
        if(error.code === "auth/email-already-in-use"){
            usuarioExiste()
        }else{
            console.log(error.code);
            console.log(error.message);
        }
        
      });

}
globalThis.login = (email,senha) =>{
    let txtemail = document.querySelector("#user_email").value
    let txtsenha = document.querySelector("#user_password").value
    signInWithEmailAndPassword (window.auth, txtemail, txtsenha)
      .then(usuarioLogadoListener)
      .catch((error) => {
        if(error.code === "auth/email-already-in-use"){
            usuarioExiste()
        }else{
            console.log(error.code);
            console.log(error.message);
        }
        
    });

}