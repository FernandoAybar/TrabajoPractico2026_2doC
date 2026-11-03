export class Usuario {

    #id;
    #nombreCompleto;
    #nombreDeUsuario;
    #email;
    #contraseña;
    #babylonCoins;
    #cursos;


    constructor(id,nombreCompleto,nombreDeUsuario,email,contraseña){
        this.#id=id;
        this.#nombreCompleto=nombreCompleto;
        this.#nombreDeUsuario=nombreDeUsuario;
        this.#email=email;
        this.#contraseña=contraseña;
        this.#babylonCoins=300;
        this.#cursos=[];
    }






}