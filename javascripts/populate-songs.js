define( function() {
  
  //return a function that executes the AJAX call
  //it takes the write to HTML function and the 
  //dom location as arguments
  return {
    querySongs: function(write, location) {
      $.ajax({
        url: 'data/songs.json'
      }).done(function(data) {
        write(data, location);                
      });
    }
  };
});

