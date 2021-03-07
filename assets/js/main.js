//共通パーツ
$(function() {
 $("#side").load("/product-blog/inc/side.html");
 $("#footer").load("/product-blog/inc/footer.html");
});


//ハンバーガーメニュー
document.getElementById("l-hmb").onclick = function(){
  document.querySelector('html').classList.toggle('is-nav-active');
}
