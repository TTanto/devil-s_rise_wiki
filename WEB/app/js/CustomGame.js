
class CustomMission{
	constructor(objID,activated,x,y,speak,test){
		this.objID=objID;
		this.activated=activated;
		this.completed=false;
		this.posx=x;
		this.posy=y;
		this.speak=speak;
		this.speakTest=test;
	}
	reset(x,y,activated){
		this.posx=x;
		this.posy=y;
		this.activated=activated;
		this.completed=false;
	}
}


class CustomGame extends BaseGame{
	// Custom variables
	static msgObject1=false;
	static msgPrison=false;
	static msgNote1 = false;
	static msgNote2 = false;
	static msgLab1 = false;
	static msgBingo = false;
	static msgKing = false;
	static msgMultipleInventory=false;
	static missionTurtle=false;
	static turtleOK=false;
	static escape_prison=new CustomMission("barrotes",false, 8,8,false,"fundir");
	static escape_Lab1=new CustomMission("Lab1",false, 4,22,false,"abrir");
	static reiNegro = 0;
	//Bingo
	static BINGO_1 = false;
	static BINGO_2 = false;
	static BINGO_3 = false;
	static BINGO_4 = false;
	static BINGO_5 = false;
	static BINGO_6 = false;


	// Messages from the objects
	// msg: text message
	// obj: object sending the message
	// par: array with params
	static protocol(msg,obj,par){
		switch(msg){
			case 'dropItem':
				if(
					obj._id=="Llave1"
					&&
					par[0]==19
					&&
					par[1]==13
				)
				{
					CustomGame.showMessage('doorOpenKey');
					CustomGame.remWallXY(20,13);
					CustomGame.createAnimatedItem("monster7",30,13,"app/img/hauntedtree.png",1,1,1,1,1,[0],"killA",0,0,0,0);
					CustomGame.createAnimatedItem("monster8",30,15,"app/img/hauntedtree.png",1,1,1,1,1,[0],"killA",0,0,0,0);
					CustomGame.createAnimatedItem("monster9",30,17,"app/img/hauntedtree.png",1,1,1,1,1,[0],"killA",0,0,0,0);
					CustomGame.createAnimatedItem("monster10",30,19,"app/img/hauntedtree.png",1,1,1,1,1,[0],"killA",0,0,0,0);
					CustomGame.createAnimatedItem("monster11",19,15,"app/img/hauntedtree.png",1,1,1,1,1,[0],"killA",0,0,0,0);
					CustomGame.createAnimatedItem("monster12",19,17,"app/img/hauntedtree.png",1,1,1,1,1,[0],"killA",0,0,0,0);
					CustomGame.remWallXY(17,15);
				}
			
				break;
			case 'takeItem':
				if(
					obj._id=="primary_Weapon"
				){
					CustomGame.createAnimatedItem("monster1",26,1,"app/img/hauntedtree.png",1,1,1,1,1,[0],"killA",0,0,0,0);
					CustomGame.createAnimatedItem("monster2",26,2,"app/img/hauntedtree.png",1,1,1,1,1,[0],"killA",0,0,0,0);
					CustomGame.createAnimatedItem("monster3",19,4,"app/img/worm_purple.png",1,1,1,1,1,[0],"killA",0,0,0,0);
					CustomGame.showMessage('elUsodeObjetos');
					
				}

				if(obj._id=="secundary_Weapon"){
					CustomGame.showMessage('HolyWater');

					CustomGame.createAnimatedItem("monster4",17,8,"app/img/Demon.png",1,1,1,1,1,[0],"killB",0,0,0,0);
				}
				if(obj._id=="Llave1"){
					
					CustomGame.showMessage('KEY');
				}


				
				break;
			case 'touchItem':
				if(
					CustomGame.msgNote1==false
					&&
					par[0]==3
					&&
					par[1]==10
				){
					CustomGame.showMessage('note1');
				}

				if(
					CustomGame.msgNote2==false
					&&
					par[0]==16
					&&
					par[1]==13
				){
					CustomGame.msgNote2 == true;
					CustomGame.showMessage('note2');
				}
				break;
			case 'useItem':
				break;
			case 'selectItem':
				break;
			case 'dieObject':
				if(obj._id=="barrotes"){
					CustomGame.remWallXY(9,2);
				}
				if(obj._id== "monster3"){
					
					CustomGame.showMessage('KillMonster01');
					CustomGame.remWallXY(23,8);
				}
				if(obj._id== "monster4"){
					CustomGame.showMessage('KillMonster02');
					CustomGame.remWallXY(16,11);
				}

				/////////////////////////////////////////////////////7
				//	Aqui començá el bingo			//
				//////////////////////////////////////////////////////
				
				if(obj._id== "monster9"){
					this.BINGO_1 = true;
				}
				

				if(obj._id== "monster7" && this.BINGO_1 == true){
					this.BINGO_2 = true;
					
				}
				if (obj._id == "monster7" && this.BINGO_1 == false){
					if(par[0] == 30 && par[1] == 13){
					CustomGame.createAnimatedItem("monster7",29,13,"app/img/hauntedtree.png",1,1,1,1,1,[0],"killA",0,0,0,0);
					CustomGame.showMessage('wrongCombo');
					}
					if(par[0] == 29 && par[1] == 13){
						CustomGame.createAnimatedItem("monster7",30,13,"app/img/hauntedtree.png",1,1,1,1,1,[0],"killA",0,0,0,0);
						CustomGame.showMessage('wrongCombo');
					}
				 }
				if(obj._id== "monster10" && this.BINGO_2 == true){
					this.BINGO_3 = true;
				}
				if(obj._id== "monster10" && this.BINGO_2 == false){
					if(par[0] == 30 && par[1] == 19){
						CustomGame.createAnimatedItem("monster10",29,19,"app/img/hauntedtree.png",1,1,1,1,1,[0],"killA",0,0,0,0);
						CustomGame.showMessage('wrongCombo');
						}
						if(par[0] == 29 && par[1] == 19){
							CustomGame.createAnimatedItem("monster10",30,19,"app/img/hauntedtree.png",1,1,1,1,1,[0],"killA",0,0,0,0);
							CustomGame.showMessage('wrongCombo');
						}
				}

				if(obj._id== "monster12" && this.BINGO_3 == true){
					this.BINGO_4 = true;
				}
				if(obj._id== "monster12" && this.BINGO_3 == false){
						if(par[0] == 19 && par[1] == 17){
						CustomGame.createAnimatedItem("monster12",20,17,"app/img/hauntedtree.png",1,1,1,1,1,[0],"killA",0,0,0,0);
						CustomGame.showMessage('wrongCombo');
						}
						if(par[0] == 20 && par[1] == 17){
							CustomGame.createAnimatedItem("monster12",19,17,"app/img/hauntedtree.png",1,1,1,1,1,[0],"killA",0,0,0,0);
							CustomGame.showMessage('wrongCombo');
						}
				}
				if(obj._id== "monster8" && this.BINGO_4 == true){
					this.BINGO_5 = true;
				}
				if(obj._id== "monster8" && this.BINGO_4 == false){
					if(par[0] == 30 && par[1] == 15){
						CustomGame.createAnimatedItem("monster8",29,15,"app/img/hauntedtree.png",1,1,1,1,1,[0],"killA",0,0,0,0);
						CustomGame.showMessage('wrongCombo');
						}
						if(par[0] == 29 && par[1] == 15){
							CustomGame.createAnimatedItem("monster8",30,15,"app/img/hauntedtree.png",1,1,1,1,1,[0],"killA",0,0,0,0);
							CustomGame.showMessage('wrongCombo');
						}
				}
				if(obj._id== "monster11" && this.BINGO_5 == true){
					this.BINGO_6 = true;
					CustomGame.showMessage('BingoSolved');
					CustomGame.remWallXY(25,20);

					CustomGame.createAnimatedItem("monsterA",22,21,"app/img/hauntedtree.png",1,1,1,1,1,[0],"killA",0,0,0,0);
					CustomGame.createAnimatedItem("monsterB",28,22,"app/img/draco.png",1,1,1,1,1,[0],"killA",0,0,0,0);
					CustomGame.createAnimatedItem("monsterC",26,24,"app/img/demon.png",1,1,1,1,1,[0],"killA",0,0,0,0);
					CustomGame.createAnimatedItem("REYNEGRO",2,27,"app/img/theKing.png",1,1,1,1,1,[0],"killA",0,0,0,0);


					CustomGame.createAnimatedItem("monsterD",2,26,"app/img/worm_purple.png",1,1,1,1,1,[0],"killA",0,0,0,0);
					CustomGame.createAnimatedItem("monsterE",18,27,"app/img/worm_purple.png",1,1,1,1,1,[0],"killA",0,0,0,0);
					CustomGame.createAnimatedItem("monsterF",11,28,"app/img/worm_purple.png",1,1,1,1,1,[0],"killA",0,0,0,0);
					CustomGame.createAnimatedItem("monsterG",29,26,"app/img/worm_blue.png",1,1,1,1,1,[0],"killB",0,0,0,0);
					CustomGame.createAnimatedItem("monsterH",7,27,"app/img/worm_blue.png",1,1,1,1,1,[0],"killB",0,0,0,0);
					CustomGame.createAnimatedItem("monsterD",9,26,"app/img/worm_purple.png",1,1,1,1,1,[0],"killA",0,0,0,0);
					CustomGame.createAnimatedItem("monsterE",25,27,"app/img/worm_purple.png",1,1,1,1,1,[0],"killA",0,0,0,0);
					CustomGame.createAnimatedItem("monsterF",12,28,"app/img/worm_purple.png",1,1,1,1,1,[0],"killA",0,0,0,0);
					CustomGame.createAnimatedItem("monsterD",19,26,"app/img/worm_purple.png",1,1,1,1,1,[0],"killA",0,0,0,0);
					CustomGame.createAnimatedItem("monsterE",15,27,"app/img/worm_purple.png",1,1,1,1,1,[0],"killA",0,0,0,0);
					CustomGame.createAnimatedItem("monsterF",8,28,"app/img/worm_purple.png",1,1,1,1,1,[0],"killA",0,0,0,0);
				}
				if(obj._id== "monster11" && this.BINGO_5 == false){
					if(par[0] == 19 && par[1] == 15){
						CustomGame.createAnimatedItem("monster11",20,15,"app/img/hauntedtree.png",1,1,1,1,1,[0],"killA",0,0,0,0);
						CustomGame.showMessage('wrongCombo');
						}
						if(par[0] == 20 && par[1] == 15){
							CustomGame.createAnimatedItem("monster11",19,15,"app/img/hauntedtree.png",1,1,1,1,1,[0],"killA",0,0,0,0);
							CustomGame.showMessage('wrongCombo');
						}
				}

				//// ESCENA NEGROS
				if(obj._id== "REYNEGRO"){
					CustomGame.showMessage('ReyNegro1');
					CustomGame.createAnimatedItem("REY2",28,27,"app/img/theKing.png",1,1,1,1,1,[0],"killA",0,0,0,0);
					
				}

				if(obj._id== "REY2"){
					CustomGame.createAnimatedItem("REY3",19,26,"app/img/theKing.png",1,1,1,1,1,[0],"killA",0,0,0,0);
					
				}

				if(obj._id== "REY3"){
					CustomGame.showMessage('ReyNegro2');
					CustomGame.createAnimatedItem("REY4",2,26,"app/img/theKing.png",1,1,1,1,1,[0],"killA",0,0,0,0);
					
				}
				if(obj._id== "REY4"){
					
					CustomGame.createAnimatedItem("REY5",3,27,"app/img/theKing.png",1,1,1,1,1,[0],"killA",0,0,0,0);
					
				}
				if(obj._id== "REY5"){
					CustomGame.showMessage('ReyNegro3');
					///MAS ENEMIGOS y un objeto los huevos del rei negro
					
				}



				break;


			case 'playerPosition':
				if(
					CustomGame.msgNote1==false
					&&
					par[0]==3
					&&
					par[1]==10
				){
					CustomGame.msgPrison=true;
					CustomGame.showMessage('missionPrison');
				}
				if(
					CustomGame.escape_prison.completed==false
					&&
					par[0]==8
					&&
					par[1]==8
				)
				{
					CustomGame.escape_prison.activated=true;
					CustomGame.escape_prison.speak=true;
				}

				if((
					CustomGame.escape_Lab1.completed==false
					&&
					par[0]==4
					&&
					par[1]==22
				)|| (
					CustomGame.escape_Lab1.completed==false
					&&
					par[0]==4
					&&
					par[1]==24
				)||(
					CustomGame.escape_Lab1.completed==false
					&&
					par[0]==3
					&&
					par[1]==23
				)||(
					CustomGame.escape_Lab1.completed==false
					&&
					par[0]==5
					&&
					par[1]==23
				))
				{
					
					CustomGame.escape_Lab1.activated=true;
					CustomGame.escape_Lab1.speak=true;
				}

				if(
					CustomGame.msgLab1==false
					&&
					par[0]==5
					&&
					par[1]==21

				)
				{
					CustomGame.showMessage('entrarLab1');
					CustomGame.createAnimatedItem("monster5",20,24,"app/img/worm_purple.png",1,1,1,1,1,[0],"killA",0,0,0,0);
					CustomGame.createAnimatedItem("monster6",14,24,"app/img/worm_purple.png",1,1,1,1,1,[0],"killA",0,0,0,0);
					CustomGame.createAnimatedItem("monster7",16,22,"app/img/worm_purple.png",1,1,1,1,1,[0],"killA",0,0,0,0);
					CustomGame.createAnimatedItem("monster9",19,24,"app/img/worm_blue.png",1,1,1,1,1,[0],"killB",0,0,0,0);
					CustomGame.createAnimatedItem("monster10",17,23,"app/img/worm_blue.png",1,1,1,1,1,[0],"killB",0,0,0,0);
					CustomGame.msgLab1 = true;
				
				}
				if(
					CustomGame.msgBingo==false
					&&
					par[0]==21
					&&
					par[1]==13
				){
					CustomGame.showMessage('startBingo');
					CustomGame.msgBingo = true;
					//QUE CANVII UNA PARET O I QUE HI HAGI UN NUMERO, PER A AJUDARRR COMENTAL AL SERGI
				}
				if(
					CustomGame.msgKing == false &&
					par[0]==25
					&&
					(par[1]==24||par[1]==25||par[1]==26||par[1]==27||par[1]==28||par[1]==29||par[1]==30||par[1]==31)
				
					
				)
				{
					CustomGame.createBreakableWall("trampa",23,23,"app/img/prisionDoor.png","step2");
					CustomGame.createBreakableWall("trampa",24,23,"app/img/prisionDoor.png","step2");
					CustomGame.createBreakableWall("trampa",25,23,"app/img/prisionDoor.png","step2");
					CustomGame.createBreakableWall("trampa",26,23,"app/img/prisionDoor.png","step2");
					CustomGame.createBreakableWall("trampa",27,23,"app/img/prisionDoor.png","step2");
					CustomGame.createBreakableWall("trampa",28,23,"app/img/prisionDoor.png","step2");
					CustomGame.createBreakableWall("trampa",29,23,"app/img/prisionDoor.png","step2");
					CustomGame.createBreakableWall("trampa",30,23,"app/img/prisionDoor.png","step2");
					CustomGame.createBreakableWall("trampa",31,23,"app/img/prisionDoor.png","step2");
					CustomGame.showMessage('EnterFinal')
					CustomGame.msgKing = true;
				}



				break; 
			case 'speechToText':
				if(
					CustomGame.escape_prison.speak==true
					&&
					par[0] == CustomGame.escape_prison.speakTest
				){
					CustomGame.showMessage('misionPrisionOK');
					if(CustomGame.remObj(CustomGame.getObject(CustomGame.escape_prison.objID))){
						CustomGame.escape_prison.activated=false;
						CustomGame.escape_prison.completed=true;
						CustomGame.escape_prison.speak=false;
					}else{
						
					}
				}

				if(
					CustomGame.escape_Lab1.speak==true
					&&
					par[0] == CustomGame.escape_Lab1.speakTest
				){
					CustomGame.showMessage('missionLab1');
					CustomGame.remWallXY(14,15);
					CustomGame.escape_Lab1.activated=false;
					CustomGame.escape_Lab1.completed=true;
					CustomGame.escape_lab1.speak=false;

					

					
				}
				break;
		}
	}
}

