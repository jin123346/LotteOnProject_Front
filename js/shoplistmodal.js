// 모달 열고 닫는 기능 구현
var modal = document.getElementById("productModal");
var btn = document.getElementById("openModalBtn");
var span = document.getElementsByClassName("close")[0];
var order_modal; // 주문 모달을 나중에 정의하기 위해 초기화
var order_btn; // 주문 버튼을 나중에 정의하기 위해 초기화

// 버튼을 클릭하면 기본 모달을 엽니다.
btn.onclick = function() {
    modal.style.display = "block";
}

// 닫기 버튼을 클릭하면 기본 모달을 닫습니다.
span.onclick = function() {
    modal.style.display = "none";
}

// 모달 외부를 클릭하면 모달을 닫습니다.
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    } else if (order_modal && event.target === order_modal) {
        order_modal.style.display = "none";
    }
}

// 주문 상세 모달 로드
fetch('../../include/admin-order-modal/order-modal.html')
    .then(resp => resp.text())
    .then(data => {
        document.getElementById('order-modal-div').innerHTML = data;

        // HTML이 로드된 후 모달 버튼 클릭 이벤트 설정
        order_btn = document.getElementById('order-modal-btn');
        order_modal = document.querySelector('.modal-section'); // .modal-section 선택
        var close_btn = document.getElementsByClassName('order-close')[0]; // "X" 버튼 선택

        // 주문 상세 모달 열기
        order_btn.onclick = function () {
            order_modal.style.display = "flex"; // 중앙 정렬을 위해 flex 사용
        };

        // "X" 버튼 클릭 시 모달 닫기
        close_btn.onclick = function () {
            order_modal.style.display = "none"; // 모달 닫기
        };
    })
    .catch(err => {
        console.error("Error loading modal:", err);
    });
