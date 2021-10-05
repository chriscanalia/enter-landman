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

//Radio buttons logic

const lienRadios = document.querySelectorAll('input[type=radio][name="liens"]');
lienRadios.forEach(lienRadio => lienRadio.addEventListener('change', function() {
  if (lienRadio.value == 'yes' && lienRadio.checked) {
    document.querySelector('.liens-owed').style.display = 'block';
  } else {
    document.querySelector('.liens-owed').style.display = 'none';
  }
}));

