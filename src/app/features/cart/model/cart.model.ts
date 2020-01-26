export class Cart {
    constructor(
      public id: number,
      public name: string,
      public description: string,
      public price: number,
      public buy?: boolean
          ) {
      this.id = id || null;
      this.buy = buy || false;
          }
}