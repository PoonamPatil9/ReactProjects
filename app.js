$(document).ready(function() {
    $('#movieForm').submit(function(event) {
      event.preventDefault();
      
      var movieName = $('#movieName').val();
      var actorName = $('#actorName').val();
      var releaseDate = $('#releaseDate').val();
      var movieType = [];
      $('input[type="checkbox"]:checked').each(function() {
        movieType.push($(this).val());
      });
      var language = $('input[name="language"]:checked').val();
  
      if (movieName.length >= 5 && actorName.length >= 3) {
        var movieDetails = `
          <p><strong>Movie Name:</strong> ${movieName}</p>
          <p><strong>Actor Name:</strong> ${actorName}</p>
          <p><strong>Release Date:</strong> ${releaseDate}</p>
          <p><strong>Movie Type:</strong> ${movieType.join(', ')}</p>
          <p><strong>Language:</strong> ${language}</p>
        `;
        $('#movieDetails').html(movieDetails);
      } else {
        alert('Movie Name must be at least 5 characters and Actor Name must be at least 3 characters.');
      }
    });
  });
  