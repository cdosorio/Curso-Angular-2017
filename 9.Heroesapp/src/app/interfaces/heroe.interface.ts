export interface Heroe{
    nombre:string;
    bio:string;
    casa:string;
    key$?:string //llave que generará el Firebase. El ? es para dejarlo opcional
}