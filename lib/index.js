require('./styles/index.scss');

let $ = require('jquery');


$(document).ready(function() {

  closeLightBox = () => {
    let lightBoxState = $('.lightbox-container').length;

    if (lightBoxState === 1) {
      $('.lightbox-container').remove();
    } else {
      return null
    }
  };

  showLightBox = (picture) => {
    let galleryTitle = picture.attr('id');
    let number = '1';
    let galleryImage = '/lib/images/' + galleryTitle + '/' + number + '.png';

    let lightbox = `
      <div class="lightbox-container">
        <div class="lightbox-image-wrapper">
          <img class="lightbox-image" src=${galleryImage} />
          <div class="lightbox-description-bar">
            <p class="description">Description goes here.</p>
          </div>
          <img class="exit-btn" />
          <img class="next-btn" />
        </div>
      </div>
    `

    $('body').append(lightbox);
  };

  $('.collection-container').on('click', '.image-gallery-btn', function(e) {

    e.preventDefault();
    showLightBox($(this));
  });

  $(document).on('click', '.lightbox-container', function() {
    closeLightBox();
  });
});
