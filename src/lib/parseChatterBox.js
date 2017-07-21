var getFromChatterBox = (callback) => {
  $.ajax({
    url: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
    method: 'GET',
    data: {
      order: '-createdAt',
      limit: 25
    },
    headers: {
      'X-Parse-Application-Id': window.CHATTERBOX_APP_ID,
      'X-Parse-REST-API-Key': window.CHATTERBOX_API_KEY
    },
    success: function (data) {
      callback(data);
    },
    error: function () {
      console.log('Error fetching chatterbox messages');
    }
  });
};

window.getFromChatterBox = getFromChatterBox;
