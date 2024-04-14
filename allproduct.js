var cartIcons = document.querySelectorAll('.fa-solid.fa-cart-shopping');
cartIcons.forEach(function (icon) {
    icon.addEventListener('click', function (event) {
        event.preventDefault();

        var productContainer = icon.closest(".Cloudfee");
        var productName = productContainer.querySelector(".des span").innerHTML;
        var productPrice = productContainer.querySelector(".price span").innerHTML;

        console.log('Đã thêm sản phẩm vào giỏ hàng:');
        console.log('Tên sản phẩm:', productName);
        console.log('Giá sản phẩm:', productPrice);
    });
});

var cartTable = document.getElementById('cart-table');
var cartIcon = document.getElementById('cart-icon');

// Thêm sự kiện "click" cho biểu tượng giỏ hàng
cartIcon.addEventListener('click', function (event) {
    // Ngăn chặn hành vi mặc định của biểu tượng giỏ hàng
    event.preventDefault();

    // window.open("cart.html");

    if (cartTable) {
        if (cartTable.style.display === 'none') {
            cartTable.style.display = 'block';
        } else {
            cartTable.style.display = 'none';
        }
    } else {
        console.error("no table");
    }
});

// Lấy thẻ tbody của bảng giỏ hàng và thẻ tổng giá
var tbody = document.querySelector('#cart-table tbody');
var totalPriceElement = document.querySelector('#total-price');

// Tạo một biến để lưu tổng giá
var totalPrice = 0;

// Lặp qua danh sách các nút mua hàng và thêm sự kiện "click" cho mỗi nút
cartIcons.forEach(function (icon) {
    icon.addEventListener('click', function (event) {
        event.preventDefault();

        // Lấy thông tin về sản phẩm từ phần tử cha của biểu tượng giỏ hàng
        var productContainer = icon.closest('.Cloudfee');
        var productName = productContainer.querySelector('.des span').innerHTML;
        var productPrice = parseFloat(productContainer.querySelector('.price span').innerText.replace('đ', '').replace('.', ''));

        var newRow = document.createElement('tr');
        newRow.dataset.productName = productName; // Lưu tên sản phẩm vào thuộc tính dataset để kiểm tra lại
        newRow.innerHTML = `
                <td>${productName}</td>
                <td class="quantity">1</td>
                <td>${productPrice}đ</td>

            `;
        tbody.appendChild(newRow);
    
        totalPrice += productPrice;
        totalPriceElement.textContent = 'Tổng giá: ' + totalPrice + 'đ';
    });
});