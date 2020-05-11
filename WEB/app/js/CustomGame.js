
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
	static msgMultipleInventory=false;
	static missionTurtle=false;
	static turtleOK=false;
	static escape_prison=new CustomMission("barrotes",false, 8,8,false,"fundir");
	static escape_Lab1=new CustomMission("Lab1",false, 4,22,false,"abrir");
	// Messages from the objects
	// msg: text message
	// obj: object sending the message
	// par: array with params
	static protocol(msg,obj,par){
		switch(msg){
			case 'dropItem':
				if(
					obj._id=="skull"
					&&
					par[0]==16
					&&
					par[1]==22
				)
				{
					CustomGame.showMessage('missionCompleted');
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
					CustomGame.showMessage('note1')
				}

				if(
					CustomGame.msgNote2==false
					&&
					par[0]==17
					&&
					par[1]==13
				){
					CustomGame.msgNote2 == true
					CustomGame.showMessage('note2')
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
				/* if(
					CustomGame.msgMultipleInventory==false
					&&
					par[0]==3
					&&
					par[1]==4
				){
					CustomGame.msgMultipleInventory=true
					CustomGame.createBreakableWall("killablewall",3,1,"app/img/wall3.png","mataX");
					CustomGame.addWallXY(3,6,1);
					CustomGame.showMessage('multipleObjects');
				}
				if(
					CustomGame.msgObject1==false
					&&
					par[0]==18
					&&
					par[1]==4
				){
					CustomGame.msgObject1=true;
					CustomGame.showMessage('missionKill1');
				}
				*/
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
					CustomGame.showMessage('entrarLab1')
					CustomGame.createAnimatedItem("monster5",20,24,"app/img/worm_purple.png",1,1,1,1,1,[0],"killA",0,0,0,0);
					CustomGame.createAnimatedItem("monster6",14,24,"app/img/worm_purple.png",1,1,1,1,1,[0],"killA",0,0,0,0);
					CustomGame.createAnimatedItem("monster7",16,22,"app/img/worm_purple.png",1,1,1,1,1,[0],"killA",0,0,0,0);
					CustomGame.createAnimatedItem("monster9",19,24,"app/img/worm_blue.png",1,1,1,1,1,[0],"killB",0,0,0,0);
					CustomGame.createAnimatedItem("monster10",17,23,"app/img/worm_blue.png",1,1,1,1,1,[0],"killB",0,0,0,0);
					CustomGame.msgLab1 = true;
				
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

