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
      console.log('Error fetching videos');
    }
  });
};

var getComments = ({key, max, videoId}, callback) => {
  $.ajax({
    'url': 'https://www.googleapis.com/youtube/v3/commentThreads',
    'method': 'GET',
    'data': {
      'key': key,
      'maxResults': max,
      'videoId': videoId,
      'part': 'snippet, replies'
    },
    success: function(data) {
      callback(data.items);
    },
    error: function() {
      console.log('Error fetching comments');
    }
  });
};

window.searchYouTube = searchYouTube;
window.getComments = getComments;
