document.getElementById('toggle-aside').addEventListener('click', function(e) {
    e.preventDefault(); // 기본 링크 동작 방지
    
    const aside = document.getElementById('admin_aside');
    const main = document.getElementById('admin_service');
    const gate = document.getElementById('admin_gate'); // admin_gate 추가
    
    // aside가 숨겨져 있는지 여부에 따라 클래스 조정
    if (aside.classList.contains('hidden')) {
        aside.classList.remove('hidden'); // aside 보이기
        main.classList.remove('expanded'); // main 원래 너비로
        gate.classList.remove('expanded'); // gate도 원래 너비로
    } else {
        aside.classList.add('hidden'); // aside 숨기기
        main.classList.add('expanded'); // main 너비 늘리기
        gate.classList.add('expanded'); // gate도 너비 늘리기
    }
});

    // 모달 열고 닫는 기능 구현
    var modal = document.getElementById("orderModal");
       var btn = document.getElementById("openModalBtn");
       var span = document.getElementsByClassName("close")[0];
       // 버튼을 클릭하면 모달을 엽니다.
       btn.onclick = function() {
           modal.style.display = "block";
       }
       // 닫기 버튼을 클릭하면 모달을 닫습니다.
       span.onclick = function() {
           modal.style.display = "none";
       }
       // 모달 외부를 클릭하면 모달을 닫습니다.
       window.onclick = function(event) {
           if (event.target == modal) {
               modal.style.display = "none";
           }
       }

        // 모달과 버튼을 선택
        var modal2 = document.querySelector(".modal.orderModal"); // .modal.orderModal 클래스를 가진 첫 번째 모달 선택
        var btn2 = document.querySelectorAll(".openModalBtn2"); // 모든 모달 열기 버튼 선택
        var span2 = document.querySelector(".close2"); // 닫기 버튼
        var closeButton2 = document.querySelector(".closeButton"); // '닫기' 버튼 선택

        // 각 모달 열기 버튼에 대해 클릭 이벤트 추가
        btn2.forEach(function(button) {
            button.onclick = function() {
                modal2.style.display = "block"; // 모달 열기
            };
        });

        // 닫기 버튼 (×)을 클릭하면 모달을 닫기
        span2.onclick = function() {
            modal2.style.display = "none"; // 모달 닫기
        };

        // '닫기' 버튼을 클릭하면 모달을 닫기
        closeButton2.onclick = function() {
            modal2.style.display = "none"; // 모달 닫기
        };

        // 모달 외부를 클릭하면 모달을 닫기
        window.onclick = function(event) {
            if (event.target == modal2) {
                modal2.style.display = "none"; // 모달 닫기
            }
        };