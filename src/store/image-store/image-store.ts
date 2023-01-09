class ImageStore {
  public readonly id: string;
  public readonly order: number;
  public readonly imageLink: string;

  constructor(id: string, order: number, image: string) {
    this.id = id;
    this.order = order;
    this.imageLink = image;
  }
}

export default ImageStore;
