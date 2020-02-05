let tablo = document.querySelector('.tablo');

let buttons = document.querySelectorAll('button');

let num1 = 0, num2 = 0, res, oper;

buttons.forEach(function(item){
	item.addEventListener('click', function(e){
		let target = e.target;
		tablo.innerText += target.textContent;

		if(target.classList.contains('oper')) {
			num1 = parseFloat(tablo.textContent);
			oper = target.textContent;
		}

		if(target.classList.contains('res')) {
			let temp = tablo.textContent;
			temp = temp.split(oper);
			num2 = parseFloat(temp[1]);
			if(oper == '+') {
				res = num1 + num2;
			}
			if(oper == '-') {
				res = num1 - num2;
			}
			if(oper == '*') {
				res = num1 * num2;
			}
			if(oper == '/') {
				res = num1 / num2;
			}
			tablo.textContent = res;
		}
		
		if(target.classList.contains('clear')) {
			tablo.textContent = '';
			num1 = 0;
			num2 = 0;
		}
	});
});