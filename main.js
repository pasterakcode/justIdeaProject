const gearElement = document.querySelector('.gear');
let offerLength;
const rulesClassForParagraph = index => {
	if (index === 0) return 'top';
	if (offer.length % 2 === 0 && index === offerLength / 2) return 'bottom';
	if (index < offerLength / 2) {
		return 'right';
	} else if (index > offerLength / 2) {
		return 'left';
	}
};
const getOneParagraph = (desc = '', index) => {
	const descParagraph = document.createElement('p');
	descParagraph.classList.add(rulesClassForParagraph(index));
	descParagraph.innerText = desc;
	return descParagraph;
};
const getOneElement = (oneOffer, index) => {
	const newDescParagraph = getOneParagraph(oneOffer.desc, index);
	const element = document.createElement('div');
	element.appendChild(newDescParagraph);
	element.classList.add('el');
	element.style.transform = `rotate(-${(360 / offerLength) * index}deg)`;
	element.style.backgroundImage = oneOffer.img
		? `url(${oneOffer.img})`
		: `url('./photos/defaultIcon.JPG')`;
	return element;
};
const getOneTooth = (oneOffer, index) => {
	const newElement = getOneElement(oneOffer, index);
	const newTooth = document.createElement('div');
	newTooth.classList.add('tooth');
	newTooth.style.transform = `rotate(${(360 / offerLength) * index}deg)`;
	newTooth.appendChild(newElement);
	return newTooth;
};
const createNewTooth = offer => {
	let newTooth;
	offer.forEach((oneOffer, index) => {
		newTooth = getOneTooth(oneOffer, index);
		gearElement.appendChild(newTooth);
	});
};
const getData = async () => {
	const data = await offer();
	offerLength = data.data.length;
	createNewTooth(data.data);
	mobileVersion(data.data);
};
window.addEventListener('DOMContentLoaded', getData);
