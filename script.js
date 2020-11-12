$(function(){
     $('#puntos').find('a[href*=#]').click(function() {

     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
         && location.hostname == this.hostname) {

             var $target = $(this.hash);

             $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

             if ($target.length) {

                 var targetOffset = $target.offset().top;

                 $('html,body').animate({scrollTop: targetOffset}, 500);

                 return true;
            }
       }
   });
    $('#inicio').find('a[href*=#]').click(function() {

     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
         && location.hostname == this.hostname) {

             var $target = $(this.hash);

             $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

             if ($target.length) {

                 var targetOffset = $target.offset().top;

                 $('html,body').animate({scrollTop: targetOffset}, 1000);

                 return true;
            }
       }
   });
});


function p1(){

    $(".punto").css({
       "background":"#B6F2EA"
   });
   $(".p1").css({
       "background":"#1AE8E4"
   });
}
function p2(){
       $(".punto").css({
       "background":"#B6F2EA"
   });
   $(".p2").css({
       "background":"#1AE8E4"
   });
}
function p3(){
     $(".punto").css({
       "background":"#B6F2EA"
   });
   $(".p3").css({
       "background":"#1AE8E4"
   });
}
function p4(){
     $(".punto").css({
       "background":"#B6F2EA"
   });
   $(".p4").css({
       "background":"#1AE8E4"
   });
}

function irAProyecto(e){
    window.localStorage.setItem("numProyecto", e);
    window.location.href = "proyectos.html";
}