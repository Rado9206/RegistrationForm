const userName = document.querySelector('#username')
const pass1 = document.querySelector('#password')
const pass2 = document.querySelector('#password2')
const email = document.querySelector('#email')
const sendBtn = document.querySelector('.send')
const clearBtn = document.querySelector('.clear')
const closeBtn = document.querySelector('.close')
const popup = document.querySelector('.popup')

const showError = (input, message) => {
	// argument input przechopwuje nasze inputy
	//argument message przechowuje placeholder
	const formBox = input.parentElement
	const errorMsg = formBox.querySelector('.error-text')

	formBox.classList.add('error')
	errorMsg.textContent = message
}

const clearError = input => {
	const formBox = input.parentElement
	formBox.classList.remove('error')
}

const checkForm = input => {
	// argument Input z funkcji 'checkform" przechwytuje tablicę z naszymi inputami
	// argument el odnosi się do każdej zmiennej, którą umieściliśmy w tablicy
	input.forEach(el => {
		if (el.value === '') {
			showError(el, el.placeholder)
		} else {
			clearError(el)
		}
	})
}

const checkLength = (input, min) => {
	if (input.value.length < min) {
		showError(input, `${input.previousElementSibling.innerText.slice(0, -1)} musi zawierać min. ${min} znaków!`)
	}
}

checkPassword = (pass1, pass2) => {
if (pass1.value !== pass2.value) {
	showError(pass2, 'Hasła muszą być jednakowe!')
}
}

sendBtn.addEventListener('click', e => {
	e.preventDefault()
	checkForm([userName, pass1, pass2, email])
	checkLength(userName, 5)
	checkLength(pass1, 8)
	checkPassword(pass1, pass2)
})

clearBtn.addEventListener('click', e => {
	e.preventDefault()
	;[userName, pass1, pass2, email].forEach(el => {
		el.value = ''
	})
})
