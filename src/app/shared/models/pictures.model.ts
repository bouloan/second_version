import { Picture } from "./picture.model";

export class Pictures {
  constructor(
    public id: number,
    public title: string,
    public pictures: Picture[]
  ) {}
}
