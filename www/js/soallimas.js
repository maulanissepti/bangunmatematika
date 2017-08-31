$('document').ready(function(){
	
var noso = [0,1,2,3,4,5,6,7,8]
	var soal1 = [{"n":"1","i":"se4.jpg","q":"apa nama bangun disamping?","a":"prisma_segitiga","b":"prisma_segiempat","c":"limas_segitiga","d":"limas_segiempat","h":"limas_segiempat"},
	{"n":"2","i":"","q":"Apa rumus volume limas segi tiga?","a":"1/3x(1/2xpxl)xt","b":"1/3x(1/2xpxl)","c":"1/3x(pxlxt)","d":"1/2(pxl)xt","h":"1/3x(1/2xpxl)xt"},
	{"n":"3","i":"","q":"sisi alas kerucut berbentuk?","a":"lingkaran","b":"segitiga","c":"persegi","d":"jajargenjang","h":"lingkaran"},
	{"n":"3","i":"","q":"Berapa titik sudut limas segiempat?","a":"1","b":"4","c":"3","d":"5","h":""},		
	{"n":"4","i":"","q":"Ada berapa banyak rusuk kerucut??","a":"1","b":"2","c":"3","d":"4","h":"1"},
	{"n":"3","i":"","q":"Berapa volume dari limas segiempat, jika luas alas=16, tinggi=6?","a":"30","b":"31","c":"32","d":"33","h":"32"},
	{"n":"3","i":"","q":"Berapa volume dari limas segiempat, jika luas alas=60, tinggi=10?","a":"200","b":"220","c":"240","d":"260","h":"220"},		
	{"n":"5","i":"","q":"Berapa volume limas segitiga jika mepunyai panjang=12, lebar=10, tinggi=15?","a":"340","b":"345","c":"320","d":"300","h":"300"};
	{"n":"3","i":"","q":"Berapa luas permukaan kerucut jika mempunyai diameter 100, s=15?","a":"785","b":"780","c":"775","d":"770","h":"785"},	
	{"n":"3","i":"","q":"Berapa luas permukaan kerucut jika mempunyai diameter 36, s=10?","a":"376","b":"376,8","c":"377","d":"377,8","h":"376,8"}],

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


