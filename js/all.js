const connect = document.querySelector('.connect');
const title = document.querySelector('.title');
const banner = document.querySelector('.banner');
const text = document.querySelector('.text');
const introduce = document.querySelector('.introduce');
const compare = document.querySelector('.compare');
const message = document.querySelector('.message');
const footer = document.querySelector('.footer');

connect.innerHTML = `
<a href='#' class='twitter'><img src="images/twitterIcon.png" alt="twitchicon">追蹤我們</a>
<a href='#' class='fb'><img src="images/facebookIcon.png" alt="fbicon">粉絲團</a>
`;

title.innerHTML = `
<h1>Hex School</h1>
<ul class='first'>
  <li style="width: 50px;"><a href='#'>首頁</a></li>
  <li class='second'><a href='#'>產品介紹</a>
   <ul>
     <li><a href='#'>Vue</a></li>
     <li><a href='#'>Node</a></li>
     <li><a href='#'>React</a></li>
   </ul>
  </li>
  <li class='second'><a href='#'>關於我們</a>
   <ul>
     <li><a href='#'>關於六角</a></li>
     <li><a href='#'>聯絡我們</a></li>
   </ul>
  </li>
</ul>
`

$(document).ready(function(e){
    $('.second').click(function(e){
      e.stopPropagation();
      $(this).find('li').slideToggle().parent().parent().siblings().find('li').slideUp()
      $(document).one("click", function(){
        $(".second li").hide();
    });
    });

    $(window).scroll(function(){
      if(document.documentElement.scrollTop > 200){
        $('.gotop').show()
      }
      else(
        $('.gotop').hide()
      )
    });

    $('.gotop').click(function(e){
      e.preventDefault();
      $('html,body').animate({scrollTop:0},500)
    })
})


banner.innerHTML = `
<!-- Slider main container -->
<div class="swiper">
  <!-- Additional required wrapper -->
  <div class="swiper-wrapper">
    <!-- Slides -->
    <div class="swiper-slide"><img src="images/banner.png" alt=""></div>
    <div class="swiper-slide"><img src="images/bg_index.png" alt=""></div>
    <div class="swiper-slide"><img src="images/bg_course.png" alt=""></div>
    <div class="swiper-slide"><img src="images/bg_QA.png" alt=""></div>
  </div>
  <!-- If we need pagination -->
  <div class="swiper-pagination"></div>

  <!-- If we need scrollbar -->
  <div class="swiper-scrollbar"></div>
</div>
`

const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,},
      effect: 'coverflow',
      effect: 'creative',
      creativeEffect: {
        prev: {
          // will set `translateZ(-400px)` on previous slides
          translate: [000, 0, -0],
        },
        next: {
          // will set `translateX(100%)` on next slides
          translate: ['100%', 0, 0],
        },
      },
      
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    
  });

text.innerHTML = `
<h2>六角學院<br>讓您奠定良好的前端基礎</h2>
`

introduce.innerHTML =`
<ul>
  <li>
  <a href="images/html.png" data-lightbox="image-1"><img src="images/html.png" alt="htmllogo"></a>
    <h3>Html 5 基礎教學</h3>
    <p>主流前端網站設計的基礎就在六角學院，在這裡不在是填鴨式教學，而是透過實際的範例，瞭解正確的網站開發流程，講師均具有業界開發經驗，讓學員學習業界主流的開發方法。</p>
  </li>
  <li>
    <a href="images/rwd.png" data-lightbox="image-2"><img src="images/rwd.png" alt="rwdlogo" class='se'></a>
    <h3>響應式網站設計</h3>
    <p>響應式網站設計 (Responsive web design)，目前大多使用者均是以手機瀏覽的情況下，響應式網站已經是必備的。六角學院將會提供業界響應式開發方法，讓學生瞭解行動版開發技巧。</p>
  </li>
  <li>
    <a href="images/jQuery.png" data-lightbox="image-3"><img src="images/jQuery.png" alt="jquerylogo" class='th'></a>
    <h3>jQuery 實戰教學</h3>
    <p>本課程有以下特色
      <ol>
        <li>瞭解變數的使用方法</li>
        <li>學習並操作 DOM</li>
        <li>學習基本數學運算方法</li>
        <li>套件的操作及運用</li>
      </ol>
    </p>
   </li>
</ul>
`

lightbox.option({
  'resizeDuration': 200,
  'wrapAround': false,
  'showImageNumberLabel': false,
  'positionFromTop': 350,
})

compare.innerHTML =`
<h4>線上及實體課程的差異</h4>
<table id='tdid'>
    <tr>
        <th>項目</th>
        <th>Hex School 線上課程</th>
        <th>一般線上課程</th>
        <th>實體課程</th>
    </tr>
    <tr>
        <td>費用</td>
        <td class='tdcolor'>較低</td>
        <td>較低</td>
        <td>較高</td>
    </tr>
    <tr>
        <td>學習效果</td>
        <td>一般</td>
        <td class='tdcolor'>較低</td>
        <td class='tdcolor'>很好</td>
    </tr>
    <tr>
        <td>Code review</td>
        <td class='tdcolor'>有</td>
        <td>無</td>
        <td>不一定</td>
    </tr>
    <tr>
        <td>課程更新進度</td>
        <td class='tdcolor'>普通</td>
        <td class='tdcolor'>普通</td>
        <td>較慢</td>
    </tr>
    <tr>
        <td>多次複習</td>
        <td class='tdcolor'>可</td>
        <td class='tdcolor'>可</td>
        <td>不可</td>
    </tr>
    <tr>
        <td>字幕</td>
        <td class='tdcolor'>有</td>
        <td>不一定</td>
        <td>板書</td>
    </tr>
</table>
`

message.innerHTML =`
<p>對我們課程有興趣嗎？<br>歡迎留下您的資料</p>
<form action="">
  <div class="left">
  </div>

  <div class="right">
    <label for="name" class='name'>姓名：</label><br>
    <label for="phone" class='phone'>電話：</label><br>
    <label for="mail" class='mail'>信箱：</label><br>
    <button class='button'>送出</button>
  </div>
</form>
`
document.addEventListener('DOMContentLoaded',function(){
  const left = document.querySelector('.left');
  const areastr = document.createElement('textarea');
  areastr.textContent = '';
  areastr.id = 'textarea';
  areastr.autocomplete = 'off';
  left.appendChild(areastr);
  
  const namestr = document.createElement('input');
  const name = document.querySelector('.name');
  namestr.autocomplete = 'off'; 
  namestr.type = 'text';
  namestr.id = 'name';
  namestr.placeholder = '請輸入名字';
  name.appendChild(namestr);

  const phonestr = document.createElement('input');
  const phone = document.querySelector('.phone');
  phonestr.autocomplete = 'off'; 
  phonestr.type = 'text';
  phonestr.id = 'phone';
  phonestr.placeholder = '請輸入電話';
  phone.appendChild(phonestr);

  const mailstr = document.createElement('input');
  const mail = document.querySelector('.mail');
  mailstr.autocomplete = 'off'; 
  mailstr.type = 'text';
  mailstr.id = 'mail';
  mailstr.placeholder = '請輸入信箱';
  mail.appendChild(mailstr);
},false);

const button = document.querySelector('.button');

button.addEventListener('click',function(e){
  e.preventDefault();
  let data = {};
  let textarea = document.getElementById('textarea');
  let name = document.getElementById('name');
  let phone = document.getElementById('phone');
  let mail = document.getElementById('mail');

  data.textarea = textarea.value;
  data.name = name.value;
  data.phone = phone.value;
  data.mail = mail.value;
  textarea.value = '';
  name.value = '';
  phone.value = '';
  mail.value = '';
},false);

footer.innerHTML = `
<img src="images/footerLogo.png" alt="footerlogo">
<div class="information">
  <p>聯絡我們：<span>hexschool@gmailcom</span></p>
  <p>電話：<span>0999123456</span></p>
</div>
`
