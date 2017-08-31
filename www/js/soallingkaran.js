$('document').ready(function(){
	
var soal1 = [{"n":"1","i":"hy.png","q":"apa nama bangun di atas?","a":"belah_ketupat","b":"segitiga","c":"lingkaran","d":"persegi","h":"lingkaran"},
	{"n":"2","i":"","q":"radius(r) disebut juga?","a":"sudut","b":"sisi","c":"diameter","d":"jari-jari","h":"jari-jari"},
	{"n":"3","i":"","q":"Sebuah roda sepeda memiliki jari-jari 28 cm, berapa kelilingnya??","a":"88","b":"116","c":"176","d":"144","h":"176"},
	{"n":"4","i":"","q":"Berapa cm diameter (d) lingkaran, jika radius (r)= 15","a":"10","b":"20","c":"30","d":"40","h":"30"},
	{"n":"4","i":"","q":"Berapa luas lingkaran jika d=14?","a":"308","b":"616","c":"309","d":"617","h":"308"},
	{"n":"4","i":"","q":"Sebuah meja berbentuk lingkaran dengan diameter 126 cm. Hitunglah luasnya","a":"12,474","b":"13,474","c":"14,474","d":"15,474","h":"12,474"},
	{"n":"4","i":"","q":"Sebuah lingkaran dengan luas 616 cm. bera cm jari-jarinya?","a":"14","b":"16","c":"20","d":"24","h":"14"},
	{"n":"4","i":"","q":"Berapa luas lingkaran jika r=7?","a":"150","b":"154","c":"152","d":"156","h":"154"},
	{"n":"5","i":"","q":"berapa luas suatu lingkaran jika radius(r) = 14","a":"615","b":"616","c":"617","d":"618","h":"616"}];
	
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


$('document').ready(function(){
var soal1 = [{"n":"1","i":"hy.png","q":"apa nama bangun di atas?","a":"belah_ketupat","b":"segitiga","c":"lingkaran","d":"persegi","h":"lingkaran"},
	{"n":"2","i":"","q":"radius(r) disebut juga?","a":"sudut","b":"sisi","c":"diameter","d":"jari-jari","h":"jari-jari"},
	{"n":"3","i":"","q":"Sebuah roda sepeda memiliki jari-jari 21 cm, berapa kelilingnya??","a":"12","b":"13","c":"14","d":"15","h":"12"},
	{"n":"4","i":"","q":"Berapa cm diameter (d) lingkaran jika radius (r)= 15","a":"10","b":"20","c":"30","d":"40","h":"30"},
	{"n":"5","i":"","q":"berap luas suatu lingkaran jika radius(r) = 14","a":"615","b":"616","c":"617","d":"618","h":"616"}];
	
	
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
