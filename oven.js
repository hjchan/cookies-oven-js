//Write appropriate functions here for the oven. You may want to consider the following:
//1. A restart button is created when the user clicks the stop button.
//2. Now that you have created a restart button, think of what should happen when the restart button is clicked (refer back to the demo to help you).
//3. If you encountered any bugs in the demo, this is also the place where you can improve the demo's code.
//4. Some functions that you may find useful: getElementById, removeChild, innerHTML, setAttribute, appendChild, insertBefore.
function stopTimer(){
	console.log("abc");
  	if (!ovenAlreadyRan) { return } 
  	else{
  		endTimer()
  		ovenAlreadyRan = false
  		if (!document.getElementById('restart-btn')){
  			restartBtn = createRestartBtn();
  		}
  		restartBtn.style.display = "block"
  		if (currentTime <= 15){
  			document.getElementById('final-statement').innerHTML = "Here You Go!"
	  		tray = document.getElementById('tray')
	  		for (i = 0; i < tray.childElementCount; i++){
	  			tray.children[i].src = "img/cookie.jpg"
	  		}
	  	} else {
	  		document.getElementById('final-statement').innerHTML = "Oh no, the cookies are burnt! Try again!"
	  		for (i = 0; i < tray.childElementCount; i++){
	  			tray.children[i].src = 'img/fire.jpg'
	  		}
	  	}
  	}
}

function createRestartBtn(){
	restartBtn = document.createElement('button')
	restartBtn.setAttribute('id','restart-btn')
	restartBtn.innerHTML = 'Restart'
	finalStatement = document.getElementById('final-statement')
	finalStatement.parentNode.insertBefore(restartBtn,finalStatement.nextSibling)
	restartBtn.addEventListener('click', restart)
	return restartBtn
}

function restart(){
	clearCookies()
	document.getElementById('final-statement').innerHTML = ""
  	document.getElementById('cookie-status').innerHTML = ""
  	document.getElementById('timer').innerHTML = ""
  	currentTime = -1;
  	document.getElementById('restart-btn').style.display = "none"
}

function stopBaking(){
	document.getElementById('stop-btn').addEventListener('click',stopTimer)
}

document.addEventListener('DOMContentLoaded', stopBaking);