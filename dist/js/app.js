// $(".navbar-nav .nav-link").on("click", function(){
//   $(".navbar-nav").find(".active").removeClass("active");
//   $(this).addClass("active");
//   console.log(this);
// });

//carousel interval/ Don't Cycle when not visible
$(".carousel").carousel({
  interval: 7000,
});

$(".carousel").carousel("nextWhenVisible");

//Toggle + - icons on show hide of collapse element
$(".collapse")
  .on("show.bs.collapse", function () {
    $(this)
      .prev(".card-header")
      .find(".fa")
      .removeClass("fa-plus")
      .addClass("fa-minus");
  })
  .on("hide.bs.collapse", function () {
    $(this)
      .prev(".card-header")
      .find(".fa")
      .removeClass("fa-minus")
      .addClass("fa-plus");
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

//***FORM LOGIC

const showOrhide = (radioBtn, divToShow) => {
  radioBtn.forEach((btn) => {
    btn.addEventListener("change", (e) => {
      if (e.target.value === "yes" && e.target.checked) {
        divToShow.classList.remove("hide");
        console.log("clicked yes");
      } else {
        divToShow.classList.add("hide");
        console.log("not yes");
      }
    });
  });
};

// If owner
const radBtnsOwner = document.querySelectorAll('input[name="owner"]');
const lengthOwned = document.querySelector("#lengthOwned");

showOrhide(radBtnsOwner, lengthOwned);

//If Delinquent Taxes
const radBtnsTaxes = document.querySelectorAll('input[name="owedTax"]');
const amountTaxes = document.querySelector("#taxOwed");

showOrhide(radBtnsTaxes, amountTaxes);

//If Mortgage or Lien
const radBtnsLiens = document.querySelectorAll('input[name="liens"]');
const amountLiens = document.querySelector("#lienOwed");

showOrhide(radBtnsLiens, amountLiens);

//Change active link on scroll
const navLinks = document.querySelectorAll("a.nav-link");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";
  //console.log(scrollY)
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    //console.log(sectionTop)
    if (scrollY >= sectionTop - sectionHeight / 5) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach((a) => {
    a.classList.remove("active");
    if (a.classList.contains(current)) {
      a.classList.add("active");
    }
  });
});
