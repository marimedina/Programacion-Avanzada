
//Objeto comun y corriente


/*const zelda = {
    name: 'Zelda'
};

zelda.saludar = function() {
    console.log(`Hola soy ${this.name}`);
}

zelda.saludar();

const link = {
    name: 'Link'
};

link.saludar = function(){
    console.log(`Hola soy ${this.name}`);
};

link.saludar();*/




//Seamos mas eficientes


/*function hero(name) {
   const hero = {
        name: name
    }
    
    hero.saludar = function() {
        console.log(`Hola soy ${this.name}`);
    };

    return hero
};

const zelda = hero("zelda")
zelda.saludar();

const link = hero("link")
link.saludar();*/




//Queda un poco mas eficiente que antes pero  hay una infeciencia 
//dado que estamos definiendo la funcion cada vez que llamamos a Hero. 

//Podemos sobreescribir un método de la sig manera

const heroMethod = {
    saludar: function(){
        console.log(`Me llamo ${this.name}`);
    }
};

/*function hero(name) {
    const hero = {
         name: name
     }

    hero.saludar = heroMethod.saludar
    return hero
 };

const zelda = hero("zelda")
zelda.saludar();

const link = hero("link")
link.saludar();*/




//el object create recibe un obj, y es lo que va crear un objeto y este nuevo obj va crear 
//ciertas propiedades que tiene definido. 

/*function hero(name) {
    
    const hero = Object.create(heroMethod);
    hero.name = name;
    return hero
}

const zelda = hero("zelda")
zelda.saludar();

const link = hero("link")
link.saludar();*/



//Vemos que pasa si quiero pasarle a hero el prototipo

function Hero(name) {
    const hero = Object.create(Hero.prototype);
    hero.name = name;
    return hero
}

Hero.prototype.saludar = function () {
    console.log(`Soy superhero ${this.name}`);
}

const zelda = Hero("zelda")
zelda.saludar();

const link = Hero("link")
link.saludar();



