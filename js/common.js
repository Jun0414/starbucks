
/**
 * 검색창 제어
 */
// 검색창 요소(.search) 찾기
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
// 검색창 요소를 클릭하면 실행
searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});
// input 요소에 focus 되면 실행
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});
// input 요소에 focus 해제(blur)되면 실행
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


/**
 * COPYRIGHT (올해가 몇 년도인지 계산)
 */
 const thisYear = document.querySelector('.this-year');
 thisYear.textContent = new Date().getFullYear(); // 2021