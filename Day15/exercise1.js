// Notes :===> Static methods are not called on instances of the class. Instead, they are called on the class itself.

class Person {
  constructor(firstname, lastname, age, country, score, skills) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.country = country;
    this.score = 0;
    this.skills = [];
  }
  getFullName() {
    const getFullName = this.firstname + " " + this.lastname;
    return getFullName;
  }
  getAge() {
    const getA = this.age;
    return getA;
  }
  get getScore() {
    return this.score;
  }
  set setScore(score) {
    return (score += score);
  }
  set setSkills(skills) {
    this.skills.push(skills);
  }
  getPersonIfno() {
    const fullname = this.getFullName();
    const skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(", ") +
        ` and ${this.skills[this.skills.length - 1]}`; // in order to put "and" just before the last skill element in skills array
    let formetedSkills = `He khows ${skills}`;
    console.log(skills);
    let info = `${fullname} is ${this.age} year old He lives in ${this.country}  ${formetedSkills} `;
    return info;
  }
  static favSkills() {
    const skills = ["HTML", "css", "js", "React"];
    const index = Math.floor(Math.random() * skills.length);
    return skills[index];
  }
}
const person = new Person("vijay", "prajapati", 22, "india");
const person2 = new Person("sanjay", "prajapati", 23, "india");
const person3 = new Person("ketan", "prajapati");

person.setSkills = "HTML";
person.setSkills = "css";
person.setSkills = "Javascript";
person.setScore = 1;
console.log(person.skills);
console.log(person.score);

// console.log(person.getPersonIfno());
// console.log(person2.getPersonIfno());
// console.log(person3.getPersonIfno());

console.log(Person.favSkills());

// console.log(person.getFullName());
// console.log(person2.getAge());
// console.log(person2.getScore); // we dont need to use paranthises to call the method
// console.log(person3);

// =====> Inheritence

// class Students extends Person {
//     saySomething () {
//         console.log("say something");
//     }
// }
// const s1 = new Students("st1" , "lastnameOfST1" ,25)
// console.log(s1);
// console.log(s1.saySomething());
// console.log(s1.getFullName());

// =====> Overriding methods

// Notes :  Inside the constructor function we call the super() function to access all the properties from the parent class

class Students extends Person {
  constructor(firstname, lastname, age, country, gender) {
    super(firstname, lastname, age, country);
    this.gender = gender;
  }
  saySomething() {
    console.log("say something");
  }
  getPersonIfno() {
    const fullname = this.getFullName();
    const skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(", ") +
        ` and ${this.skills[this.skills.length - 1]}`; // in order to put "and" just before the last skill element in skills array
    let formetedSkills = `He khows ${skills}`;
    const pronoun = this.gender == "Male" ? "He" : "She";
    console.log(skills);
    let info = `${fullname} is ${this.age} year old ${pronoun} lives in ${this.country} ${pronoun} ${formetedSkills} `;
    return info;
  }
}

const s1 = new Students("premal", "shah", 22, "india", "Male");
console.log(s1.getPersonIfno());
