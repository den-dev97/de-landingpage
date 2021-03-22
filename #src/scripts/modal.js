class Form {
    constructor() {
        this.create();
        document.addEventListener('click', event => {
            if (event.target.dataset.show) {
                this.show()
            } else if (event.target.dataset.hide && this.$form.classList.contains('active')) {
                this.hide()
            } else if (event.target.dataset.send) {
                this.validation()
            }
        })
    }

    create() {
        this.$form = document.createElement('form')
        this.$form.classList.add('js-form')
        this.$form.insertAdjacentHTML('afterbegin', `
             <div class="js-form__overlay" data-hide="true">
                <div class="js-form__window">
                    <div class="js-form__header">
                        <div class="js-form__header-title">SEND US MESSAGE</div>
                        <div class="js-form__header-close" data-hide="true">&times;</div>
                    </div>
                    <div class="js-form__body">
                        <div class="js-form__body-field">
                            <label for="name" class="js-form__body-label">Full Name</label>
                            <input type="text" id="name" class="js-form__body-input" placeholder="Your Name">
                            <span class="js-form__body-error error-name">Enter your full name in English</span>
                        </div>
                        <div class="js-form__body-field">
                            <label for="email" class="js-form__body-label">Email</label>
                            <input id="email" type="text" class="js-form__body-input" placeholder="Your Email">
                            <span class="js-form__body-error error-email">Enter your Email in the format mailname@domain.com</span>
                        </div>
                        <div class="js-form__body-field">
                            <label for="message" class="js-form__body-label">Message</label>
                            <textarea id="message" class="js-form__body-input" placeholder="Your Message"></textarea>
                            <span class="js-form__body-error error-message">Enter your text in English</span>
                        </div>
                    </div>
                    <div class="js-form__btn-container">
                        <a href="#!" data-send="true" class="js-form__btn btn">SUBMIT</a>
                    </div>
                </div>
            </div>
        `);
        document.body.appendChild(this.$form);
    }

    show() {
        this.$form.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    hide() {
        this.$form.classList.remove('active')
        document.body.style.overflow = 'auto';
        this.$form.classList.add('hide')
        setTimeout(() => {
            this.$form.classList.remove('hide')
        }, 500)
    }

    validation() {
        const nameReg      = /[a-zA-Z]+/;
        const emailReg     = /[.+@.+\..+/i]/;
        const textReg      = /[a-zA-Z]+$/;

        const name         = document.querySelector('#name')
        const email        = document.querySelector('#email')
        const message      = document.querySelector('#message')

        const errorName    = document.querySelector('.error-name')
        const errorEmail   = document.querySelector('.error-email')
        const errorMessage = document.querySelector('.error-message')

        if (!nameReg.test(name.value)) {
            name.classList.add('invalid')
            errorName.style.display = 'block';
        } else {
            name.classList.remove('invalid')
            errorName.style.display = 'none';
        }

        if (!emailReg.test(email.value)) {
            email.classList.add('invalid')
            errorEmail.style.display = 'block';

        } else {
            email.classList.remove('invalid')
            errorEmail.style.display = 'none';
        }

        if (!textReg.test(message.value)) {
            message.classList.add('invalid')
            errorMessage.style.display = 'block';

        } else {
            message.classList.remove('invalid')
            errorMessage.style.display = 'none';
        }

        if (   !name.classList.contains('invalid')
            && !email.classList.contains('invalid')
            && !message.classList.remove('invalid')) {
            this.send()
        }
    }

    send() {
        this.hide()
        setTimeout(() => {
            this.$success = document.createElement('div')
            this.$success.classList.add('js-form__success')
            this.$success.insertAdjacentHTML('afterbegin', `
            <span class="js-form__success-message">Your message successfully sent!</span>`);
            document.body.appendChild(this.$success);
        }, 500)


        setTimeout(() => {
            this.$success.style.display = 'none';
        }, 2000)
    }
}
const contactForm = new Form();
