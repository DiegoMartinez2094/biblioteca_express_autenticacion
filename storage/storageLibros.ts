import {con} from '../db/connect.js';
import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsNumber } from 'class-validator';

export class storageLibros{
    @Expose({ name: 'id' })
    @IsNumber({}, {message: ()=>{throw {status: 406, message:"El formato del parametro id no es correcto"}}})
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro id es obligatorio"}}})
    id_libro: number;

    @Expose({ name: 'id-autor' })
    @IsNumber({}, {message: ()=>{throw {status:406, message:"El formato del parametro id-autor no es correcto"}}})
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro id-autor es obligatorio"}}})
    id_autor: number; 

    @Expose({ name: 'id-categoria' })
    @IsNumber({}, {message: ()=>{throw {status:406, message:"El formato del parametro id-categoria no es correcto"}}})
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro id-categoria es obligatorio"}}})
    id_categoria: number;

    @Expose({ name: 'id-editorial' })
    @IsNumber({}, {message: ()=>{throw {status:406, message:"El formato del parametro id-editorial no es correcto"}}})
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro id-editorial es obligatorio"}}})
    id_editorial: number;

    @Expose({ name: 'titulo-libro' })
    @Transform(({ value }) => { if(/^[a-z A-Z]+$/.test(value)) return (value) ? value : "Libro" ; else throw {status: 406, message: "El formato del parametro titulo-libro no es correcto"};}, { toClassOnly: true })
    titulo: string;

    @Expose({ name: 'año-de-publicacion' })
    @Transform(({ value }) => { if(/^[0-9]|undefined+$/.test(value)) return (value) ? value : 2023 ; else throw {status: 406, message: "El formato del parametro año-de-publicacion no es correcto"};}, { toClassOnly: true })
    anio_publicacion: number;

    @Expose({ name: 'codigo-biblioteca-isbn' })
    @Transform(({ value }) => { if(/^[0-9\\-]|undefined+$/.test(value)) return value ; else throw {status: 400, message: "El parametro codigo-biblioteca-isbn es obligatorio y no cumple con el formato solicitado"};}, { toClassOnly: true })
    isbn: string;

    @Expose({ name: 'numero-paginas' })
    @Transform(({ value }) => { if(/^[0-9]|undefined+$/.test(value)) return (value) ? value : 0 ; else throw {status: 406, message: "El formato del parametro numero-paginas no es correcto"};}, { toClassOnly: true })
    num_paginas: number;

    @Expose({ name: 'id-estado-libro' })
    @IsNumber({}, {message: ()=>{throw {status:406, message:"El formato del parametro id-estado-libro no es correcto"}}})
    @IsDefined({message: ()=>{ throw {status:422, message: "El parametro id-estado-libro es obligatorio"}}})
    id_estado: number;
    
    constructor(
      id_libro: number,
      id_autor: number,
      id_categoria: number,
      id_editorial: number,
      titulo: string,
      anio_publicacion: number,
      isbn: string,
      num_paginas: number,
      id_estado: number) {
        this.id_libro = id_libro;
        this.id_autor = id_autor;
        this.id_categoria = id_categoria;
        this.id_editorial = id_editorial;
        this.titulo = titulo;
        this.anio_publicacion = anio_publicacion;
        this.isbn = isbn;
        this.num_paginas = num_paginas;
        this.id_estado = id_estado;
    }
    get guardar(){
      con.query(/*sql*/`SELECT * FROM libro`, 
      (err, data, fields)=>{
       console.log(data)
      });
      return "";
    }
}