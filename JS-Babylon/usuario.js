export class Usuario {

    #id;
    #nombreCompleto;
    #nombreDeUsuario;
    #email;
    #contraseña;
    #babylonCoins;
    #cursos;


    constructor(nombreCompleto,nombreDeUsuario,email,contraseña){
        this.id=+1;
        this.nombreCompleto=nombreCompleto;
        this.nombreDeUsuario=nombreDeUsuario;
        this.email=email;
        this.contraseña=contraseña;
        this.babylonCoins=300;
        this.cursos=[];
    }






}