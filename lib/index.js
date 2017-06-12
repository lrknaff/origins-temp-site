require('./styles/index.scss');

let $ = require('jquery');


$(document).ready(function() {
  $('.collection-container').on('click', '.image-gallery-btn', function() {
    let galleryTitle = $(this).attr('id');
    console.log($(this).attr('id'));
  })
});
