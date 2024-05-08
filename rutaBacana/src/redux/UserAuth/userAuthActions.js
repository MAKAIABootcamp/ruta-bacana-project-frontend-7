import { auth, dataBase } from "../../firebase/firebaseconfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore"; 

export const registerUser = (user)=> {
    return async ()=> {
        console.log("usuarios en action", user)
        await createUserWithEmailAndPassword(auth, user.correo, user.contraseña)
        const docRef = await addDoc(collection(dataBase, "usuarios"), user);
        console.log("Document written with ID: ", docRef.id);
    }
}