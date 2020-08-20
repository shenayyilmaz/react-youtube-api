import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";

class App extends React.Component {
  state = { videos: [] };

  onFormSubmit = async (term) => {
    console.log("app", term);
    const videos = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({ videos: videos.data.items });
    console.log(this.state.videos);
  };
  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onFormSubmit} />
      </div>
    );
  }
}

export default App;
