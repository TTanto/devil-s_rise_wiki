//// DATA ////
// *****************
// Jugador
// P
// *****************
// Paredes
// 1-9 --> wallx.png
// *****************
// Objetos
// a-j --> objx.png
// *****************
class CustomDATA extends DATA{
	constructor(){
		super();
	}

	_ini(){
		super._ini();

let aux=`
11111111111111111111111111111111
1                              1
1                              1
1111111111111111111 111111111111
1                 1 1         11
1                 1 1         11
1111111111111111111 111111111111
1        1            1        1
1  P                           1
1        1            1        1
1        1            1        1
1111111111111111 111111111111111
1111111111111       111111111111
1                              1
1  111111111111111111        111
1  1              1            1
1  11 111111111 1 111        111
1       1     1	1 1            1
11111 111     1 1 111        111
1   1 1  111111 1              1
1   1 1  1      111111111 111111
11111 1  1 1111 11             1
1     1  1 111    111          1
1     1  1 1         1         1
1     1  1 1          1        1
11111111111111111111111        1
1                              1
1                              1
1                              1
11111111111111111111111111111111





`;
		this.set('map0',aux);




aux=`
<h1>Bienvenida a esta aventura</h1>
<p>Tu objetivo es parar el renacimiento de los demonios <br>
	por parte del rei malèfico, el REY NEGRO </p>
	<img src='app/img/theKing.png'> </img>

<p>Podemos comenzar viendo qué es ese extraño objeto</p>
			<hr/>
<h2>Pulsa m para abrir/cerrar esta pantalla</h2>
			<hr/>
`;
		this.set('welcome',aux);

aux=` 
		
	  <h1> Ei darko, soy angel estoy usando mi poder telepatico para comunicarme contigo. <h1> <br>
	  <h2>Recuerdo haver estado preso en esa prision por ir pasado de rosca una noche</h2><br>
	  <h3> Tranquilo te ayudare a salir. </h3> <br> <br>
	  <h3>  *PISTA*  pulsas la tecla H, y pronuncia la palabara "FUNDIR"</h3> <br>
	  <h1>  Bah, pero no me hagas solo es una pista <br>
	  		Más tarde hablamos.</h1>

`;
		this.set('note1', aux);

aux=` <h1> Como?? Que has hecho? </h1>
	  <h3>  Pues resulta que mis consejos sirvern para algo vaya...</h3>
	  <h1> YA ERES LIBRE, CONSIGUE TUS ARMAS Y LUCHA CONTRA EL MAL </h1>
`;
		this.set('misionPrisionOK', aux);

aux=`
<h1>Enhorabuena</h1>
<h2>Has completado tu misión</h2>
`;
		this.set('missionCompleted',aux);

aux=`
<h1>Gestión del Inventario</h1>
<p>Los objetos se colocan en el inventario al tocarlos</p>
<p>Tienes 10 posiciones de inventario:</p>
			<hr/>
<h2>1 2 3 4 5 6 7 8 9 0</h2>
			<hr/>
<h2>Cada posicón se representa con un cuadrado en la parte superior de la pantalla</h2>
			<hr/>
<h2>Cambia de posición con la tecla del número correspondiente</h2>
			<hr/>
<h2>Sólo puedes tener un objeto por posición</h2>
			<hr/>
`;
		this.set('multipleObjects',aux);
aux=`
<h1>Captura la tortuga</h1>
<p>Para capturar la tortuga tienes que decir la palabra "tortuga"</p>
</hr>
<p>Haz click en la tortuga para oir cómo se pronuncia</p>
</hr>
<p>
<button onclick="
 speechSynthesis.speak(new SpeechSynthesisUtterance('tortuga'));
		">
<img src='app/img/turtle.png'/>
			</button>
			</p>
</hr>
<h2>Para hablara pulsa la tecla "h"</h2>
`;
		this.set('missionGetTurtle',aux);
aux=`
<h1>Posición ocupada</h1>
			<p>Selecciona una posición libre en el menú</p>
			<hr/>
			<h2>Para ello utiliza las teclas numéricas del 1 al 9</h2>
			<hr/>
`;
		this.set('selectAvailableStopMenu',aux);


aux=`
		<h1>El utilizar los objetos</h1>
		<h2>Darko recuerda cuando tienes un objeto en la mano</h2><br>
		<h3>Para usarlo tienes que hacer clic izquierdo </h3> <br> <br>
		<h2>Recuerda!! Si tienes un objeto seleccionado, no podras coger otro, con los numeros del 1 al 9 selecionas otra posicion en el menu</h2><br>
		`;
				this.set('elUsodeObjetos',aux);
aux=`
		<h2>Bien echo chico, encima de feo le canta la boca. </h2><br>
		<h3>Vamos a seguir. </h3> <br> <br>
		`;
				this.set('KillMonster01',aux);

aux=`
<h1>Menu de objetos y Agua bendita</h1>
			<p>Recuerda!! si tienes mas de un objeto, puedes equipartelo usando los numeros del 1 al 9</p>
			<hr/>
			<h2>Recuerdas que el agua bendita, sirve para eliminar enemigos Singulares con estas caracteristicas</h2>
			<hr/>
			<h2>No intentes bebertela, eres demasiado joven</h2>
			<hr/>
`;
		this.set('HolyWater',aux);

aux=`
<h1>Equipo recuperado</h1>
			<p>Ahora que tenemos las armas, vamos a patearle el culo al rey Negro en su castillo</p>
			<hr/>
			<h2>Bueno... seras tu el que le de la paliza</h2>
			<hr/>
		
`;
		this.set('KillMonster02',aux);

aux=` 
		
	  <h1> Uff, suerte que escape y no me adentre en ese laberinto <h1> <br>
	  <h2>Paciencia y cabeza</h2><br>
	  <h3>Mira por donde vas y NO te pierdas tonto</h3> <br> <br>
`;
		this.set('note2', aux);
aux=` 
		
	  <h1> Recueda con la voz, puedes usar habilidades <h1> <br>
	  <h1> Cuando encuentres algun altar, pronuncia ABRIR <h1> <br>
	  <h2> si es que recuerdo bien....</h2><br>
`;
		this.set('entrarLab1', aux);
aux=` 
		
	  <h1> Darko has oido eso?? <h1> <br>
	  <h2> Ves a investigar perro</h2><br>
`;
		this.set('missionLab1', aux);
aux=` 
		
	  <h1> Para que servira?? <h1> <br>
	  <h2> Has visto alguna puerta con candado?</h2><br>
	  <h3> En tiempos de guerra.... todo agujero es trinchera.</h3><br>
`;
		this.set('KEY', aux);

aux=`

	<h1> Parece que has encontrado su utilidad</h1>
	<p> Estas trabajando duro pero cada vez se complica mas o eso creo</p>
`;
		this.set('doorOpenKey',aux);

aux=`
	<h1>Y Esta sala, seguro que se trata de un puzle donde debes eliminar a los enemigos en un orden correcto</h1>
	<p>Assegurate de haber explorado todo el laberinto en busca de algun tipo de combinación, tiene pinta que si fallas la palmas manito.</p>
`;
		this.set('startBingo',aux);

aux=`
		<h1>Parece ser que este no es el orden, vuelve a probar!!</h1>
		<p>Si no consigues tu objetivo, inspecciona el escenario en busca de pistas!</p>
	`;
			this.set('wrongCombo',aux);
	


aux=`
	<h1>Que significara este dibujo? Y estos numeros? La verdad Darko no lo havia visto nunca</h1>
	<p> yo de tu recordaría esto, puede que mas adelante te sirva de algo</p>
`;
		this.set('msgkeyToBingo',aux);

aux=`
	<h1>Suerte que solo estoy de espectador, que jodido esta parte</h1>
	<p> Pero bueno seguimos avançando aún que nuestra cordura solo haga que bajar...</p>
`;
		this.set('BingoSolved',aux);

//MENSAJES QUEE DICE EL REY NEGRO

aux=`
	<h1>Darko, esto no huele bien, debe de ser la camára del Rei Negro</h1>
	<p>Acaba con el antes de que sea demasiado tarde, no lo subestimes, es muy fuere!</p>
`;
		this.set('EnterFinal',aux);

aux=`
	<h1>Así que tu eres la alimaña que me ha causado tantos problemas</h1>
	<p> Nose quién eres, pero dentro de nada solo serás polvo uajajajajaj</p>
	`;
		this.set('ReyNegro1',aux);

aux=`
	<h1>No eres un simple humano... Eso dice mucho de ti</h1>
	<p> Pero no me importa quien seais y cuantos, lograre recusitar los demonios!!</p>
`;
		this.set('ReyNegro2',aux);

aux=`
	<h1>No puede estar pasando, tu me estas venciendo?</h1>
	<p>Debo escapar lo antes possible</p>
`;
		this.set('ReyNegro3',aux);
	

aux=`
<h1>Enhorabuena, has cogido la tortuga</h1>
<p><img src='app/img/turtle.png'/></p>
`;
		this.set('turtleOK',aux);

	}
}
