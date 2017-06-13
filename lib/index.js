require('./styles/index.scss');

let $ = require('jquery');


$(document).ready(function() {

  closeLightBox = () => {
    let lightBoxState = $('.lightbox-container').length;

    if (lightBoxState === 1) {
      $('.lightbox-image-wrapper').fadeOut('slow');
      $('.lightbox-container').remove();
    } else {
      return null
    }
  };

  showLightBox = (picture) => {
    let galleryTitle = picture.attr('id');
    let number = 1;
    let galleryImage = '/lib/images/' + galleryTitle + '/' + number + '.png';
    let imageDescription = 'description goes here...'

    let lightbox = `
      <div class="lightbox-container">
        <div style="display: none;" class="lightbox-image-wrapper">
          <img id=${number} class="lightbox-image" src=${galleryImage} />
          <div class="lightbox-description-bar">
            <p class="description">${imageDescription}</p>
          </div>
          <img class="exit-btn" src="/lib/images/exit-btn.svg" alt="exit lightbox" />
          <img class="next-btn" src="/lib/images/gallery-arrow.svg" alt="next image" />
          <img class="previous-btn" src="/lib/images/gallery-arrow.svg" alt="previous image" />
        </div>
      </div>
    `

    $('body').append(lightbox);
    $('.lightbox-image-wrapper').fadeIn('slow');
  };

  showNextImage = (imageNumber) => {
    console.log('click')
  };

  $('.collection-container').on('click', '.image-gallery-btn', function(e) {
    e.preventDefault();
    showLightBox($(this));
  });

  $(document).on('click', '.exit-btn', function() {
    closeLightBox();
  });

  $(document).on('click', '.next-btn', function() {
    let imageNumber = $(this).siblings('img').attr('id');
    console.log(imageNumber)

    showNextImage(imageNumber);
  });
});
