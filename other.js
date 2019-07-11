var fetch = function (searchQuery, searchCategory) {
  var url = 'https://swapi.co/api/' + searchCategory + '/?search=' + searchQuery;

  $.ajax({
    method: "GET",
    url: url,
    dataType: "json",
    success: function(data) {
      renderResults(data);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
    }
  });
};

var renderResults = function (data) {
  $('.results').empty();

  for (var i = 0; i < data.results.length; i++) {
    var result = data.results[i];

    var resultsHTML = '<div class="col-md-6">' +
      '<h4>' + result.name + '</h4>' +
      '<div> <strong> Name </strong>: ' + result.artistName + '</div>' +
   
      '<hr>' +
      '</div>';

    $('.results').append(resultsHTML);
  }
};

$('.search-form').on('submit', function (e) {
  e.preventDefault();

  var searchQuery = $('#search-query').val();
  var searchCategory = $('#search-category').val();

  fetch(searchQuery, searchCategory);
});

fetch('', 'people');




let final HTML = ''

        json.results.forEach( song => {
            finalHTML += `
            <div class="card" style="width: 18rem;">
            <img src="${song." 
            class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${song.artistName}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Listen</a>
            </div>
          </div>
            
            
            `