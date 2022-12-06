import * as yup from 'yup';
export const loginValidationSchema = yup.object().shape({
    email: yup
    .string()
    .email("Escriba un mail valido")
    .required("El mail es obligatorio"),
    password: yup
    .string()
    .trim("Sin espacios en blanco al principio ni al final")
    .min(6,({min}) =>`Debe tener un minimo de ${min} caracteres`)
    .required("La contraseña es obligatoria")
})