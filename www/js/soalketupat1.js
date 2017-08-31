$('document').ready(function(){
		var noso = [0,1,2,3,4,5,6,7,8]
	var soal1 = [{"n":"","i":"tr.png","q":"Apa nama bangun disamping?","a":"persegi","b":"persegi_panjang","c":"belah_ketupat","d":"segitiga","h":"c"},
	{"n":"","i":"","q":"Rumus keliling belah ketupat adalah?","a":"4xsisi","b":"+sisi","c":"sisixsisi","d":"sisi+sisi","h":"a"},
	{"n":"","i":"","q":"Sebuah belah ketupat memiliki panjang sisi adalah 2 cm. Berapa kelilingnya","a":"8","b":"9","c":"10","d":"11","h":"8"},
	{"n":"","i":"","q":"Diketahui panjang diagonal-diagonal sebuah belah ketupat berturut-turut 15 dan 12 cm. Tentukan luas belah ketupat itu.","a":"70","b":"80","c":"90","d":"100","h":"c"},
	{"n":"","i":"","q":"6.	Sebuah belah ketupat mempunyai panjang diagonal 24 cm dan 27 cm. Luas belah ketupat tersebut adalah ","a":"324","b":"342","c":"344","d":"320","h":"a"},
	{"n":"","i":"","q":"Panjang sisi belah ketupat adalah 32 cm. Berapa kelilingnya","a":"120","b":"124","c":"126","d":"128","h":"d"},
	{"n":"","i":"","q":"Sebuah belah ketupat mempunyai luas 1080 cm, panjang diagonalnya 54 cm. maka berapa panjang diagonal yang lain?","a":"20","b":"40","c":"60","d":"80","h":"b"},
	{"n":"","i":"","q":"Sebuah belah ketupat mempunyai luas 200 cm, panjang diagonalnya 25 cm. maka berapa panjang diagonal yang lain?","a":"20","b":"16","c":"9","d":"10","h":"b"},
	{"n":"","i":"","q":"Sebuah belah ketupat memiliki panjang sisi adalah 10 cm. Berapa kelilingnya","a":"20","b":"40","c":"60","d":"80","h":"b"}];
	
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