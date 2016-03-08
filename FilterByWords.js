twit.stream('statuses/filter', { track: ['happy', 'sad'] }, function(stream) {

  stream.on('data', function (data) {
    console.log(data);
  });
});
