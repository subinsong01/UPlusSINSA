document.addEventListener("DOMContentLoaded", function() {
    let list = document.querySelector('.list');
    let items = document.querySelectorAll('.item');
    let dots = document.querySelectorAll('.dot');
    let prev = document.getElementById('prev');
    let next = document.getElementById('next');

    let active = 0;
    let lengthItems = items.length;

    next.onclick = function() {
        if (active < lengthItems - 1) { // 다음 이미지가 있다면
            active++;
        } else {
            active = 0; // 마지막 이미지 후 첫 번째 이미지로 돌아감
        }
        reloadSlider();
    };

    prev.onclick = function() {
        if (active > 0) {
            active--;
        } else {
            active = lengthItems - 1; // 첫 번째 이미지에서 이전 버튼을 누르면 마지막 이미지로 이동
        }
        reloadSlider();
    };

    function reloadSlider() {
        let checkLeft = items[active].offsetLeft;
        list.style.transform = `translateX(-${checkLeft}px)`; // 슬라이드 위치 조정

        dots.forEach(dot => dot.classList.remove('active')); // 모든 점의 활성화 상태 제거
        dots[active].classList.add('active'); // 현재 활성화된 슬라이드에 대한 점 활성화
    }

    reloadSlider(); // 초기 슬라이더 로드
});
