import Inputmask from "inputmask"

const phoneMaskInputs = document.querySelectorAll('[data-role="phone-mask-input"]')
const im = new Inputmask("+7 (999) 999-99-99", { showMaskOnHover: false })

for (let i = 0; i < phoneMaskInputs.length; i++) {
  im.mask(phoneMaskInputs[i])
}
