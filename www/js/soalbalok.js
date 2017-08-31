$('document').ready(function(){
var soal1 = [{"n":"","i":"balok.jpg","q":"Berapa sisi sebuah balok?","a":"5","b":"6","c":"7","d":"8","h":"b"},
	{"n":"","i":"","q":"Rumus volume balok adalah?","a":"sisixsisixsisi","b":"sisi+sisi+sisi","c":"p.l.t","d":"p.l","h":"c"},
	{"n":"","i":"","q":"berapa rusuk dari sebuah balok?","a":"10","b":"11","c":"12","d":"13","h":"c"},
	{"n":"","i":"","q":"Sebuah balok memiliki panjang sisi adalah 4 cm, lebar = 2, tinggi = 6. Berapa luasnya","a":"48","b":"49","c":"50","d":"51","h":"a"},
	{"n":"","i":"balok.jpg","q":"Sebuah balok dengan panjang sisi AB= 7, lebar sisi BC=3. Dan volume balok tersebut adalah 105, maka berapa tingginya?","a":"5","b":"6","c":"7","d":"8","h":"a"},
	{"n":"","i":"balok.jpg","q":"Sebuah balok dengan panjang sisi AB= 24, lebar sisi BC=13. Dan volume balok tersebut adalah 4992, maka berapa tingginya?","a":"15","b":"16","c":"17","d":"18","h":"b"},
	{"n":"","i":"balok.jpg","q":"Sebuah balok dengan panjang sisi=20, lebar=15, dan tingginya= 17. Berapa volumenya?","a":"5000","b":"5050","c":"5100","d":"5150","h":"c"},
	{"n":"","i":"","q":"Sebuah balok memiliki panjang sisi adalah 4 cm, lebar = 2, tinggi = 6. Berapa kelilingnya?","a":"190","b":"191","c":"192","d":"193","h":"c"}];
	
	//cek session index soal
	var is = localStorage.getItem('is');
	if(is == null){
		localStorage.setItem('is',0);
		var is = localStorage.getItem('is');
	}
	
	var jsoal = soal1.length;
	resetSoal(jsoal,is);
	
	var data=soal1[is];
		if(data.i==''){ var img =''; }
		else{
			var img="<img src='img/"+data.i+"' width='100px'>";
		}
		
 
		$('#soal').append(
		"<div class='list-group'>"+
		"<p>"+data.n+". "+data.q+"</p>"+
		img+
		"<a class='list-group-item' onclick=cekjwb('"+data.a+"','"+data.h+"')>"+data.a+"</a>"+
		"<a class='list-group-item' onclick=cekjwb('"+data.b+"','"+data.h+"')>"+data.b+"</a>"+
		"<a class='list-group-item' onclick=cekjwb('"+data.c+"','"+data.h+"')>"+data.c+"</a>"+
		"<a class='list-group-item' onclick=cekjwb('"+data.d+"','"+data.h+"')>"+data.d+"</a>"+
		"</div>");
		
});

function cekjwb(j,k){
	if(j == k)
	{
		alert("benar");
	}else{
		alert("salah");
	}
	
	var i = localStorage.getItem('is');
	var b = parseInt(i)+1;
	localStorage.setItem('is',b);
	location.reload();
}

function resetSoal(jsoal,is){
	console.log("jumlah soal",jsoal);
	console.log("index",is);
	if(is >= jsoal)
	{
		localStorage.setItem('is',0);
	}
	//location.reload();
}
