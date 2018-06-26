var searchYouTube = (options, callback) => {
  $.ajax({
    URL: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      q: options.query,
      maxResults: options.max,
      key: options.key
    },
    success: (data) => {
      console.log('success');
      // store it an array in App state.videos:
      callback(data);
    },
    failure: () => {
      console.log('GET has failed');
    }
  });
};

window.searchYouTube = searchYouTube;
