import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";
import youtube from "../api/youtube";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onFormSubmit("flowers");
  }

  onFormSubmit = async (term) => {
    console.log("app", term);
    const videos = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({
      videos: videos.data.items,
      selectedVideo: videos.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onFormSubmit} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
        <VideoDetails video={this.state.selectedVideo} />
      </div>
    );
  }
}

export default App;
