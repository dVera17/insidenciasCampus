import { Expose } from 'class-transformer';
import { IsDefined, MaxLength, IsNumber, IsString, Matches, IsEmail } from 'class-validator';
export class Trainer {

    @Expose({ name: "cc" })
    @IsDefined({ message: () => { throw { status: 422, message: "El parametro cc es obligatorio" } } })
    @IsNumber({}, { message: () => { throw { status: 406, message: "El parametro cc debe ser numerico" } } })
    cedula: number
    @Expose({ name: "name" })
    @IsDefined({ message: () => { throw { status: 422, message: "El parametro name es obligatorio" } } })
    @IsString({ message: () => { throw { status: 406, message: "El parametro name debe ser una cadena de texto" } } })
    @MaxLength(100, { message: () => { throw { status: 406, message: "El parametro name debe contener maximo 100 caracteres"}}})
    nombre: string
    @Expose({ name: "emailPersonal" })
    @IsDefined({ message: () => { throw { status: 422, message: "El parametro emailPersonal es obligatorio" } } })
    @IsString({ message: () => { throw { status: 406, message: "El parametro emailPersonal debe ser una cadena de texto" } } })
    @MaxLength(60, { message: () => { throw { status: 406, message: "El parametro emailPersonal debe contener maximo 60 caracteres"}}})
    @IsEmail({}, {message: () => { throw { status: 406, message: "El parametro emailPersonal debe ser una direccion de correo electronico valido"}}})
    email_personal: string
    @Expose({ name: "emailCorporativo" })
    @IsString({ message: () => { throw { status: 406, message: "El parametro emailCorporativo debe ser una cadena de texto" } } })
    @MaxLength(60, { message: () => { throw { status: 406, message: "El parametro emailCorporativo debe contener maximo 60 caracteres"}}})
    @IsEmail({}, {message: () => { throw { status: 406, message: "El parametro emailCorporativo debe ser una direccion de correo electronico valido"}}})
    email_corp: string
    @Expose({ name: "telefonoResidencia" })
    @IsDefined({ message: () => { throw { status: 422, message: "El parametro telefonoResidencia es obligatorio" } } })
    @IsString({ message: () => { throw { status: 406, message: "El parametro telefonoResidencia debe ser una cadena de texto" } } })
    @Matches(/^[0-9]+$/, { message: () => { throw { status: 406, message: "El parametro telefonoResidencia solo puede contener números" } } })
    @MaxLength(20, { message: () => { throw { status: 406, message: "El parametro telefonoResidencia debe contener maximo 20 caracteres"}}})
    telef_residencia: string
    @Expose({ name: "telefonoEmpresa" })
    @IsString({ message: () => { throw { status: 406, message: "El parametro telefonoEmpresa debe ser una cadena de texto" } } })
    @Matches(/^[0-9]+$/, { message: () => { throw { status: 406, message: "El parametro telefonoEmpresa solo puede contener números" } } })
    @MaxLength(20, { message: () => { throw { status: 406, message: "El parametro telefonoEmpresa debe contener maximo 20 caracteres"}}})
    telef_empresa: string
    @Expose({ name: "telefonoMovilEmpresa" })
    @IsDefined({ message: () => { throw { status: 422, message: "El parametro telefonoMovilEmpresa es obligatorio" } } })
    @IsString({ message: () => { throw { status: 406, message: "El parametro telefonoMovilEmpresa debe ser una cadena de texto" } } })
    @Matches(/^[0-9]+$/, { message: () => { throw { status: 406, message: "El parametro telefonoMovilEmpresa solo puede contener números" } } })
    @MaxLength(20, { message: () => { throw { status: 406, message: "El parametro telefonoMovilEmpresa debe contener maximo 20 caracteres"}}})
    telef_movil_empre: string

    constructor(
        cedula: number = 1000000000, 
        nombre: string = "nombre trainer", 
        email_personal: string = "trainer@gmail.com", 
        email_corp: string, 
        telef_residencia: string = "3232323223", 
        telef_empresa: string, 
        telef_movil_empre: string = "3232323223") {
        this.cedula = cedula;
        this.nombre = nombre;
        this.email_personal = email_personal;
        this.email_corp = email_corp;
        this.telef_residencia = telef_residencia;
        this.telef_empresa = telef_empresa;
        this.telef_movil_empre = telef_movil_empre;
    }
}