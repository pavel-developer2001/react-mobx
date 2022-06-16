import axios from "axios";

export default class PostApi {
  static async getPosts() {
    return await axios.get("http://localhost:3001/posts");
  }
  static async removePost(id: string) {
    return await axios.delete(`http://localhost:3001/posts/` + id);
  }
  static async createPost(data: { id: string; text: string }) {
    return await axios.post("http://localhost:3001/posts", data);
  }
  static async editPost(data: { id: string; text: string }) {
    return await axios.patch("http://localhost:3001/posts/" + data.id, data);
  }
}
