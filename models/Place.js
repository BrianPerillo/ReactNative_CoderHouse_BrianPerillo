class Place {
  constructor(id, title, description, image, location, lat, lng) {
    this.id = id.toString();
    this.title = title;
    this.description = description;
    this.image = image;
    this.location = location;
    this.lat = lat;
    this.lng = lng;
  }
}

export default Place;