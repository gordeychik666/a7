document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq__item');
  
    faqItems.forEach((item, index) => {
      const content = item.querySelector('.faq__content');
      const icon = item.querySelector('.faq__title img');
      
      if (item.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.src = 'img/faq-minus.svg';
      } else {
        content.style.maxHeight = 0;
        icon.src = 'img/faq-plus.svg';
      }
    });
  
    faqItems.forEach((item) => {
      const title = item.querySelector('.faq__title');
      const content = item.querySelector('.faq__content');
      const icon = item.querySelector('.faq__title img');
  
      title.addEventListener('click', function() {
        const isActive = item.classList.contains('active');
  
        if (isActive) {
          content.style.maxHeight = 0;
          item.classList.remove('active');
          icon.src = 'img/faq-plus.svg';
        } else {
          item.classList.add('active');
          content.style.maxHeight = content.scrollHeight + 'px';
          icon.src = 'img/faq-minus.svg';
        }
      });
    });
  });
  

  //бургер

  const burger = document.querySelector(".header__mobile-burger");
  const mobileContent = document.querySelector(".header__mobile-content");
  const mobileBg = document.querySelector(".header__mobile-bg");

  // Создаём и добавляем closeIcon
  const closeIcon = document.createElement("img");
  closeIcon.src = "img/close.svg";
  closeIcon.alt = "close";
  closeIcon.classList.add("close-icon");

  const burgerIcon = burger.querySelector("img");
  burgerIcon.classList.add("burger-icon");

  burger.appendChild(closeIcon);

  // Обработчик нажатия на бургер
  burger.addEventListener("click", function () {
    burger.classList.toggle("active");
    mobileContent.classList.toggle("active");
    mobileBg.classList.toggle("active"); // Переключаем фон
  });

  // Закрытие меню при клике на затемненный фон (не по содержимому меню)
  mobileBg.addEventListener("click", function () {
    burger.classList.remove("active");
    mobileContent.classList.remove("active");
    mobileBg.classList.remove("active");
  });

  // Предотвращаем закрытие меню, если клик был внутри самого меню
  mobileContent.addEventListener("click", function (e) {
    e.stopPropagation(); // Останавливаем всплытие события, чтобы оно не доходило до mobileBg
  });
  


  const links = document.querySelectorAll('.footer__politic');

  links.forEach(link => {
      link.addEventListener('touchstart', function() {
          link.classList.add('active');
      });

      link.addEventListener('touchend', function() {
          link.classList.remove('active');
      });
  });
