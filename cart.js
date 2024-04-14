var cartIcons = document.querySelectorAll(".Cloudfee .price a");

//Sự kiện click giỏ hàng ở sản phẩm
cartIcons.forEach(function (icon) {
    icon.addEventListener("click", function (e) {
        e.preventDefault();

        var productContainer = icon.closest(".Cloudfee");

        var productName = productContainer.querySelector(".des span").textContent;
        var productPrice = productContainer.querySelector(".price span").textContent;

        //check getting info product
        console.log("Added");
        console.log(productName);
        console.log(productPrice);
    })
})
// Thêm sự kiện "click" cho biểu tượng giỏ hàng thanh toán
cartIcon.addEventListener('click', function (event) {
    event.preventDefault();

    if (cartTable) {
        if (cartTable.style.display === 'none') {
            cartTable.style.display = 'block';
        } else {
            cartTable.style.display = 'none';
        }
    } else {
        console.error("cartTable is not defined or is null");
    }
});

// Lấy thẻ tbody của bảng giỏ hàng và thẻ tổng giá
var tbody = document.querySelector('#cart-table tbody');
var totalPriceElement = document.querySelector('#total-price');

// Tạo một biến để lưu tổng giá
var totalPrice = 0;

// Lặp qua danh sách các nút mua hàng và thêm sự kiện "click" cho mỗi nút
cartIcons.forEach(function(icon) {
    icon.addEventListener('click', function(event) {
        event.preventDefault();

        // Lấy thông tin về sản phẩm từ phần tử cha của biểu tượng giỏ hàng
        var productContainer = icon.closest('.Cloudfee');
        var productName = productContainer.querySelector('.des span').innerText;
        var productPrice = parseFloat(productContainer.querySelector('.price span').innerText.replace('đ', '').replace('.', ''));

        // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
        var existingProductRow = tbody.querySelector('tr[data-product-name="' + productName + '"]');
        if (existingProductRow) {
            // Nếu sản phẩm đã tồn tại, tăng số lượng sản phẩm
            var quantityElement = existingProductRow.querySelector('.quantity');
            var quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
        } else {
            // Nếu sản phẩm chưa tồn tại, thêm mới vào bảng giỏ hàng
            var newRow = document.createElement('tr');
            newRow.dataset.productName = productName; // Lưu tên sản phẩm vào thuộc tính dataset để kiểm tra lại
            newRow.innerHTML = `
                <td>${productName}</td>
                <td class="quantity">1</td>
                <td>${productPrice}đ</td>

            `;
            tbody.appendChild(newRow);
        }

        // Cập nhật tổng giá
        totalPrice += productPrice;
        totalPriceElement.textContent = 'Tổng giá: ' + totalPrice + 'đ';
    });
}
)

