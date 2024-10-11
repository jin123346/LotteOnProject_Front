document.addEventListener('DOMContentLoaded', function () {
    // Script for toggling the category menu
    const viewAllButton = document.getElementById('viewAllButton');
    const categoryMenu = document.querySelector('.categoryMenu');
    const header = document.querySelector('.category.on');

    viewAllButton.addEventListener('click', function () {
        // Toggle the visibility of the menu and the button bar transformation
        header.classList.toggle('menuVisible');
    });

    document.getElementById('decrease').addEventListener('click', function () {
        let quantity = document.getElementById('quantity');
        if (quantity.value > 1) {
            quantity.value = parseInt(quantity.value) - 1;
        }
    });

    document.getElementById('increase').addEventListener('click', function () {
        let quantity = document.getElementById('quantity');
        quantity.value = parseInt(quantity.value) + 1;
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            document.querySelectorAll('h3 span').forEach(el => el.classList.remove('active'));
            this.parentElement.classList.add('active');
        });
    });

    const reviews = document.querySelectorAll('.p-review');
    const qnas = document.querySelectorAll('.p-qna');
    const moreqnaBtn = document.getElementById('moreQnaBtn');
    const moreReviewsBtn = document.getElementById('moreReviewsBtn');
    const pagination = document.getElementById('reviews-pagination');
    const pagination2 = document.getElementById('qna-pagination');
    let isExpanded = false;  // 더보기 상태를 저장하는 변수

    // 리뷰 더보기 버튼 클릭 시
    moreReviewsBtn.addEventListener('click', function (e) {
        e.preventDefault();
        if (!isExpanded) {
            // 더보기를 눌렀을 때: 3개 이상의 리뷰 표시 + 페이지네이션 활성화
            isExpanded = true;
            reviews.forEach((review, index) => {
                if (index >= 3) {
                    review.classList.add('show');
                    pagination.classList.add('show');
                }
            });
            moreReviewsBtn.textContent = '더보기 닫기';  // 더보기 버튼 텍스트 변경
        } else {
            // 더보기 닫기를 눌렀을 때: 첫 3개의 리뷰만 표시 + 페이지네이션 숨김
            isExpanded = false;
            reviews.forEach((review, index) => {
                review.classList.remove('show');
            });
            pagination.classList.remove('show');
            moreReviewsBtn.textContent = '더보기';  // 더보기 버튼 텍스트 복구
        }
    });

    // qna 더보기 버튼 클릭 시
    moreqnaBtn.addEventListener('click', function (e) {
        e.preventDefault();
        if (!isExpanded) {
            // 더보기를 눌렀을 때: 3개 이상의 qna 표시 + 페이지네이션 활성화
            isExpanded = true;
            qnas.forEach((qna, index) => {
                qna.classList.add('show');
                pagination2.classList.add('show');
            });
            moreqnaBtn.textContent = '더보기 닫기';  // 더보기 버튼 텍스트 변경
        } else {
            // 더보기 닫기를 눌렀을 때: qna 숨김 + 페이지네이션 숨김
            isExpanded = false;
            qnas.forEach((qna, index) => {
                qna.classList.remove('show');
            });
            pagination2.classList.remove('show');
            moreqnaBtn.textContent = '더보기';  // 더보기 버튼 텍스트 복구
        }
    });

    // Image carousel functionality
    const reviewImages = document.getElementById('reviewImages');
    const leftArrow = document.getElementById('leftArrow');
    const rightArrow = document.getElementById('rightArrow');
    let currentPosition = 0;
    const imageWidth = 150; // Width of each image (including margins)
    const visibleImages = 3; // Number of images to show at once
    const maxPosition = reviewImages.children.length - visibleImages; // Maximum scroll position

    function updateImagePosition() {
        reviewImages.style.transform = `translateX(${-currentPosition * imageWidth}px)`;
    }

    // Move left
    leftArrow.addEventListener('click', function () {
        if (currentPosition > 0) {
            currentPosition--;
            updateImagePosition();
        }
    });

    // Move right
    rightArrow.addEventListener('click', function () {
        if (currentPosition < maxPosition) {
            currentPosition++;
            updateImagePosition();
        }
    });

    // Submenu functionality for lnb-items
    const lnbItems = document.querySelectorAll('.lnb-item > a');

    lnbItems.forEach(function (lnbItem) {
        lnbItem.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor behavior

            // Remove 'open' and 'active' from all lnb-items
            lnbItems.forEach(item => {
                const parent = item.parentElement;
                const subMenu = parent.querySelector('.lnb-sub-menu');

                // Close the sub-menu of any other lnb-items
                if (parent !== this.parentElement) {
                    parent.classList.remove('open');
                    if (subMenu) {
                        subMenu.classList.add('hidden');
                    }
                }

                // Remove active class from other links
                item.classList.remove('active');

                // Remove active from all li inside sub-menus
                if (subMenu) {
                    subMenu.querySelectorAll('li').forEach(li => {
                        li.classList.remove('active');
                    });
                }
            });

            // Toggle the current item
            const parentItem = this.parentElement;
            const subMenu = parentItem.querySelector('.lnb-sub-menu');
            parentItem.classList.toggle('open');
            if (subMenu) {
                subMenu.classList.toggle('hidden');

                // Add 'active' class to the clicked sub-menu's li items (if desired)
                subMenu.querySelectorAll('li').forEach(li => {
                    li.addEventListener('click', function () {
                        // Remove 'active' from all other li in the sub-menu
                        subMenu.querySelectorAll('li').forEach(el => el.classList.remove('active'));
                        // Add 'active' to the clicked li
                        this.classList.add('active');
                    });
                });
            }
            // Add active class to the clicked link
            this.classList.add('active');
        });
    });
});
