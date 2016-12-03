let displayWindow = document.querySelector('.display-window');
let images = Array.from(document.querySelectorAll('img'));

function displayImage(imageSource) {
  let img = document.createElement('img');
  img.src = imageSource;
  displayWindow.innerHTML = '';
  displayWindow.appendChild(img);
}

images.forEach((image) => {
  image.addEventListener('click', (e) => {
    let imageSource = image.parentNode.href;
    displayImage(imageSource)
    e.preventDefault();
  });
});
