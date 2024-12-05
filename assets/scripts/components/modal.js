const modalOpeners = document.querySelectorAll('[data-role="modal-opener"]')

if (modalOpeners.length) modalOpenersInit()

function modalOpenersInit () {
  for (let i = 0; i < modalOpeners.length; i++) {
    const id = modalOpeners[i].getAttribute('data-modal-id')
    const modal = document.querySelector(`#${id}`)
    const modalClose = document.querySelector('.modal-close')
    modalClose.addEventListener('click', () => closeModal(modal))
    modalOpeners[i].addEventListener('click', () => openModal(modal))
  }

  function openModal (modal) {
    modal.classList.add('modal_active')
  }

  function closeModal (modal) {
    modal.classList.remove('modal_active')
  }

  window.addEventListener('keydown', closeModalEsc)

  function closeModalEsc (e) {
    if(e.key === "Escape") {
      const currentOpenModal = document.querySelector('.modal_active')
      if (currentOpenModal) closeModal(currentOpenModal)
    }
  }
}
