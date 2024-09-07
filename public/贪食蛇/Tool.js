/**
 *author: wang zhuo;
 */
function gameObjFactory(name,x,y){
	if(typeof name === 'string'){
		var domElement = document.createElement("div")
		switch(name){
			case 'body':
			domElement.innerHTML="<div class='body'> <div></div> <div></div> <div></div> <div></div> <div></div> </div>";
			break;
			case 'head':
			domElement.innerHTML="<div class='head'> <div></div> <div></div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;</div>";
			break;
			case 'food':
			domElement.innerHTML="<div class='food'> <div></div> <div></div> <div></div> <div></div> <div></div> </div>";
			break;
		}
		domElement.style.position="absolute";
		domElement.style.left=x+'px';
		domElement.style.top=y+'px';
		return domElement;
	}
}

function random(min,max){
	if(typeof min == 'number' && typeof max =='number')
	return Math.floor(Math.random()*(max-min)+min);
}
