class User {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
    introduce() {
        console.log(`Olá, meu nome é ${this.name}, tenho ${this.age} anos, e ${this.height}m`);
    }
}

const roberto = new User("Roberto", 19, 1.70);
const juselino = new User("Juselino", 60, 0.70);

roberto.introduce();
juselino.introduce();