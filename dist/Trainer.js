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
import { IsDefined, MaxLength, IsNumber, IsString, Matches, IsEmail } from 'class-validator';
export class Trainer {
    constructor(cedula = 1000000000, nombre = "nombre trainer", email_personal = "trainer@gmail.com", email_corp, telef_residencia = "3232323223", telef_empresa, telef_movil_empre = "3232323223") {
        this.cedula = cedula;
        this.nombre = nombre;
        this.email_personal = email_personal;
        this.email_corp = email_corp;
        this.telef_residencia = telef_residencia;
        this.telef_empresa = telef_empresa;
        this.telef_movil_empre = telef_movil_empre;
    }
}
__decorate([
    Expose({ name: "cc" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro cc es obligatorio" }; } }),
    IsNumber({}, { message: () => { throw { status: 406, message: "El parametro cc debe ser numerico" }; } }),
    __metadata("design:type", Number)
], Trainer.prototype, "cedula", void 0);
__decorate([
    Expose({ name: "name" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro name es obligatorio" }; } }),
    IsString({ message: () => { throw { status: 406, message: "El parametro name debe ser una cadena de texto" }; } }),
    MaxLength(100, { message: () => { throw { status: 406, message: "El parametro name debe contener maximo 100 caracteres" }; } }),
    __metadata("design:type", String)
], Trainer.prototype, "nombre", void 0);
__decorate([
    Expose({ name: "emailPersonal" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro emailPersonal es obligatorio" }; } }),
    IsString({ message: () => { throw { status: 406, message: "El parametro emailPersonal debe ser una cadena de texto" }; } }),
    MaxLength(60, { message: () => { throw { status: 406, message: "El parametro emailPersonal debe contener maximo 60 caracteres" }; } }),
    IsEmail({}, { message: () => { throw { status: 406, message: "El parametro emailPersonal debe ser una direccion de correo electronico valido" }; } }),
    __metadata("design:type", String)
], Trainer.prototype, "email_personal", void 0);
__decorate([
    Expose({ name: "emailCorporativo" }),
    IsString({ message: () => { throw { status: 406, message: "El parametro emailCorporativo debe ser una cadena de texto" }; } }),
    MaxLength(60, { message: () => { throw { status: 406, message: "El parametro emailCorporativo debe contener maximo 60 caracteres" }; } }),
    IsEmail({}, { message: () => { throw { status: 406, message: "El parametro emailCorporativo debe ser una direccion de correo electronico valido" }; } }),
    __metadata("design:type", String)
], Trainer.prototype, "email_corp", void 0);
__decorate([
    Expose({ name: "telefonoResidencia" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro telefonoResidencia es obligatorio" }; } }),
    IsString({ message: () => { throw { status: 406, message: "El parametro telefonoResidencia debe ser una cadena de texto" }; } }),
    Matches(/^[0-9]+$/, { message: () => { throw { status: 406, message: "El parametro telefonoResidencia solo puede contener números" }; } }),
    MaxLength(20, { message: () => { throw { status: 406, message: "El parametro telefonoResidencia debe contener maximo 20 caracteres" }; } }),
    __metadata("design:type", String)
], Trainer.prototype, "telef_residencia", void 0);
__decorate([
    Expose({ name: "telefonoEmpresa" }),
    IsString({ message: () => { throw { status: 406, message: "El parametro telefonoEmpresa debe ser una cadena de texto" }; } }),
    Matches(/^[0-9]+$/, { message: () => { throw { status: 406, message: "El parametro telefonoEmpresa solo puede contener números" }; } }),
    MaxLength(20, { message: () => { throw { status: 406, message: "El parametro telefonoEmpresa debe contener maximo 20 caracteres" }; } }),
    __metadata("design:type", String)
], Trainer.prototype, "telef_empresa", void 0);
__decorate([
    Expose({ name: "telefonoMovilEmpresa" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro telefonoMovilEmpresa es obligatorio" }; } }),
    IsString({ message: () => { throw { status: 406, message: "El parametro telefonoMovilEmpresa debe ser una cadena de texto" }; } }),
    Matches(/^[0-9]+$/, { message: () => { throw { status: 406, message: "El parametro telefonoMovilEmpresa solo puede contener números" }; } }),
    MaxLength(20, { message: () => { throw { status: 406, message: "El parametro telefonoMovilEmpresa debe contener maximo 20 caracteres" }; } }),
    __metadata("design:type", String)
], Trainer.prototype, "telef_movil_empre", void 0);
