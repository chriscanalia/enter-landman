$(".navbar-nav .nav-link").on("click", function(){
  $(".navbar-nav").find(".active").removeClass("active");
  $(this).addClass("active");
  console.log(this);
});

//carousel interval/ Don't Cycle when not visible
  $(".carousel").carousel({ 
    interval: 10000 
    });

  $(".carousel").carousel('nextWhenVisible');

  //Toggle + - icons on show hide of collapse element
  $(".collapse").on('show.bs.collapse', function(){
    $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
}).on('hide.bs.collapse', function(){
    $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
});
/*
const buttons = document.querySelectorAll('.btn-faqs');

for(let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    for(let j = 0; j < buttons.length; j++) {
      buttons[j].style.border = 'none';
    }
    this.style.border = '4px solid #fff';
  })
};
*/