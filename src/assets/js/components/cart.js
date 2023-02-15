const cart = {
	now() {},
};

const cartButton = document.querySelector('.icon__cart');
const cartAll = document.querySelector('.cart');

cartButton.addEventListener('click', () => {
	if (document.documentElement.clientWidth < 769) {
		cartAll.classList.toggle('hide');
	}
});

const menuBtn = document.querySelector('.menu__btn__pic');
const menuAll = document.querySelector('.menu');
menuBtn.addEventListener('click', () => {
	if (document.documentElement.clientWidth < 769) {
		menuAll.classList.toggle('hide');
	}
});
function hideItem() {
	if (document.documentElement.clientWidth < 769) {
		menuAll.classList.add('hide');
		cartAll.classList.add('hide');
	}
}
hideItem();

const ItemCartDel = document.querySelectorAll('.card__item-delete');
let costSubtotal = document.querySelector('.cost__value__subtotal');
let costSTotal = document.querySelector('.cost__value__total');
const tax = 100;
const shipping = 150;

const plus = document.querySelectorAll('.plus');
const minus = document.querySelectorAll('.minus');
const cardWrap = document.querySelectorAll('.card__wrapper');
const cardWrapArr = Array.from(cardWrap);

function count() {
	const squares = cardWrapArr.map(function (num) {
		return (
			+num.querySelector('.card__item-count--quantity').value *
			+num.querySelector('.card__item-count--price').innerHTML
		);
	});

	let sum = squares.reduce((a, b) => a + b, 0);
	costSubtotal.innerHTML = sum.toLocaleString();
	costSTotal.innerHTML = (sum + tax + shipping).toLocaleString();
	if (+costSubtotal.innerHTML <= 0) {
		costSTotal.innerHTML = 0;
	}
}

count();
function plusItem() {
	plus.forEach(btn => {
		btn.addEventListener('click', e => {
			btn.previousElementSibling.value++;
			count();
		});
	});
}

function minusItem() {
	minus.forEach(btn => {
		btn.addEventListener('click', e => {
			if (btn.nextElementSibling.value > 0) {
				btn.nextElementSibling.value--;
				count();
			}
		});
	});
}
minusItem();
plusItem();

function deliteItemCart() {
	ItemCartDel.forEach(btn => {
		btn.addEventListener('click', e => {
			btn.parentElement.remove();
			btn.parentElement.querySelector('.card__item-count--quantity').value = 0;
			count();
		});
	});
}
deliteItemCart();

export default cart;
