
/*Os paths utilizados pela aplicação estão centralizados nesse arquivo.
 Para alterar o caminho padrão basta alterar o valor recebido por 'path.base'. */

path = {

    base:'',

    aws : {
        base : 'http://52.14.130.196/apirestex'
    },

    tomcat :{
        base : 'http://localhost:8282/sniet_api'
    },

    xampp : {
        base : 'http://localhost/',
        base_81 : 'http://localhost:81/sniet_api'
    },

    absolut : {
        base : 'sniet_api/'
    }
}

//Altera o path padrão da aplicação.
path.base = path.tomcat.base;