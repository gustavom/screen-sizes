(function(window, document) {
  "use strict";

  var $form = document.querySelector(".project-form form");
  var $urlField = document.querySelector(".project-form form input");
  var $ScreenFrames = document.querySelectorAll(".screens-container iframe");

  $form.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log($urlField.value);
    Array.prototype.forEach.call($ScreenFrames, function(item) {
      item.setAttribute("src", "http://www.google.com");
    });
  });
})(window, document);
