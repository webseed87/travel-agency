const swiper = new Swiper('.swiper', {
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
    },
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      1280: {
        slidesPerView: 3, 
        spaceBetween: 10,
      },
          768: {
            slidesPerView: 2, 
            spaceBetween: 10,
          },
      },
  });
  const swiper1 = new Swiper('.swiper2 ', {
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
   
        768: {
          slidesPerView: 4, 
          spaceBetween: 10, 
        },
      },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },


  });
  document.addEventListener("DOMContentLoaded", function () {
    const reviewList = document.querySelector('.user-review');
    const items = Array.from(reviewList.children);
    const itemWidth = items[0].offsetWidth + 20; // 각 li 너비와 마진 포함

    // 리스트 복제하여 자연스럽게 이어지게 만듦
    items.forEach(item => {
      const clone = item.cloneNode(true);
      reviewList.appendChild(clone);
    });

    let position = 0;
    let intervalId;

    function startAnimation() {
      intervalId = setInterval(() => {
        position -= 1; // 슬라이드 속도 조절

        // 무한 루프 효과
        if (Math.abs(position) >= reviewList.scrollWidth / 2) {
          position = 0;
        }

        reviewList.style.transform = `translateX(${position}px)`;
      }, 16); // 약 60fps
    }

    // 애니메이션 시작
    startAnimation();

    // 마우스를 올리면 애니메이션 서서히 멈춤
    reviewList.addEventListener("mouseenter", () => {
      clearInterval(intervalId);
      reviewList.style.transition = "transform 0.5s ease"; // 멈출 때 부드러운 감속 효과
    });

    // 마우스를 벗어나면 애니메이션 재개
    reviewList.addEventListener("mouseleave", () => {
      reviewList.style.transition = ""; // 원래 애니메이션 속도로 전환
      startAnimation();
    });

    document.querySelector('.menu-bar').addEventListener("click", function () {
        document.querySelector('nav').classList.toggle('active');
    });

  });
