class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: [],
      currentVideo: null
    };
    this.setCurrentVideo = this.setCurrentVideo.bind(this);
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    this.search();
  }

  setCurrentVideo(video) {
    this.setState({currentVideo: video});
  }

  search(query = 'asdf') {
    var options = {
      key: this.props.API_KEY,
      maxResults: 5,
      query: query
    };

    this.props.searchYouTube(options, (videos) => {
      this.setState({
        videoList: videos,
        currentVideo: videos[0]
      });
    });
  }


  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search callback={this.search}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            {this.state.videoList.length === 0 ? <h1>Loading</h1> : <VideoPlayer video={this.state.currentVideo}/>}
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videoList} selectVideoCallback={this.setCurrentVideo}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
