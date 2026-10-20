export default class User{
    constructor(email, name){
        this._id=email;
        this._name = name;
    }

    greeting(){
        return `Hi, my name is ${this._name} and ${this._id} is my address`;
    }

}

