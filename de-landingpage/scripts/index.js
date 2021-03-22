"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Form = /*#__PURE__*/function () {
  function Form() {
    var _this = this;

    _classCallCheck(this, Form);

    this.create();
    document.addEventListener('click', function (event) {
      if (event.target.dataset.show) {
        _this.show();
      } else if (event.target.dataset.hide && _this.$form.classList.contains('active')) {
        _this.hide();
      } else if (event.target.dataset.send) {
        _this.validation();
      }
    });
  }

  _createClass(Form, [{
    key: "create",
    value: function create() {
      this.$form = document.createElement('form');
      this.$form.classList.add('js-form');
      this.$form.insertAdjacentHTML('afterbegin', "\n             <div class=\"js-form__overlay\" data-hide=\"true\">\n                <div class=\"js-form__window\">\n                    <div class=\"js-form__header\">\n                        <div class=\"js-form__header-title\">SEND US MESSAGE</div>\n                        <div class=\"js-form__header-close\" data-hide=\"true\">&times;</div>\n                    </div>\n                    <div class=\"js-form__body\">\n                        <div class=\"js-form__body-field\">\n                            <label for=\"name\" class=\"js-form__body-label\">Full Name</label>\n                            <input type=\"text\" id=\"name\" class=\"js-form__body-input\" placeholder=\"Your Name\">\n                            <span class=\"js-form__body-error error-name\">Enter your full name in English</span>\n                        </div>\n                        <div class=\"js-form__body-field\">\n                            <label for=\"email\" class=\"js-form__body-label\">Email</label>\n                            <input id=\"email\" type=\"text\" class=\"js-form__body-input\" placeholder=\"Your Email\">\n                            <span class=\"js-form__body-error error-email\">Enter your Email in the format mailname@domain.com</span>\n                        </div>\n                        <div class=\"js-form__body-field\">\n                            <label for=\"message\" class=\"js-form__body-label\">Message</label>\n                            <textarea id=\"message\" class=\"js-form__body-input\" placeholder=\"Your Message\"></textarea>\n                            <span class=\"js-form__body-error error-message\">Enter your text in English</span>\n                        </div>\n                    </div>\n                    <div class=\"js-form__btn-container\">\n                        <a href=\"#!\" data-send=\"true\" class=\"js-form__btn btn\">SUBMIT</a>\n                    </div>\n                </div>\n            </div>\n        ");
      document.body.appendChild(this.$form);
    }
  }, {
    key: "show",
    value: function show() {
      this.$form.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this2 = this;

      this.$form.classList.remove('active');
      document.body.style.overflow = 'auto';
      this.$form.classList.add('hide');
      setTimeout(function () {
        _this2.$form.classList.remove('hide');
      }, 500);
    }
  }, {
    key: "validation",
    value: function validation() {
      var nameReg = /[a-zA-Z]+/;
      var emailReg = /[.+@.+\..+/i]/;
      var textReg = /[a-zA-Z]+$/;
      var name = document.querySelector('#name');
      var email = document.querySelector('#email');
      var message = document.querySelector('#message');
      var errorName = document.querySelector('.error-name');
      var errorEmail = document.querySelector('.error-email');
      var errorMessage = document.querySelector('.error-message');

      if (!nameReg.test(name.value)) {
        name.classList.add('invalid');
        errorName.style.display = 'block';
      } else {
        name.classList.remove('invalid');
        errorName.style.display = 'none';
      }

      if (!emailReg.test(email.value)) {
        email.classList.add('invalid');
        errorEmail.style.display = 'block';
      } else {
        email.classList.remove('invalid');
        errorEmail.style.display = 'none';
      }

      if (!textReg.test(message.value)) {
        message.classList.add('invalid');
        errorMessage.style.display = 'block';
      } else {
        message.classList.remove('invalid');
        errorMessage.style.display = 'none';
      }

      if (!name.classList.contains('invalid') && !email.classList.contains('invalid') && !message.classList.remove('invalid')) {
        this.send();
      }
    }
  }, {
    key: "send",
    value: function send() {
      var _this3 = this;

      this.hide();
      setTimeout(function () {
        _this3.$success = document.createElement('div');

        _this3.$success.classList.add('js-form__success');

        _this3.$success.insertAdjacentHTML('afterbegin', "\n            <span class=\"js-form__success-message\">Your message successfully sent!</span>");

        document.body.appendChild(_this3.$success);
      }, 500);
      setTimeout(function () {
        _this3.$success.style.display = 'none';
      }, 2000);
    }
  }]);

  return Form;
}();

var contactForm = new Form();

(function () {
  var footer = document.getElementById('footer');
  footer.innerText = new Date().getFullYear() + ' © Afrianska. All rights reserved.';
  localStorage.setItem("footer", footer.innerText);
})();