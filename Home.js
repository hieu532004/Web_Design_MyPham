class PromoScroll {
  constructor(containerSelector) {
    this.container = document.querySelector(containerSelector);
    this.isDown = false;
    this.startX = 0;
    this.scrollLeft = 0;

    console.log(this.container)

    // Gán sự kiện
    this.container.addEventListener('mousedown', (e) => this.onMouseDown(e));
    this.container.addEventListener('mouseleave', () => this.onMouseLeave());
    this.container.addEventListener('mouseup', () => this.onMouseUp());
    this.container.addEventListener('mousemove', (e) => this.onMouseMove(e));
  }

  onMouseDown(e) {
    this.isDown = true;
    this.startX = e.pageX - this.container.offsetLeft;
    this.scrollLeft = this.container.scrollLeft;
    this.container.style.cursor = 'grabbing'; // Thay đổi biểu tượng chuột
  }

  onMouseLeave() {
    this.isDown = false;
    this.container.style.cursor = 'grab';
  }

  onMouseUp() {
    this.isDown = false;
    this.container.style.cursor = 'grab';
  }

  onMouseMove(e) {
    if (!this.isDown) return;
    e.preventDefault();
    const x = e.pageX - this.container.offsetLeft;
    const walk = (x - this.startX) * 1; // Tăng tốc độ kéo
    this.container.scrollLeft = this.scrollLeft - walk;
  }
}

// Khởi tạo chức năng kéo cho promo-container
new PromoScroll('.promo-container');


const arr = [
{
    img:'https://mypham20.mauthemewp.com/wp-content/uploads/2022/11/kem-chong-nang-cho-be-pororo-sun-cream-50ml-mau-moi.jpg',
    name: 'Kem chống nắng cho bé Pororo Sun Cream 50ml mẫu mới',
    price:'105.000₫'
},
{
    img:'https://mypham20.mauthemewp.com/wp-content/uploads/2022/11/dung-dich-ve-sinh-phu-nu-ohui-cao-cap-300x300.jpg',
    name: 'Dung dịch vệ sinh phụ nữ OHUI cao cấp',
    price:'325.000₫'
},
{
    img:'https://mypham20.mauthemewp.com/wp-content/uploads/2022/11/set-duong-ohui-prime-advancer-xanh-chong-lao-hoa-da-cang-bong-da-cao-cap-300x300.jpg',
    name: 'Set dưỡng OHUI PRIME ADVANCER xanh',
    price:'1.655.000₫'
},
{
    img:'https://mypham20.mauthemewp.com/wp-content/uploads/2022/11/set-ohui-aqua-miracle-xanh-cap-nuoc-kiem-dau-chong-lao-hoa-300x300.jpg',
    name: 'Set OHUI AQUA MIRACLE xanh cấp nước kiềm dầu',
    price:'1.150.000₫'
},
{
    img:'https://mypham20.mauthemewp.com/wp-content/uploads/2022/11/kem-danh-rang-tre-em-lion-kids-safe-han-quoc-co-the-nuot-duoc-90g-300x300.jpg',
    name: 'Kem đánh răng trẻ em Lion Kids Safe Hàn Quốc có thể nuốt được',
    price:'80.000₫'
},
{
    img:'https://mypham20.mauthemewp.com/wp-content/uploads/2022/11/tay-giun-zelcom-so-1-han-quoc-300x300.jpg',
    name: 'Tẩy giun Zelcom số 1 Hàn Quốc rất tốt cho bé',
    price:'80.000₫'
},
{
    img:'https://mypham20.mauthemewp.com/wp-content/uploads/2022/11/thach-hong-sam-sanga-kid-korean-red-ginseng-jelly-cho-be-300x300.jpg',
    name: 'Kem chống nắng cho bé Pororo Sun Cream 50ml mẫu mới',
    price:'150.000đ'
},
{
    img:'https://mypham20.mauthemewp.com/wp-content/uploads/2022/11/collagen-cherry-thesem-han-quoc-dang-bot-hop-30-goi-300x300.jpg',
    name: 'Collagen Cherry TheSem Hàn Quốc dạng bột (Hộp 30 gói)',
    price:'139.000₫'
},


];
const container = document.querySelector('.listProduct .wapper');

console.log(container);


const list = arr
.map(item =>{
    return`
   <div class="product">
        <div class="productImg">
            <img src="${item.img}"
                alt="">
            <div class="cart">
                <i class="fa-solid fa-cart-shopping"></i>
            </div>
        </div>
        <div class="textProduct">
            <h3>${item.name}</h3>
            <span>${item.price}</span>
        </div>
    </div>
    `;
})
.join('')


container.innerHTML = list;


