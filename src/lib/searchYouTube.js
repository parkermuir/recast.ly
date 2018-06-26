var searchYouTube = (options, callback) => {
  // console.log(options)
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      q: options.query,
      maxResults: options.max,
      key: options.key,
      type: 'video',
      part: 'snippet'
    },
    contentType: 'application/json',
    success: (data) => {
      data = data.items;
      console.log('data--', data);
      // store it an array in App state.videos:
      callback(data);
    },
    failure: () => {
      console.log('GET has failed');
    }
  });
};

window.searchYouTube = searchYouTube;