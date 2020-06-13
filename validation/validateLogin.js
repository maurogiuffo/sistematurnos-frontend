export default function validateLogin(values) {
    let errors = {};

     if(!values.email) {
         errors.email = "El email es obligatorio"
     }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
         errors.email = "Email no válido"
     }

     if(!values.password) {
         errors.password = "Contraseña obligatoria"
     }else if( values.password.length < 6) {
         errors.password = "La contraseña debe poseer al menos 6 caracteres"
     }

     return errors;
}