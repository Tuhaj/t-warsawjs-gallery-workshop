var Gallery = {
  init() {
    this.setupListeners();
  },

  displayWindow: document.querySelector('.display-window'),
  images: Array.from(document.querySelectorAll('img')),

  setupListeners() {
    this.images.forEach((image) => {
      image.addEventListener('click', (e) => {
        let imageSource = image.parentNode.href;
        this.displayImage(imageSource);
        e.preventDefault();
      });
    });
  },

  displayImage(imageSource) {
    let img = document.createElement('img');
    img.src = imageSource;
    this.displayWindow.innerHTML = '';
    this.displayWindow.appendChild(img);
  }
};

Gallery.init();


