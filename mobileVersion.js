const mobileVersion = offer => {
	const listOfElements = document.querySelector('.competenceListForMobile ul');
	const getOneParagraphToList = (desc = '') => {
		const descParagraph = document.createElement('p');
		descParagraph.innerText = desc;
		return descParagraph;
	};
	const getOnePhoto = oneOffer => {
		const element = document.createElement('div');
		element.classList.add('photo');
		element.style.backgroundImage = oneOffer.img
			? `url(${oneOffer.img})`
			: `url('./photos/defaultIcon.JPG')`;
		return element;
	};
	const getOneListElement = (oneOffer, index) => {
		const newDescParagraph = getOneParagraphToList(oneOffer.desc);
		const newPhoto = getOnePhoto(oneOffer);
		const newListElement = document.createElement('li');
		newListElement.classList.add('offerElement');
		if (index % 2 === 0) {
			newListElement.appendChild(newPhoto);
			newListElement.appendChild(newDescParagraph);
		} else {
			newListElement.appendChild(newDescParagraph);
			newListElement.appendChild(newPhoto);
		}
		return newListElement;
	};
	const createNewListElement = offer => {
		let newListElement;
		offer.forEach((oneOffer, index) => {
			newListElement = getOneListElement(oneOffer, index);
			listOfElements.appendChild(newListElement);
		});
	};
	return createNewListElement(offer);
};
