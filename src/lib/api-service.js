import axios from "axios";

class Locations {
  constructor() {
    this.locations = axios.create({
      baseURL: "http://localhost:3000/api/v1/posts/",
    });
  }

  list = () => {
    return this.locations.get("/").then(({ data }) => data);
  };

  show = (id) => {
    console.log(123, id);
    return this.locations.get("/" + id).then(({ data }) => data);
  };

  create = (cityData) => {
    const { name, description, longitude, latitude, image } = cityData;

    const body = {
      title: name,
      content: description,
      long: longitude || "",
      lat: latitude || "",
      image_url: image || "",
    };

    return this.locations.post("/", body).then(({ data }) => data);
  };

  update = (cityData) => {
    console.log(555, cityData);
    const { name, description, longitude, latitude, image, id } = cityData;

    const body = {
      title: name,
      content: description,
      long: longitude || "",
      lat: latitude || "",
      image_url: image || "",
    };

    const test = {
      title: "kail",
      content: "blah",
    };

    return this.locations.put("/" + id, body).then(({ data }) => data);
  };

  remove = (id) => {
    return this.locations.delete("/" + id).then(({ data }) => data);
  };
}

const locations = new Locations();

export default locations;
