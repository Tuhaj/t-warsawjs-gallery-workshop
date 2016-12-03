var Gallery = {
  init() {
    this.setupListeners();
  },

  currentlyDisplayed: 0,
  displayWindow: document.querySelector('.display-window'),
  images: Array.from(document.querySelectorAll('img')),

  setupListeners() {
    this.addListenersToThumbnails();
    this.addListnersToArrows();
  },

  addListenersToThumbnails() {
    this.images.forEach((image) => {
      image.addEventListener('click', (e) => {
        let imageSource = image.parentNode.href;
        this.displayImage(imageSource);
        e.preventDefault();
      });
    });
  },

  addListnersToArrows() {
    let leftArrow = document.getElementById('arrow-left');
    let rightArrow = document.getElementById('arrow-right');
    leftArrow.addEventListener('click', (e) => {
      this.displayPrevious(e);
    });
    rightArrow.addEventListener('click', (e) => {
      this.displayNext(e);
    });
  },

  displayImage(imageSource) {
    let img = document.createElement('img');
    img.src = imageSource;
    this.displayWindow.innerHTML = '';
    this.displayWindow.appendChild(img);
  },

  maxImages() {
    return this.images.length;
  },

  displayPrevious(e) {
    let currentImageNo = this.currentlyDisplayed;
    currentImageNo -= 1;
    if(currentImageNo < 0) {
      currentImageNo = this.maxImages() - 2;
    };
    this.displayImageNo(currentImageNo);
    e.preventDefault();
  },

  displayNext(e) {
    let currentImageNo = this.currentlyDisplayed;
    currentImageNo += 1;
    if(currentImageNo >= this.maxImages() -1) {
      currentImageNo = 0;
    };
    this.displayImageNo(currentImageNo);
    e.preventDefault();
  },

  displayImageNo(number) {
    this.currentlyDisplayed = number;
    let currentImage = this.images[number]
    this.displayImage(currentImage.parentNode.href)
  },
};

Gallery.init();


