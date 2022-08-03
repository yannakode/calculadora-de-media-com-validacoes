const notaUm=document.getElementById('nota1');
const notaDois=document.getElementById('nota2');

const media=document.getElementById('media');

const btnCalcula=document.getElementById('btnCal');
const btnLimpa=document.getElementById('btnClean');

const boxSituation=document.querySelector('.box');
let pMessage=document.getElementById('aviso');
const form=document.querySelector('form');

function CalMedia(num1, num2){
	return num1 + num2 / 2
}

function defineSituacao(mediafinal){
	let situacaoFinal;
	if(mediafinal>=6){
		situacaoFinal='Aprovado';
	}else if(mediafinal<4 || mediafinal>= 0){
		situacaoFinal='Reprovado';
	}else if(mediafinal>=4 || mediafinal<6){
		situacaoFinal='Recuperação';
	}
	return situacaoFinal;
}

function formatarSituacao(situacaoFinal){
	switch(situacaoFinal){
		case 'Aprovado':
		boxSituation.classList.add('aprovado');
		boxSituation.classList.remove('reprovado');
		boxSituation.classList.remove('recuperação');
		break
		case 'Reprovado':
		boxSituation.classList.remove('aprovado');
		boxSituation.classList.add('reprovado');
		boxSituation.classList.remove('recuperação');
		break;
		case 'Recuperação':
		boxSituation.classList.remove('aprovado');
		boxSituation.classList.remove('reprovado');
		boxSituation.classList.add('recuperação');
		break;
	}
}

function validaNum(n){
	let nota1=notaUm.value;
	let nota2=notaDois.value;
	if(nota1 > 10 || nota1 < 0 || nota2 > 10 || nota2 < 0){
		form.reset();
		pMessage.textContent='Insira um número entre 10.0 e 0.0';
		pMessage.classList.add('alerta');
		setTimeout(function(){
			pMessage.textContent='';
			pMessage.classList.remove('alerta');
		},2000)
	}
}

btnCal.addEventListener('click', function(e){
	e.preventDefault();
	let nota1= parseFloat(notaUm.value);
	let nota2= parseFloat(notaDois.value);
	let mediaFinal=CalMedia(nota1,nota2);
	if(isNaN(mediaFinal) || mediaFinal < 0){
		boxSituation.value='';
	}else{
		media.value=mediaFinal;
		let situacaoFinal=defineSituacao(mediaFinal);
		boxSituation.value=situacaoFinal;
		formatarSituacao(situacaoFinal);
	}	
})

btnLimpa.addEventListener('click',function(){
	boxSituation.classList.remove('aprovado');
	boxSituation.classList.remove('reprovado');
	boxSituation.classList.remove('recuperação');
})


