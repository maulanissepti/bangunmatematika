$('document').ready(function(){
	var noso = [0,1,2,3,4,5,6,7,8]
	var soal1 = [{"n":"","i":"se4.jpg","q":"apa nama bangun disamping?","a":"prisma_segitiga","b":"prisma_segiempat","c":"limas_segitiga","d":"limas_segiempat","h":"d"},
	{"n":"","i":"","q":"Apa rumus volume limas segi tiga?","a":"1/3x(1/2xpxl)xt","b":"1/3x(1/2xpxl)","c":"1/3x(pxlxt)","d":"1/2(pxl)xt","h":"b"},
	{"n":"","i":"","q":"sisi alas kerucut berbentuk?","a":"lingkaran","b":"segitiga","c":"persegi","d":"jajargenjang","h":"a"},
	{"n":"","i":"","q":"Berapa titik sudut limas segiempat?","a":"1","b":"4","c":"3","d":"5","h":"d"},		
	{"n":"","i":"","q":"Ada berapa banyak rusuk kerucut??","a":"1","b":"2","c":"3","d":"4","h":"a"},
	{"n":"","i":"","q":"Berapa volume dari limas segiempat, jika luas alas=16, tinggi=6?","a":"30","b":"31","c":"32","d":"33","h":"c"},
	{"n":"","i":"","q":"Berapa volume dari limas segiempat, jika luas alas=60, tinggi=10?","a":"200","b":"220","c":"240","d":"260","h":"b"},		
	{"n":"","i":"","q":"Berapa volume limas segitiga jika mepunyai panjang=12, lebar=10, tinggi=15?","a":"340","b":"345","c":"320","d":"300","h":"d"},
	{"n":"","i":"","q":"Berapa luas permukaan kerucut jika mempunyai diameter 100, s=15?","a":"785","b":"780","c":"775","d":"770","h":"a"},	
	{"n":"","i":"","q":"Berapa luas permukaan kerucut jika mempunyai diameter 36, s=10?","a":"376","b":"376,8","c":"377","d":"377,8","h":"b"}];
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