///MISATGES Y SPRITES



function main(){
	// CustomGame
	// Parámetros
	// Tamaño mapa columnas
	// Tamaño mapa filas
	// Tamaño sprites
	// Pantalla completa
	// Minimapa2D
	// Debug por consola
	CustomGame.configureGame(32,32,64,false,true,true);
	// Ground&Ceiling
	// Establece color degradado techo
	CustomGame.setGradientCeiling('lightblue','red');
	// Establece imagen de fondo
	   //CustomGame.setImageBackground("app/img/interior360.jpg");
	// Establece color degradado suelo
	CustomGame.setGradientGround('brown','brown');

	// Custom behaviour
	CustomGame.createBreakableWall("porta2",23,8,"app/img/prisionDoor.png","step1");
	CustomGame.createBreakableWall("barrotes",9,8,"app/img/prisionDoor.png","fundir");
	CustomGame.createItem("note1",3,10, "app/img/note.png", "note");
	CustomGame.createBreakableWall("portavermella",16,11,"app/img/prisionDoor.png","step2");
	CustomGame.createItem("note2",16,13, "app/img/note.png", "note2");
	CustomGame.createBreakableWall("Lab1",14,15,"app/img/Pared2_Fuente.gif","open");
	CustomGame.createItem("altar",4,23, "app/img/RegenOfAngel.png");
	

	CustomGame.createBreakableWall("Lab2",20,13,"app/img/Pared2_Fuente.gif","key");
	CustomGame.createUsableItem("Llave1",21,24,"app/img/llave.png");
	//ITEM LLAVE Y ITEM PRIMERA ARMA
	CustomGame.createUsableItemShot("primary_Weapon",1,1,"app/img/gold_crucifixe.png","killA");
	CustomGame.createUsableItemShot("secundary_Weapon",29,9,"app/img/regular_holy_water.png","killB");

	CustomGame.createBreakableWall("LabBUG",17,15,"app/img/Pared2_Fuente.gif");

	CustomGame.createBreakableWall("LabFINAL",25,20,"app/img/Pared2_Fuente.gif","open");

	/* CustomGame.createUsableItemShot("shot",3,3,"app/img/bomb.png","mataX");
	CustomGame.createAnimatedItem("killable",18,4,"app/img/spriteBicho.png",1,1,20,10,2,[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],"mataY",0,9,10,19);
	CustomGame.createUsableItemShot("shot2",29,3,"app/img/objb.png","mataY");
	
	CustomGame.createUsableItem("skull",3,9,"app/img/objc.png");

	CustomGame.createAnimatedItem("npc1",9,6,"app/img/spriteBicho.png",1,1,20,10,2,[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],"mataY",0,9,10,19);
	CustomGame.createAnimatedItem("npc2",10,9,"app/img/spriteBicho.png",1,1,20,10,2,[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],"mataY",0,9,10,19);

	CustomGame.createItem("turtle",14,3,"app/img/turtle.png"); */
	CustomGame.showMessage('welcome');

}

window.onload = main;
