import { Adress } from "./adress.models";

export class User {

  constructor(public firstname: string,
              public lastname:string,
              public email:string,
              public adress:Adress,
              public description:string,
              public dateBirth:string,
              public aliases?: string[],





    ){}
}
