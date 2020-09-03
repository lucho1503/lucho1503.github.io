const typed = new Typed('.typed', {
	strings: [
		'<i class="personal">Software Developer.</i>', 
		'<i class="personal">Docker Containers.</i>',
		'<i class="personal">Cyber Security.</i>',
		'<i class="personal">Internet of Things.</i>',
		'<i class="personal">Machine Learning.</i>', 
		'<i class="personal">Traveler.</i>', 
		'<i class="personal">Lifelong Learner.</i>'
	],


	typeSpeed: 50, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 50, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato

});