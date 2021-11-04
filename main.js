function main() {

	//get elements from HTML
	const a = +document.getElementById('a').value
	const b = +document.getElementById('b').value
	const c = +document.getElementById('c').value

	//calculating the discriminant
	document.getElementById('output').innerHTML = findValueQuadraticEquation(a, b, c)
	document.querySelector('.inner').style.display = 'block'

}

function findValueQuadraticEquation(a, b, c) {

	if (a === 0) {
		return 'Ошибка, а = 0 недопустимое значение!'
	}

	// discriminant
	const D = b * b - 4 * a * c;
	const coefficients = `Коэффициенты: a= ${a} , b= ${b} , c= ${c}`

	//the value of the roots of the discriminant
	let x1, x2;
	if (D > 0) {
		x1 = (-b + Math.sqrt(D)) / (2 * a);
		x2 = (-b - Math.sqrt(D)) / (2 * a);
		return `${coefficients}<br>Корни уравнения: X1= ${x1} , X2= ${x2}<br>Дискриминант(D)= ${D}`
	}
	else if (D === 0) {
		x1 = -b / (2 * a);
		return `${coefficients}<br>Корни уравнения: X1= ${x1}<br>Дискриминант(D)= ${D}`
	}
	else if (D < 0)
		return `${coefficients}<br>Корней нет!<br>Дискриминант(D)= ${D}`
}