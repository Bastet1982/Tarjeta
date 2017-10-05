#### Tarjeta de crédito y comprobar validez

__INICIO__

+ Crear un nuevo archivo html y otro de javascript.

+ Vincular ambos archivos por medio de script scr, en el index.

 __CODIGO__

 __Algoritmo de Luhn__

 PARTE1

 - En mi archivo js generar un prompt() que dirá "Ingrese su tarjeta de crédito".

```javascript
    var question = prompt("Ingrese su numero de tarjeta");
```

 - Luego, generar una var llamada number vacía que me permita poner diferentes números dentro.

```javascript
   var number = [];
```

 - Crear function(isValidCard), que me permita lanzar de vuelta un array con los dígitos a la inversa.

 - Siguiente se crea la variable newArray[], para que permita poner diferentes números y siguiente la variable size, que me permitirá ver el tamaño del 
   array en esta posición. Para terminar con la var= lastPosition -1, que me mostrará el tamaño del array -1 valor.

```javascript

   var reverse = function (isValidCard){ 

   var newArray = [];    

     var size = isValidCard.length;   

      var lastPosition = size -1; 

  }    
```

 - Crear un for(var i=lastPosition; i>0; i--); que me permitirá que los numeros vayan pasando de la última posición a 0. Utilizar push, para agregar los 
   nuevos elementos a la función, y por ultimo usar return para retornar el nuevo array invertido.

```javascript

for( var i=lastPosition; i>=0; i--){      

	newArray.push(isValidCard[i]);        


    }

return newArray;          

```

PARTE 2

 - Seleccionar var pairNumbers= (n%2=0) de acuerdo a su posición dentro del Index, y luego x*2, si x>=10, sumar a+b(1+0), si no, mantener el valor de x.

 - totalSum= var (pairNumbers + unpairNumbers), nºs pares e impares me dan el total y para finalizar la parte matemática totalSum %10 =0,

```javascript
if(totalSum%10 =0){
	return Valid
}else{
    return Error
}
```











