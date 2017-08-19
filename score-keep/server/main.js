import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {
  class Person {
    constructor(name = 'Anonymous', age = 0) {
      this.name = name;
      this.age = age;
    }

    getGreeting() {
      return `Hi! I am ${this.name}.`;
    }

    getPersonDescription() {
      return `${this.name} is ${this.age} year(s) old.`;
    }
  }

  class Employee extends Person {
    constructor(name, age, title) {
      super(name, age);
      this.title = title;
    }

    getGreeting() {
      if (this.title) {
        return super.getGreeting() + ` I work as a ${this.title}`;
      } else {
        return super.getGreeting();
      }
    }

    hasJob() {
      return !!this.title;
    }
  }

  class Programmer extends Person {
    constructor(name, age, language = 'assembly') {
      super(name, age);
      this.language = language;
    }

    getGreeting() {
      return super.getGreeting() + `I am a ${this.language} developer.`;
    }
  }

  let me = new Programmer('Beau', 23, 'db admin');
  console.log(me.getGreeting());
  console.log(me.getPersonDescription());
  // console.log(me.hasJob());
});
