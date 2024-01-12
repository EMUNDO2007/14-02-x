const si = document.querySelector(".btnSi"),
no = document.querySelector(".btnNo"),
title = document.querySelector(".title"),
audio = document.querySelector(".audio"),
box=document.querySelector(".content"),
carta = document.querySelector(".carta"),
inicio = document.querySelector(".inicio"),
contentBtn = document.querySelector(".botones"),
mensaje = document.querySelector(".mensaje"),
video=document.querySelector("video");


let conteo = 0;

window.addEventListener("load",()=>{
	carta.style.opacity="1";
})
carta.addEventListener("click",()=>{
	
	
	video.play()
	audio.src=`hello.mp3`
	audio.play()
	
	
	inicio.style.opacity="0"
	inicio.style.visibility="hidden"
	box.style.opacity="1"
	
	title.style.transform="translateY(0)"
	no.style.transform="translateX(0)";
	si.style.transform="translateX(0)"
})



no.addEventListener("mouseover",mover)
no.addEventListener("click",mover)
si.addEventListener("click",()=>{
	mensaje.classList.add("active")
	audio.src=`a.mp3`
	audio.play()

})

function mover(){
	conteo++;
	console.log(conteo)
	if(conteo >= 5){
		alert(`Error, tienes que elegir "Sí"`)
	}
	let transition= Math.random()
	let left = Math.floor(Math.random()*100);
	let top = Math.floor(Math.random()*100);
	console.log(left,top)
	no.style.position = "absolute"
	no.style.transition= `${transition}s`
	no.style.left=`${left}%`
	no.style.top=`${top}%`
	}