console.log("OOPS IN JS");


class User {
    constructor(name, age,email) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.luCoins = 0;
      this.courses = [];
    }



    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
    addCoins(){
        this.luCoins++;
        console.log(`${this.name} has ${this.luCoins} coins`);
        return this;
    }
    removeCoins(){
        this.luCoins--;
        console.log(`${this.name} has ${this.luCoins} coins`);
        return this;
    }

    getDetails(){
        console.log(`Name is ${this.name}, email is ${this.email}`);
        return this;
    }

}

class Moderator extends User{
    constructor(name,age,email,role){
        super(name,age,email);
        this.role = role;
    }

    
}

class Admin extends Moderator{
    constructor(name,age,email,role){
        super(name,age,email,role);
    }
   addCourse(user,course){
       user.courses.push(course);
       console.log(user);
   }
   deleteCourse(user,course){
       user.courses.pop(course);
       console.log(user)
   }
}


let user1 = new User('Roy',30,'roy@gmail.com')
let user2 = new User('Ayan',24,'ayan@gmai.com')
let mod = new Moderator('Shata',30,'shata@gmail.com','Moderator');
let admin = new Admin('Jaya',50,'jaya@gmail.com','Admin');
let users = [user1,user2,mod,admin];

users.forEach(element => {
    console.log(element);
});


admin.addCourse(user1,'Javascript');
admin.addCourse(user1,'Python');
admin.addCourse(user2,'Unix');
user1.addCoins();
user2.addCoins();
user1.addCoins();
user1.addCoins();
user1.removeCoins();