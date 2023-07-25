var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { con } from '../db/connect.js';
import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsNumber } from 'class-validator';
export class storageLibros {
    constructor(id_libro, id_autor, id_categoria, id_editorial, titulo, anio_publicacion, isbn, num_paginas, id_estado) {
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
    get guardar() {
        con.query(/*sql*/ `SELECT * FROM libro`, (err, data, fields) => {
            console.log(data);
        });
        return "";
    }
}
__decorate([
    Expose({ name: 'id' }),
    IsNumber({}, { message: () => { throw { status: 406, message: "El formato del parametro id no es correcto" }; } }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro id es obligatorio" }; } }),
    __metadata("design:type", Number)
], storageLibros.prototype, "id_libro", void 0);
__decorate([
    Expose({ name: 'id-autor' }),
    IsNumber({}, { message: () => { throw { status: 406, message: "El formato del parametro id-autor no es correcto" }; } }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro id-autor es obligatorio" }; } }),
    __metadata("design:type", Number)
], storageLibros.prototype, "id_autor", void 0);
__decorate([
    Expose({ name: 'id-categoria' }),
    IsNumber({}, { message: () => { throw { status: 406, message: "El formato del parametro id-categoria no es correcto" }; } }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro id-categoria es obligatorio" }; } }),
    __metadata("design:type", Number)
], storageLibros.prototype, "id_categoria", void 0);
__decorate([
    Expose({ name: 'id-editorial' }),
    IsNumber({}, { message: () => { throw { status: 406, message: "El formato del parametro id-editorial no es correcto" }; } }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro id-editorial es obligatorio" }; } }),
    __metadata("design:type", Number)
], storageLibros.prototype, "id_editorial", void 0);
__decorate([
    Expose({ name: 'titulo-libro' }),
    Transform(({ value }) => { if (/^[a-z A-Z]+$/.test(value))
        return (value) ? value : "Libro";
    else
        throw { status: 406, message: "El formato del parametro titulo-libro no es correcto" }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], storageLibros.prototype, "titulo", void 0);
__decorate([
    Expose({ name: 'año-de-publicacion' }),
    Transform(({ value }) => { if (/^[0-9]|undefined+$/.test(value))
        return (value) ? value : 2023;
    else
        throw { status: 406, message: "El formato del parametro año-de-publicacion no es correcto" }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], storageLibros.prototype, "anio_publicacion", void 0);
__decorate([
    Expose({ name: 'codigo-biblioteca-isbn' }),
    Transform(({ value }) => { if (/^[0-9\\-]|undefined+$/.test(value))
        return value;
    else
        throw { status: 400, message: "El parametro codigo-biblioteca-isbn es obligatorio y no cumple con el formato solicitado" }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], storageLibros.prototype, "isbn", void 0);
__decorate([
    Expose({ name: 'numero-paginas' }),
    Transform(({ value }) => { if (/^[0-9]|undefined+$/.test(value))
        return (value) ? value : 0;
    else
        throw { status: 406, message: "El formato del parametro numero-paginas no es correcto" }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], storageLibros.prototype, "num_paginas", void 0);
__decorate([
    Expose({ name: 'id-estado-libro' }),
    IsNumber({}, { message: () => { throw { status: 406, message: "El formato del parametro id-estado-libro no es correcto" }; } }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro id-estado-libro es obligatorio" }; } }),
    __metadata("design:type", Number)
], storageLibros.prototype, "id_estado", void 0);
