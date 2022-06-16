import { makeAutoObservable } from "mobx";
import PostApi from "../services/post-api";

export interface IPost {
  id: string;
  text: string;
}

class Post {
  posts = [] as IPost[];
  isLoading = true;
  error = null;

  constructor() {
    makeAutoObservable(this);
  }

  async getPosts() {
    try {
      const data = await PostApi.getPosts();
      this.isLoading = false;
      return (this.posts = data.data);
    } catch (error: any) {
      this.error = error.message;
      this.isLoading = false;
    }
  }

  async removePost(id: string) {
    try {
      await PostApi.removePost(id);
      this.isLoading = true;
      const data = await PostApi.getPosts();
      this.isLoading = false;
      return (this.posts = data.data);
    } catch (error: any) {
      this.error = error.message;
      this.isLoading = false;
    }
  }

  async createPost(data: { id: string; text: string }) {
    try {
      await PostApi.createPost(data);
      this.posts.push(data);
    } catch (error: any) {
      this.error = error.message;
      this.isLoading = false;
    }
  }

  async editPost(data: { id: string; text: string }) {
    try {
      await PostApi.editPost(data);
      this.isLoading = true;
      const newData = await PostApi.getPosts();
      this.isLoading = false;
      return (this.posts = newData.data);
    } catch (error: any) {
      this.error = error.message;
      this.isLoading = false;
    }
  }
}

export default new Post();
