import Typed from 'typed.js';

function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["Check out this cool banner", "Le Wagon's Awesome Cocktails"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
