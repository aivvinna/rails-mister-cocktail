import Typed from 'typed.js';
import swal from 'sweetalert';

function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["Check out this cool banner", "Le Wagon's Awesome Cocktails"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };

function bindSweetAlertButtonWarningCocktail() {
  const swalButton = document.getElementById('sweet-alert-warning-cocktail');
  if (swalButton) { // protect other pages
    swalButton.addEventListener('click', () => {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this cocktail!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Your cocktail has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your cocktail is safe!");
        }
      });
    });
  }
}

export { bindSweetAlertButtonWarningCocktail };

function bindSweetAlertButtonWarningDose() {
  const swalButton = document.getElementById('sweet-alert-warning-dose');
  if (swalButton) { // protect other pages
    swalButton.addEventListener('click', () => {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this dose!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Your dose has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your dose is safe!");
        }
      });
    });
  }
}

export { bindSweetAlertButtonWarningDose };
