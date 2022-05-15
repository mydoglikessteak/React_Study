import "./App.css";
import { Component } from "react";
import { loadPOsts } from "./utils/load-Posts";
import { PostCard } from "./componnets/PostCard";

class App extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    await this.loadPosts();
  }
  componentDidUpdate() {}

  componentWillUnmount() {}

  loadPosts = async () => {
    const postsAndPhotos = await loadPOsts();
    this.setState({ posts: postsAndPhotos });
  };

  render() {
    const { posts } = this.state;
    return (
      <section className="container">
        <div className="posts">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              tittle={post.title}
              body={post.body}
              id={post.id}
              cover={post.cover}
            />
          ))}
        </div>
      </section>
    );
  }
}

export default App;
