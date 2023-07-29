var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose } from 'class-transformer';
import { IsDefined, MaxLength, IsNumber, IsString } from 'class-validator';
export class Insidencia {
    constructor(descripcion, id_categoria, id_tipo_insidencia, id_area, cedula_trainer) {
        this.descripcion = descripcion;
        this.id_categoria = id_categoria;
        this.id_tipo_insidencia = id_tipo_insidencia;
        this.id_area = id_area;
        this.cedula_trainer = cedula_trainer;
    }
}
__decorate([
    Expose({ name: "descInsidencia" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro descInsidencia es obligatorio" }; } }),
    IsString({ message: () => { throw { status: 406, message: "El parametro descInsidencia debe ser una cadena de texto" }; } }),
    MaxLength(300, { message: () => { throw { status: 406, message: "El parametro descInsidencia debe contener maximo 100 caracteres" }; } }),
    __metadata("design:type", String)
], Insidencia.prototype, "descripcion", void 0);
__decorate([
    Expose({ name: "idCategoria" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro idCategoria es obligatorio" }; } }),
    IsNumber({}, { message: () => { throw { status: 406, message: "El parametro idCategoria debe ser numerico" }; } }),
    __metadata("design:type", Number)
], Insidencia.prototype, "id_categoria", void 0);
__decorate([
    Expose({ name: "idTipoInsidencia" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro idTipoInsidencia es obligatorio" }; } }),
    IsNumber({}, { message: () => { throw { status: 406, message: "El parametro idTipoInsidencia debe ser numerico" }; } }),
    __metadata("design:type", Number)
], Insidencia.prototype, "id_tipo_insidencia", void 0);
__decorate([
    Expose({ name: "idArea" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro idArea es obligatorio" }; } }),
    IsNumber({}, { message: () => { throw { status: 406, message: "El parametro idArea debe ser numerico" }; } }),
    __metadata("design:type", Number)
], Insidencia.prototype, "id_area", void 0);
__decorate([
    Expose({ name: "cedulaTrainer" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro cedulaTrainer es obligatorio" }; } }),
    IsNumber({}, { message: () => { throw { status: 406, message: "El parametro cedulaTrainer debe ser numerico" }; } }),
    __metadata("design:type", Number)
], Insidencia.prototype, "cedula_trainer", void 0);
