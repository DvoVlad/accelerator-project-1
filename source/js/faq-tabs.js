window.addEventListener('load', () => {
  const accordeonButtons = document.querySelectorAll('.faq__accordeon-button');
  const startedAccordions = document.querySelectorAll('.faq__accordeon');

  const initialize = () => {
    for (let i = 0; i < startedAccordions.length; i++) {
      const text = startedAccordions[i].querySelector('p');
      if(startedAccordions[i].classList.contains('faq__accordeon--active')) {
        text.style.maxHeight = `${text.scrollHeight}px`;
      } else {
        text.style.maxHeight = '0';
      }
    }
  };

  const tabs = document.querySelector('.faq__tabs');
  tabs.addEventListener('click', (e) => {

    if(!e.target.closest('.faq__tab')) {
      return;
    }
    const oldTab = document.querySelector('.faq__tab--active');
    oldTab.classList.remove('faq__tab--active');
    e.target.classList.add('faq__tab--active');
    const tabNumber = e.target.dataset.open;
    const oldActiveContent = document.querySelector('.faq__tab-content--active');
    oldActiveContent.classList.remove('faq__tab-content--active');
    const newActiveContent = document.querySelector(`.faq__tab-content[data-tab="${tabNumber}"]`);
    newActiveContent.classList.add('faq__tab-content--active');
    initialize();
  });

  initialize();

  for (let i = 0; i < accordeonButtons.length; i++) {
    accordeonButtons[i].addEventListener('click', (e) => {
      const accordeonNumber = e.target.dataset.openAccordeon;
      const accordeon = document.querySelector(`[data-accordeon="${accordeonNumber}"]`);
      accordeon.classList.toggle('faq__accordeon--active');
      const text = accordeon.querySelector('p');
      if(accordeon.classList.contains('faq__accordeon--active')) {
        text.style.maxHeight = `${text.scrollHeight}px`;
      } else {
        text.style.maxHeight = '0';
      }
    });
  }
});
