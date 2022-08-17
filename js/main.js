const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click',function(){
    searchInputEl.focus();
});
//포커스 일 때
searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder','통합검색');
});
//포커스 해제 일 때
searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder','');
});

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
window.addEventListener('scroll', _.throttle(function(){
    if(window.scrollY>500){
        //배지 숨기기
        //badgeEl.style.display = 'none';
        //gsap.to(요소, 지속시간 , 옵션);
        gsap.to(badgeEl,.6, {
            opacity :0,
            display: 'none'
        });
        // 버튼 보이기(스크롤)
        gsap.to(toTopEl, .2, {
            x:0
        });
    }else{
        //배지 보이기
        //badgeEl.style.display = 'block';
        gsap.to(badgeEl,.6, {
            opacity : 1,
            display: 'block'
        });
        // 버튼 숨기기(스크롤)
        gsap.to(toTopEl, .2, {
            x:100
        });
    }
}, 300));  

toTopEl.addEventListener('click', function(){
    gsap.to(window, .7, {
        scrollTo: 0
    })
});

// _.throttle(함수, 시간)
// visual 이라는 클래스 요소들 안에 페이드인 클래스 다 찾아오기
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index ){
    //gsap.to(요소, 지속시간 , 옵션);
    gsap.to(fadeEl, 1 ,{
        delay:(index+1)* .7,
        opacity : 1,
        }
    );
});

//new Swiper( 선택자 , 옵션 ); 초기화

new Swiper( '.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true,
    slidesPerView:1
});

new Swiper( '.promotion .swiper-container', {
    slidesPerView : 3, //g한번에 보여줄 슬라이드 개수
    spaceBetween : 10, //슬라이드 사이 여백
    centeredSlides : true,
    loop: true,
    autoplay:{
        delay: 5000
    },
    pagination: {
        el: '.promotion .swiper-pagination',  // 페이지 번호 요소 선택자
        clickable: true   //사용자의 페이지 번호 요소 제어 여부
    },
    navigation :{
        prevEl: '.promotion .swiper-prev',  // 해당 선택자 입력
        nextEl: '.promotion .swiper-next'   // 해당 선택자 입력
    }
});

new Swiper('.awards .swiper-container', {
    direction: 'horizontal', // 수평 슬라이드
    autoplay: true, // 자동 재생 여부
    loop: true, // 반복 재생 여부
    spaceBetween: 30, // 슬라이드 사이 여백
    slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');

// 슬라이드 영역 숨김 여부 기본값!
let isHidePromotion = false
// 토글 버튼을 클릭하면,

promotionToggleBtn.addEventListener('click',function(){
    isHidePromotion = !isHidePromotion;
    if(isHidePromotion){
        //hidden
        promotionEl.classList.add('hide');
    }else{
        //displan
        promotionEl.classList.remove('hide');
    }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }

function floatingObject(selector, delay, size){
    gsap.to(selector,random(1.5,2.5),{
        y: size,
        repeat: -1,
        yoyo: true,
        ease: Power1.easeInOut,
        delay: random(0,delay)
    });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);



const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl ){
    new ScrollMagic
        .Scene({
            triggerElement: spyEl,  // 보여짐 여부를 감시할 요소를 지정
            triggerHook: .8
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 해당 년도 연도 텍스트로 리턴
