const modalCallForm = document.querySelector('[data-element="modal-call-form"]')

if (modalCallForm) modalCallFormInit()

function modalCallFormInit () {
  modalCallForm.addEventListener('submit', submitHandler)

  function submitHandler (e) {
    e.preventDefault()
    const formData = new FormData(modalCallForm)
    const data = {}
    formData.forEach((value, key) => data[key] = value)
    console.log(data)
  }
}
