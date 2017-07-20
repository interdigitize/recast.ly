var searchYouTube = ({key, max, query}, callback) => {
  $.ajax({
    'url': 'https://www.googleapis.com/youtube/v3/search',
    'method': 'GET',
    'data': {
      'key': key,
      'maxResults': max,
      'q': query,
      'type': 'video',
      'part': 'snippet'
    },
    success: function (data) {
      callback(data.items);
    },
    error: function () {
      console.log('Error');
    }
  });
};

window.searchYouTube = searchYouTube;
