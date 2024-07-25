// Cuál es la necesidad del this?
// This nos permite usar el mismo método para cada objeto que uno crea
// sin tener que estar escribiendo explícitamente a qué propiedad del objeto
// hace referencia.
// Es esencial cuando estamos trabajando con constructores
// Si creamos varios objetos usando un constructor desde una clase que usa this
//
const person12 = {
    name: "Chris", 
    introduceSelf(){
        console.log(`Hi! I'm ${this.name}`);
    }
}
// Es como si tuviéramos esto por cada persona que creamos:
const person1 = {
    name: "Chris", 
    introduceSelf(){
        console.log(`Hi! I'm ${person1.name}`);
    }
}
// Por qué tener un constructor de objetos?
// Revisemos antes cómo se crea un objeto sin usar un constructor
function createPerson(name){
    const obj = {}; 
    obj.name = name;
    obj.introduceSelf = function(){
        console.log(`Hi! I'm ${this.name}.`);
    }
    return obj;
}
const salva = createPerson("Salva"); 
salva.introduceSelf();
// Como vemos, la función que construye tiene que hacer muchas cosas a la vez.
// Hagamos un repaso de lo que hace la función:
// Tiene que crear un objeto vacío, inicializarlo y retornarlo
// Es aquí donde nos viene útil y de donde nace la necesidad de pensar
// en un constructor.
// Un constructor es solo una función que es llamada usando el keyword new (por fuera de clases)
// Cuando llamamos un constructor, el mismo se encargará de las tareas anteriores
// que son: crear un nuevo objeto, añadirle el this al objeto, correr el código del constructor
// y retornar el nuevo objeto
// Por convención, el nombre de la función debe tener su primera letra en mayúscula
// Así que la función anterior haciendo uso del this y del constructor, quedaría de la siguiente manera:

function Person(name){
    this.name = name; 
    this.introducesSelf = function (){
        console.log(`Hi! I'm ${this.name}. asd`);
    }
}
const salva2 = new Person("Salva");
salva2.introducesSelf();
