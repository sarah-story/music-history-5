define(function() {

  //same as populate-songs function, except
  //the endpoint is different  
  return {
    querySongs: function(write,location) {
      $.ajax({
        url: 'data/songs.json'
      }).done(function(data) {
        write(data, location);
      });
    }
  };
});