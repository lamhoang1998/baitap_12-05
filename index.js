var btnEl = document.getElementById("calculate");
var billInput = document.getElementById("bill");
var numberTipInput = document.getElementById("number-select");
var pplInput = document.getElementById("number-people");
var total = document.getElementById("total");

btnEl.onclick = function () {
	billValue = +billInput.value;

	numberTipValue = +numberTipInput.value;

	pplValue = +pplInput.value;
	if (
		(billValue === 0 || billValue < 0) &&
		numberTipValue === 0 &&
		(pplValue === 0 || pplValue < 0)
	) {
		alert("Vui lòng nhập vào một số dương và lựa chọn khoản tiền muốn tip ");
	} else {
		const totalValue =
			(billValue + (billValue * numberTipValue) / 100) / pplValue;
		total.innerHTML = totalValue.toFixed(2);
	}
};
