require('./styles/index.scss');

let $ = require('jquery');

$(document).ready(function() {

  preloadImages = (imageArray) => {
    $(imageArray).each(function() {
      $('<img/>')[0].src = this;
    });
    return imageArray
  };

  let imageArray = preloadImages([
    '/lib/images/red-rocks-gallery/1.jpg',
    '/lib/images/red-rocks-gallery/2.jpg',
    '/lib/images/red-rocks-gallery/3.jpg',
    '/lib/images/red-rocks-gallery/4.jpg',
    '/lib/images/lexington-gallery/1.jpg',
    '/lib/images/lexington-gallery/2.jpg',
    '/lib/images/lexington-gallery/3.jpg',
    '/lib/images/lexington-gallery/4.jpg',
    '/lib/images/lexington-gallery/5.jpg',
    '/lib/images/raleigh-gallery/1.jpg',
    '/lib/images/raleigh-gallery/2.jpg',
    '/lib/images/westminster-gallery/1.jpg',
    '/lib/images/westminster-gallery/2.jpg',
  ]);

  showLightBox = (picture) => {
    let galleryTitle = picture.attr('id');
    let number = 1;
    let galleryImage = '/lib/images/' + galleryTitle + '/' + number + '.jpg';
    let imageDescription = 'description goes here...'

    let lightbox = `
    <div class="lightbox-container">
      <div class="close-lightbox"></div>
      <div id=${galleryTitle} style="display: none;" class="lightbox-image-wrapper">
      <img id=${number} class="lightbox-image" src=${galleryImage} />
      <div class="lightbox-description-bar">
      </div>
      <div class="arrow-bg arrow-bg-right"></div>
      <div class="arrow-bg arrow-bg-left"></div>
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

  checkAvailable = (arr, val) => {
    return arr.some(function(value) {
      return val === value
    });
  };

  findLastImage = (imageArray, galleryTitle) => {
    let galleryArray = [];

    imageArray.forEach(function(image) {
      let galleryName = image.split('/')[3];

      if (galleryName === galleryTitle) {
        galleryArray.push(image)
      } else {
        return null
      }
    });

    return galleryArray.slice(-1)[0]
  };

  showNextImage = (button, imageNumber, galleryTitle) => {
    let image = $('.lightbox-image');
    let number = parseInt(imageNumber) + 1;
    let imageTag = '/lib/images/' + galleryTitle + '/' + number + '.jpg';

    if(checkAvailable(imageArray, imageTag)) {
      image.attr('src', imageTag);
      $('.lightbox-image').attr('id', number.toString());
    } else {
      let newImageTag = '/lib/images/' + galleryTitle + '/1.jpg';
      image.attr('src', newImageTag);
      $('.lightbox-image').attr('id', 1);
    };
  };

  showPreviousImage = (button, imageNumber, galleryTitle) => {
    let image = $('.lightbox-image');
    let number = parseInt(imageNumber) - 1;
    let imageTag = '/lib/images/' + galleryTitle + '/' + number + '.jpg';

    findLastImage(imageArray, galleryTitle);

    if(checkAvailable(imageArray, imageTag)) {
      image.attr('src', imageTag);
      $('.lightbox-image').attr('id', number.toString());
    } else {
        let lastImageTag = findLastImage(imageArray, galleryTitle);
        let lastNumber = lastImageTag.split('/')[4];

        image.attr('src', lastImageTag);
        $('.lightbox-image').attr('id', lastNumber);
    }
  };

  $('.collection-container').on('click', '.image-gallery-btn', function(e) {
    e.preventDefault();
    showLightBox($(this));
  });

  $(document).on('click', '.exit-btn', function() {
    closeLightBox();
  });

  $(document).on('click', '.close-lightbox', function() {
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

  $(document).on('click', '.show-more-btn', function()  {
    $(this).toggleClass('hidden');
    $(this).siblings('p.show-more-btn').removeClass('hidden');
    $(this).siblings('p.show-more-copy').toggleClass('hidden');
  });
});
