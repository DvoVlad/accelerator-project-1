window.addEventListener('load', () => {
  const uploadVideoButton = document.querySelector('.about__play');
  const preview = document.querySelector('.about__preview');
  const previewWrapper = document.querySelector('.about__preview-wrapper');
  uploadVideoButton.addEventListener('click', () => {
    preview.remove();
    uploadVideoButton.remove();
    const videoIframe = document.createElement('iframe');
    videoIframe.classList.add('about__video');
    videoIframe.src = 'https://www.youtube.com/embed/9TZXsZItgdw?si=tJpCEikTAfWTN1tk';
    videoIframe.frameBorder = 0;
    previewWrapper.appendChild(videoIframe);
    previewWrapper.classList.add('about__preview-wrapper--no-background');
  });
});
