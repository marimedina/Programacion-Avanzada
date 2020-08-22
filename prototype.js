//VER PORQUE NO ANDA



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

const heroMethod = {
    saludar: function(){
        console.log(`Me llamo ${this.name}`);
    }
}


/*
function hero(name) {
   const hero = {
        name: name
    }
    
   /* hero.saludar = function() {
        console.log(`Hola soy ${this.name}`);
    };
    return hero*/
    
    //otra opcion de la funcion anterior
   // hero.saludar = heroMethod.saludar
    //return hero
//}


function hero(name) {
    
    const hero = Object.create(heroMethod);
    hero.name = name;

    return hero
}

hero.prototype.saludar = function () {
    console.log(`Soy superhero ${this.name}`);
}


/*const zelda = hero("zelda")
zelda.saludar();

const link = hero("link")
link.saludar();*/
