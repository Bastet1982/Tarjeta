
var question = prompt("Ingrese su numero de tarjeta") //Pregunta por la tarjeta

     var number =[];

      var reverse = function (isValidCard){  //Creación de la función , que me permitirá lanzar un array con los nºs a la inversa

        var newArray = [];    //Se crea el array vacio, para permitir que entren distintos elementos

          var size = isValidCard.length;   //Tamaño del array que entre en esta posicion

      var lastPosition = size -1;          //Tamaño del array -1


for( var i=lastPosition; i>=0; i--){      //Para que vaya de la ultima posicion a la posicion 0 de 1 en 1

	newArray.push(isValidCard[i]);        //Agrega elementos a la función


    }

return newArray;          //Debiese retornar el nuevo array invertido
}
console.log(reverse(question))