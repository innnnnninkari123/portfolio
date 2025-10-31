document.querySelectorAll('.gnb .has-sub > a').forEach(menu => {
    menu.addEventListener('click', function(e){
        e.preventDefault(); // 링크 이동 방지
        const parentLi = this.parentElement;
        parentLi.classList.toggle('active'); // active 토글
    });
});

// 다른 영역 클릭 시 드롭다운 닫기
document.addEventListener('click', function(e){
    document.querySelectorAll('.gnb .has-sub').forEach(li => {
        if(!li.contains(e.target)){
            li.classList.remove('active');
        }
    });
});