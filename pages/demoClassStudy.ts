class User{
    name:string

    constructor(name:string){
        this.name = name;
    }

    login(){
                console.log("user created - username :"+this.name);

    }
}

const user1 = new User("arjun");

user1.login()