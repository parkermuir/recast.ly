class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      currentVideo: window.exampleVideoData[0]
    };
    this.onVideoEntryClick = this.onVideoEntryClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  searchYouTube(options, callback) {
    // console.log(options)
    $.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      data: {
        q: options.query,
        maxResults: options.max,
        key: window.YOUTUBE_API_KEY,
        type: 'video',
        part: 'snippet'
      },
      contentType: 'application/json',
      success: (data) => {
        data = data.items;
        console.log('dataaa: ', data);
        this.setState({videos: data});

        callback(data);
      },
      failure: () => {
        console.log('GET has failed');
      }
    });
  }

  handleSubmit(searchText) {
    console.log('handling submit now');
    this.searchYouTube({
      query: searchText,
      max: 5
    });
  }

  onVideoEntryClick(newCurrent) {
    this.setState({
      currentVideo: newCurrent
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> <Search submithandler={this.handleSubmit}/> </h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em> <VideoPlayer video={this.state.currentVideo} /> </h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>videoList</em> <VideoList videos={this.state.videos} clickhandler={this.onVideoEntryClick} /> </h5></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;


