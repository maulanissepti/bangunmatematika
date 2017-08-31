$('document').ready(function(){
	var noso = [0,1,2,3,4,5,6,7,8]
var soal1 = [{"n":"1","i":"","q":"Panjang dari dua garis sejajar trapesium 46 cm. jika tinggi trapesium tersebut 12 cm, maka luasnya adalah?","a":"275","b":"276","c":"277","d":"278","h":"b"},
	{"n":"","i":"","q":"Sebuah atap bangunan terdiri dari 4 trapesium dengan ukuran panjang sisi sejajar 4 m dan 10  m. Tinggi trapesium 3 m. Trapesium tersebut di cat dengan biaya Rp.7.000,00 tiap m2. Berapakah biaya yang dikeluarkan untuk mengecat seluruh trapesium tersebut?","a":"Rp.588.000","b":"Rp.589.000","c":"Rp.590.000","d":"Rp.591.000","h":"a"},
	{"n":"","i":"trapesium.png","q":"Sisi manakah yang sejajar dengan sisi AD?","a":"CD","b":"AC","c":"BD","d":"BC","h":"d"},
	{"n":"","i":"","q":"Panjang dari dua garis sejajar trapesium 20 cm. jika tinggi trapesium tersebut 5 cm, maka luasnya adalah?","a":"50","b":"60","c":"70","d":"80","h":"a"},
	{"n":"","i":"","q":"Sebuah trapesium memiliki panjang sisi-sisi sejajar berturut-turut 4cm dan 10cm serta tinggi 6cm. berapa luas trapesium tersebut?","a":"33","b":"35","c":"37","d":"39","h":"b"},
	{"n":"","i":"","q":"Sebuah trapesium yang besar salah satu sudutnya adalah 90 derajat adalah?","a":"Trapesium_samasisi","b":"Trapesium_samakaki","c":"Trapesium_sembarang","d":"Trapesium_siku-siku","h":"d"},
	{"n":"","i":"","q":"Sebuah benda berbentuk trapesium dengan sisi yang sejajar dalah 15 cm dan 10 cm, dan tinggi 8cm. Luas trapesium tersbut adalah?","a":"100","b":"102","c":"103","d":"104","h":"a"},
	{"n":"","i":"","q":"Ada berapa macam bangun trapesium?","a":"1","b":"2","c":"3","d":"4","h":"c"}];
	var acaksoal = shuffle(noso);
	
	//cek session index soal
	var is = localStorage.getItem('is');
	if(is == null){
		localStorage.setItem('is',0);
		var is = localStorage.getItem('is');
	}
	
	var jsoal = soal1.length;
	resetSoal(jsoal,is);
	
	var ns = noso[is];
	var data=soal1[ns];
		if(data.i==''){ var img =''; }
		else{
			var img="<img src='img/"+data.i+"' width='100px'>";
		}
		
 
		$('#soal').append(
		"<div class='list-group'>"+
		"<p>"+data.n+". "+data.q+"</p>"+
		img+
	"<a class='list-group-item' onclick=cekjwb('a','"+data.h+"')>"+data.a+"</a>"+
		"<a class='list-group-item' onclick=cekjwb('b','"+data.h+"')>"+data.b+"</a>"+
		"<a class='list-group-item' onclick=cekjwb('c','"+data.h+"')>"+data.c+"</a>"+
		"<a class='list-group-item' onclick=cekjwb('d','"+data.h+"')>"+data.d+"</a>"+
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

function shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};