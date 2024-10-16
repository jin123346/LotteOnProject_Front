   // 모달 열고 닫는 기능 구현
   var modal = document.getElementById("productModal");
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