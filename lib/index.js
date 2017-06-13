require('./styles/index.scss');

let $ = require('jquery');


$(document).ready(function() {

  let lightbox = `
    <div class="lightbox-container">
      <div class="lightbox-image-wrapper">
        <img class="lightbox-image"/>
      </div>
      <img class="exit-btn" />
      <img class="next-btn" />
      <p class="description"></p>
    </div>
  `

  $('.collection-container').on('click', '.image-gallery-btn', function() {
    let galleryTitle = $(this).attr('id');

    $('body').append(lightbox);
  });
});
