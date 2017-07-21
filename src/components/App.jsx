class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: [],
      currentVideo: null,
      comments: [],
      chatterboxMessages: []
    };
    this.setCurrentVideo = this.setCurrentVideo.bind(this);
    this.search = this.search.bind(this);
    this.updateChatterBox = this.updateChatterBox.bind(this);

    this.updateChatterBox();
    setInterval(this.updateChatterBox, 5000);
  }

  componentDidMount() {
    this.search();
  }

  updateChatterBox() {
    window.getFromChatterBox((messages) => {
      this.setState({
        chatterboxMessages: messages.results
      });
    });
  }

  setCurrentVideo(video) {
    this.setState({currentVideo: video});
    this.getComments();
  }

  search(query = 'asdf') {
    var options = {
      key: this.props.API_KEY,
      maxResults: 5,
      query: query
    };

    this.props.searchYouTube(options, (videos) => {
      if (videos.length > 0) {
        this.setState({
          videoList: videos,
          currentVideo: videos[0]
        });
        this.getComments();
      }
    });
  }

  getComments() {
    var options = {
      key: this.props.API_KEY,
      max: 10,
      videoId: this.state.currentVideo.id.videoId
    };

    window.getComments(options, (comments) => {
      this.setState({
        comments: comments
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
            {this.state.videoList.length === 0 ? <h1>Loading Video...</h1> : <VideoPlayer video={this.state.currentVideo}/>}
            {this.state.comments.length === 0 ? <h1>Loading Comments...</h1> : <CommentList comments={this.state.comments}/>}
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videoList} selectVideoCallback={this.setCurrentVideo}/>
            <ChatterBox messages={this.state.chatterboxMessages} />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
