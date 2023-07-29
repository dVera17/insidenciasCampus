import { Expose } from 'class-transformer';
import { IsDefined, MaxLength, IsNumber, IsString } from 'class-validator';
export class Dispositivo{

    @Expose({name: "serial"})
    @IsDefined({ message: () => { throw { status: 422, message: "El parametro serial es obligatorio" } } })
    @IsNumber({}, { message: () => { throw { status: 406, message: "El parametro serial debe ser numerico" } } })
    id: number
    @Expose({name: "marcaDisp"})
    @IsDefined({ message: () => { throw { status: 422, message: "El parametro marcaDisp es obligatorio" } } })
    @IsString({ message: () => { throw { status: 406, message: "El parametro marcaDisp debe ser una cadena de texto" } } })
    @MaxLength(50, { message: () => { throw { status: 406, message: "El parametro marcaDisp debe contener maximo 50 caracteres"}}})
    marca: string
    @Expose({name: "modeloDisp"})
    @IsDefined({ message: () => { throw { status: 422, message: "El parametro modeloDisp es obligatorio" } } })
    @IsString({ message: () => { throw { status: 406, message: "El parametro modeloDisp debe ser una cadena de texto" } } })
    @MaxLength(50, { message: () => { throw { status: 406, message: "El parametro modeloDisp debe contener maximo 50 caracteres"}}})
    modelo: string
    @Expose({name: "idTipoDisp"})
    @IsDefined({ message: () => { throw { status: 422, message: "El parametro idTipoDisp es obligatorio" } } })
    @IsNumber({}, { message: () => { throw { status: 406, message: "El parametro idTipoDisp debe ser numerico" } } })
    id_tipo_dispositivo: number
    @Expose({name: "idArea"})
    @IsDefined({ message: () => { throw { status: 422, message: "El parametro idArea es obligatorio" } } })
    @IsNumber({}, { message: () => { throw { status: 406, message: "El parametro idArea debe ser numerico" } } })
    id_area: number

    constructor(
        id: number = 1,
        marca: string = "marca",
        modelo: string = "modelo",
        id_tipo_dispositivo: number = 1,
        id_area: number = 1
    ){
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.id_tipo_dispositivo = id_tipo_dispositivo;
        this.id_area = id_area;
    }
}