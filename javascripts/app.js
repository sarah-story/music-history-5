$(document).ready(function() {
  var main = $('#right');
  var button = $("#more");
  $.ajax({
    url: 'songs.json'
  }).done(function(data) {
    $.each(data.songs, function(i) {
      var songText = "<div class='song-info'><h2>" + this.title + "</h2><p>" + this.artist + " | " + this.album + "</p><button class='delete'>Delete</button></div>";
      button.before(songText);
    });
  });

  $(document).on('click', '.delete', function() {
    $(this).parent().remove();
  });

  $(document).on('click', '#more', function() {
    $.ajax({
      url: 'moreSongs.json'
    }).done(function(data) {
      $.each(data.songs, function() {
        var songText = "<div class='song-info'><h2>" + this.title + "</h2><p>" + this.artist + " | " + this.album + "</p><button class='delete'>Delete</button></div>";
        button.before(songText);
      });
    });
  });
});




