"use strict";

(function () {
  var footer = document.getElementById('footer');
  footer.innerText = new Date().getFullYear() + ' © Afrianska. All rights reserved.';
  localStorage.setItem("footer", footer.innerText);
})();