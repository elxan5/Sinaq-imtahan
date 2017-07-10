/**/
function mainScrollDown(e) {
    $('html, body').stop().animate({
        scrollTop: $(".panelRegister").offset().top
    }, 800);
};

function mainScrollTop() 
{    $('html, body').stop().animate({ scrollTop: 0 }, 'slow');

};
/**/

var imgArray=["img1.jpg","img2.jpg","img3.jpg"];

 $(document).ready(function() {
       $(".tlt").textillate({ in : {
            effect: 'rollIn',
            delay: 25
        },
        out: {
            effect: 'rollOut',
            delay: 1000,
            sync: true
        },
        loop: true
    });
   $(".arrow").click(mainScrollDown);

   // else{
   //      $(window).scroll(mainScrollTop)

   
    $('.scrollMain').click(mainScrollTop);
   //  if ($(window).height()!=$(".content").height()) {
   //   $(window).scroll(mainScrollDown)
   // }

});
