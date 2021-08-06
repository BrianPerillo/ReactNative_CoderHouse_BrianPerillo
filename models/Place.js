class Place {
  constructor(id, title, description, image, location) {
    this.id = id.toString();
    this.title = title;
    this.description = description;
    this.image = image;
    this.location = location;
  }
}

export default Place;