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
export class Dispositivo {
    constructor(id = 1, marca = "marca", modelo = "modelo", id_tipo_dispositivo = 1, id_area = 1) {
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.id_tipo_dispositivo = id_tipo_dispositivo;
        this.id_area = id_area;
    }
}
__decorate([
    Expose({ name: "serial" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro serial es obligatorio" }; } }),
    IsNumber({}, { message: () => { throw { status: 406, message: "El parametro serial debe ser numerico" }; } }),
    __metadata("design:type", Number)
], Dispositivo.prototype, "id", void 0);
__decorate([
    Expose({ name: "marcaDisp" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro marcaDisp es obligatorio" }; } }),
    IsString({ message: () => { throw { status: 406, message: "El parametro marcaDisp debe ser una cadena de texto" }; } }),
    MaxLength(50, { message: () => { throw { status: 406, message: "El parametro marcaDisp debe contener maximo 50 caracteres" }; } }),
    __metadata("design:type", String)
], Dispositivo.prototype, "marca", void 0);
__decorate([
    Expose({ name: "modeloDisp" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro modeloDisp es obligatorio" }; } }),
    IsString({ message: () => { throw { status: 406, message: "El parametro modeloDisp debe ser una cadena de texto" }; } }),
    MaxLength(50, { message: () => { throw { status: 406, message: "El parametro modeloDisp debe contener maximo 50 caracteres" }; } }),
    __metadata("design:type", String)
], Dispositivo.prototype, "modelo", void 0);
__decorate([
    Expose({ name: "idTipoDisp" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro idTipoDisp es obligatorio" }; } }),
    IsNumber({}, { message: () => { throw { status: 406, message: "El parametro idTipoDisp debe ser numerico" }; } }),
    __metadata("design:type", Number)
], Dispositivo.prototype, "id_tipo_dispositivo", void 0);
__decorate([
    Expose({ name: "idArea" }),
    IsDefined({ message: () => { throw { status: 422, message: "El parametro idArea es obligatorio" }; } }),
    IsNumber({}, { message: () => { throw { status: 406, message: "El parametro idArea debe ser numerico" }; } }),
    __metadata("design:type", Number)
], Dispositivo.prototype, "id_area", void 0);
