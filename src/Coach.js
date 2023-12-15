class Coach {
  #name;
  #hate;
  #recommendation;

  constructor(name) {
    this.#name = name;
  }

  hate(menu) {
    this.#hate = menu;
    console.log(this.#name);
    console.log(this.#hate);
  }
}

export default Coach;
