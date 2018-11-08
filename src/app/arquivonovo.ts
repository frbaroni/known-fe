function greeting(target, key, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function() {
        return `Hello, ${originalMethod.apply(this, arguments)}`;
    }
    return descriptor;
};
/* ------ */
class Bacon {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    @greeting
    WHAZUP() {
        return `My name is ${this.name}, and I ♥ BACOOOOOOOOOOOOOOOOON!`;
    }
}

const yo = new Bacon('Tosta');
console.log(yo.WHAZUP()); 