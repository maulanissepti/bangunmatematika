$('document').ready(function(){
	
	var soal1 = [{"n":"1","i":"tr.png","q":"Apa nama bangun disamping?","a":"persegi","b":"persegi_panjang","c":"belah_ketupat","d":"segitiga","h":"belah_ketupat"},
	{"n":"2","i":"","q":"Rumus keliling belah ketupat adalah?","a":"4xsisi","b":"+sisi","c":"sisixsisi","d":"sisi+sisi","h":"4xsisi"},
	{"n":"3","i":"","q":"Sebuah belah ketupat memiliki panjang sisi adalah 2 cm. Berapa kelilingnya","a":"8","b":"9","c":"10","d":"11","h":"8"},
	{"n":"4","i":"","q":"Diketahui panjang diagonal-diagonal sebuah belah ketupat berturut-turut 15 dan 12 cm. Tentukan luas belah ketupat itu.","a":"70","b":"80","c":"90","d":"100","h":"90"},
	{"n":"5","i":"","q":"6.	Sebuah belah ketupat mempunyai panjang diagonal 24 cm dan 27 cm. Luas belah ketupat tersebut adalah ","a":"324","b":"342","c":"344","d":"320","h":"324"},
	{"n":"5","i":"","q":"Panjang sisi belah ketupat adalah 32 cm. Berapa kelilingnya","a":"120","b":"124","c":"126","d":"128","h":"128"},
	{"n":"5","i":"","q":"Sebuah belah ketupat mempunyai luas 1080 cm, panjang diagonalnya 54 cm. maka berapa panjang diagonal yang lain?","a":"20","b":"40","c":"60","d":"80","h":"40"},
	{"n":"5","i":"","q":"Sebuah belah ketupat mempunyai luas 200 cm, panjang diagonalnya 25 cm. maka berapa panjang diagonal yang lain?","a":"20","b":"16","c":"9","d":"10","h":"16"},
	{"n":"5","i":"","q":"Sebuah belah ketupat memiliki panjang sisi adalah 10 cm. Berapa kelilingnya","a":"20","b":"40","c":"60","d":"80","h":"40"}];
	
	var soalacak = shuffle(soal1);
	
	$.each(soalacak,function(index,data){
		if(data.i==''){
			var img ='';
		}else{
			var img ="<span><img src='img/"+data.i+"' width='100px'></span>";
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

});

function cekjwb(j,k){
	if(j == k)
	{
		alert("Benar");
	}else{
		alert("Salah");
	}
}


