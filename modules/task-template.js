class NewTaskTemplate {
  constructor(str, boole = false, num = 0) {
    this.description = str;
    this.completed = boole;
    this.index = num;
  }
}

export default NewTaskTemplate;
