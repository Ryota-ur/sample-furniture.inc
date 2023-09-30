
jQuery('.drawer__icon').on('click',function(e){
e.preventDefault();

jQuery('.drawer__icon').toggleClass('is-active');
jQuery('.drawer__icon--bar1').toggleClass('is-active');
jQuery('.drawer__icon--bar3').toggleClass('is-active');
jQuery('.drawer__content').toggleClass('is-active');
jQuery('.drawer__background').toggleClass('is-active');

return false;

});

jQuery('.drawer__background').on('click',function(e){
e.preventDefault();

jQuery('.drawer__icon').removeClass('is-active');
jQuery('.drawer__icon--bar1').removeClass('is-active');
jQuery('.drawer__icon--bar3').removeClass('is-active');
jQuery('.drawer__content').removeClass('is-active');
jQuery('.drawer__background').removeClass('is-active');

return false;

});

jQuery(function() {
    jQuery('.header__nav--item-sp').on('click', function() {
        jQuery(this).children('.header__nav--lists-sp').slideToggle();
    });
});


jQuery(function() {
	jQuery('.introduction__use--body').matchHeight();
});




jQuery('.faq__box--q').on('click',function(){
jQuery(this).next().slideToggle();

jQuery(this).children('.faq__box--icon').toggleClass('is-open');
})


// スクロール検知
jQuery(window).on("scroll", function() {

// トップから300px以上スクロールしたら
if (300 < jQuery(this).scrollTop()) {

// is-showクラスをつける
jQuery('.to-top-btn').addClass( 'is-show' );
} else {

// 300pxを下回ったらis-showクラスを削除
jQuery('.to-top-btn').removeClass( 'is-show' );
}
});

jQuery('a[href^="#"]').on('click',function(){

var header = jQuery('.header').innerHeight();
var id= jQuery(this).attr('href');
var position = 0;
if ( id != '#'){
position = jQuery(id).offset().top - header;
}
jQuery('html,body').animate({
scrollTop:position
} ,
300);
});





