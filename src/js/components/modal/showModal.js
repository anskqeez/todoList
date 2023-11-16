
export function showModal() {
	const modalOverlay = document.querySelector('.modal__overlay');
	const modalBtnClose = document.querySelector('.modal__close');
	const modalBtnDelete = document.querySelector('.modal__delete');
	const modalBtnOk = document.querySelector('.modal__ok');

	if (modalOverlay && !modalOverlay.classList.contains('active')) {
		modalOverlay.classList.add('active');
		return;
	}
	modalOverlay.classList.remove('active');
}
