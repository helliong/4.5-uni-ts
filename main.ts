class User {
  static userName: string;
  private surname: string;
  protected age: number;

  constructor(name: string, surname: string, age: number) {
    User.userName = name;
    this.surname = surname;
    this.age = age;
  }

  public setAge(age: number): void {
    this.age = age;
  }

  public getAge(): number {
    return this.age;
  }
}

const user = new User('John', 'Smith', 25);

console.log('Имя:', User.userName);
console.log('Возраст:', user.getAge());

user.setAge(30);
console.log('Новый возраст:', user.getAge());