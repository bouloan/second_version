interface image {
  id: number;
  url: string;
}

export class News {
  constructor(
    public id: string,
    public title: string,
    public resume: string,
    public content: string,
    public images: image[],
    public date: string
  ) {}
}
