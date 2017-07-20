var searchYouTube = (options, callback) => {
  $.ajax({
    "url": "https://www.googleapis.com/youtube/v3/search",
    "method": "GET",
    "data": {
      "key": options.key,
      "maxResults": options.max,
      "q": options.query,
      "type": "video",
      "part": "snippet"
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
