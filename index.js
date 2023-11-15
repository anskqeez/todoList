export function createButton(el, button) {
	const wrapper = document.createElement('div');
	wrapper.className = 'wrapper__btn';
	const createButton = document.createElement('button');
	createButton.className = button;
	wrapper.append(createButton);
	el.append(wrapper);
}
