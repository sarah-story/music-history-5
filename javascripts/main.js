
//Use requirejs to declare dependencies
requirejs(["dom-access", "populate-songs", "get-more-songs"],
  function(dom, songs, moreSongs) {
    
    //Call function from populate-songs.js
    //Takes write function and location as arguments
    //This will write the contents of songs.json to the html
    songs.querySongs(write, dom.dom);

    //When the 'See More' button is clicked:
    $(document).on('click','#more', function() {

      //Call function from get-more-songs.js
      //Takes write function and location as arguments
      //This will write the contents of moreSongs.json to the html
      moreSongs.querySongs(write, dom.dom);  
    });

    //Delete song info when delete button is clicked
    $(document).on('click', '.delete', function() {
      $(this).parent().addClass('removed')
          .on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
              $(this).slideUp(100, function() {
                $(this).remove();
              })
           });
    });


    //Function that loops through a song object and formats it for HTML
    //Writes formatted text before the 'See More' button
    function write(data, location) {
      var songText = "";
      $.each(data.songs, function(i) {
        songText += "<div class='song-info new well'><h2>" + this.title + "</h2><button class='btn btn-default btn-xs delete'>Delete</button><p>" + this.artist + " | " + this.album + "</p></div>";
      });
      $(location).before(songText);
    }
  }
);