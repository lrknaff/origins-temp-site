require('./styles/index.scss');

let $ = require('jquery');


$(document).ready(function() {

  preloadImages = (imageArray) => {
    $(imageArray).each(function() {
      $('<img/>')[0].src = this;
    });
  };

  preloadImages([
    '/lib/images/red-rocks-gallery/1.png',
    '/lib/images/red-rocks-gallery/2.png',
    '/lib/images/lexington-gallery/1.png',
    '/lib/images/lexington-gallery/2.png',
  ]);

  showLightBox = (picture) => {
    let galleryTitle = picture.attr('id');
    let number = 1;
    let galleryImage = '/lib/images/' + galleryTitle + '/' + number + '.png';
    let imageDescription = 'description goes here...'

    let lightbox = `
    <div class="lightbox-container">
    <div id=${galleryTitle} style="display: none;" class="lightbox-image-wrapper">
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

  closeLightBox = () => {
    let lightBoxState = $('.lightbox-container').length;

    if (lightBoxState === 1) {
      $('.lightbox-image-wrapper').fadeOut('slow');
      $('.lightbox-container').remove();
    } else {
      return null
    }
  };

  showNextImage = (button, imageNumber, galleryTitle) => {
    let image = $('.lightbox-image');
    let number = parseInt(imageNumber);

    if (number === 4) {
      let newImageTag = '/lib/images/' + galleryTitle + '/1.png';
      image.attr('src', newImageTag);

      $('.lightbox-image').attr('id', '1');
    } else {
      number++
      let newImageTag = '/lib/images/' + galleryTitle + '/' + number + '.png';

      image.attr('src', newImageTag);
      $('.lightbox-image').attr('id', number.toString());
    }
  };

  showPreviousImage = (button, imageNumber, galleryTitle) => {
    let image = $('.lightbox-image');
    let number = parseInt(imageNumber);

    if (number === 1) {
      let newImageTag = '/lib/images/' + galleryTitle + '/4.png';
      image.attr('src', newImageTag);

      $('.lightbox-image').attr('id', '4');
    } else {
      number--
      let newImageTag = '/lib/images/' + galleryTitle + '/' + number + '.png';

      image.attr('src', newImageTag);
      $('.lightbox-image').attr('id', number.toString());
    }
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
    let galleryTitle = $(this).parent().attr('id');

    showNextImage($(this), imageNumber, galleryTitle);
  });

  $(document).on('click', '.previous-btn', function() {
    let imageNumber = $(this).siblings('img').attr('id');
    let galleryTitle = $(this).parent().attr('id');

    showPreviousImage($(this), imageNumber, galleryTitle);
  });
});
