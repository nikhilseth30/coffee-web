import { Computer } from '.computer.js'

class Dell extends Computer {
    constructor(name, company){
        super(Name)
        this.company = company
    }
    logIn() {
        console.log("You are logged into a Dell" + this.name)
    
    }
}

const dell_inspiron = new Dell('inspiron', 'inspiron 15');
dell_inspiron.logIn()
dell_inspiron.run
