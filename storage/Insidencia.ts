import { Expose } from 'class-transformer';
import { IsDefined, MaxLength, IsNumber, IsString, Matches, IsEmail } from 'class-validator';
export class Insidencia {

    @Expose({name: "descInsidencia"})
    @IsDefined({ message: () => { throw { status: 422, message: "El parametro descInsidencia es obligatorio" } } })
    @IsString({ message: () => { throw { status: 406, message: "El parametro descInsidencia debe ser una cadena de texto" } } })
    @MaxLength(300, { message: () => { throw { status: 406, message: "El parametro descInsidencia debe contener maximo 100 caracteres"}}})
    descripcion: string
    @Expose({name: "idCategoria"})
    @IsDefined({ message: () => { throw { status: 422, message: "El parametro idCategoria es obligatorio" } } })
    @IsNumber({}, { message: () => { throw { status: 406, message: "El parametro idCategoria debe ser numerico" } } })
    id_categoria: number
    @Expose({name: "idTipoInsidencia"})
    @IsDefined({ message: () => { throw { status: 422, message: "El parametro idTipoInsidencia es obligatorio" } } })
    @IsNumber({}, { message: () => { throw { status: 406, message: "El parametro idTipoInsidencia debe ser numerico" } } })
    id_tipo_insidencia: number
    @Expose({name: "idArea"})
    @IsDefined({ message: () => { throw { status: 422, message: "El parametro idArea es obligatorio" } } })
    @IsNumber({}, { message: () => { throw { status: 406, message: "El parametro idArea debe ser numerico" } } })
    id_area: number
    @Expose({name: "cedulaTrainer"})
    @IsDefined({ message: () => { throw { status: 422, message: "El parametro cedulaTrainer es obligatorio" } } })
    @IsNumber({}, { message: () => { throw { status: 406, message: "El parametro cedulaTrainer debe ser numerico" } } })
    cedula_trainer: number

    constructor(
        descripcion: string,
        id_categoria: number,
        id_tipo_insidencia: number,
        id_area: number,
        cedula_trainer: number
    ){
        this.descripcion = descripcion;
        this.id_categoria = id_categoria;
        this.id_tipo_insidencia = id_tipo_insidencia;
        this.id_area = id_area;
        this.cedula_trainer = cedula_trainer;
    }
}