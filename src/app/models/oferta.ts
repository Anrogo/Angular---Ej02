export class Oferta{

    private _id!: number;

    private _titulo!: string;

    private _descripcion!: string;

    private _empresa!: string;

    private _salario!: number;

    private _ciudad!: string;

    private _email!: string;

    private _numSolicitudes!: number;

    constructor(){

    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get titulo(): string {
        return this._titulo;
    }
    public set titulo(value: string) {
        this._titulo = value;
    }

    public get descripcion(): string {
        return this._descripcion;
    }
    public set descripcion(value: string) {
        this._descripcion = value;
    }

    public get empresa(): string {
        return this._empresa;
    }
    public set empresa(value: string) {
        this._empresa = value;
    }

    public get salario(): number {
        return this._salario;
    }
    public set salario(value: number) {
        this._salario = value;
    }

    public get ciudad(): string {
        return this._ciudad;
    }
    public set ciudad(value: string) {
        this._ciudad = value;
    }

    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }

    public get numSolicitudes(): number {
        return this._numSolicitudes;
    }
    public set numSolicitudes(value: number) {
        this._numSolicitudes = value
    }

}