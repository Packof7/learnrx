class BaseGame {
  protected TEXTURES: string[] = ["loading.gif"];

  constructor() {
    console.log(this.TEXTURES);
  }

  public initLazy() {
    console.log(this.TEXTURES);
  }
}

class Game extends BaseGame {
  protected TEXTURES: string[] = [];
}

class Slots extends Game {
  protected TEXTURES: string[] = ["fruit1.png", "fruit2.png", "wild.png"];
}

const obj = new Slots();
obj.initLazy();
