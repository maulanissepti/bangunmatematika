$('document').ready(function(){
var soal1 = [{"n":"1","i":"","q":"Panjang dari dua garis sejajar trapesium 46 cm. jika tinggi trapesium tersebut 12 cm, maka luasnya adalah?","a":"275","b":"276","c":"277","d":"278","h":"279"},
	{"n":"2","i":"","q":"Sebuah atap bangunan terdiri dari 4 trapesium dengan ukuran panjang sisi sejajar 4 m dan 10  m. Tinggi trapesium 3 m. Trapesium tersebut di cat dengan biaya Rp.7.000,00 tiap m2. Berapakah biaya yang dikeluarkan untuk mengecat seluruh trapesium tersebut?","a":"Rp.588.000","b":"Rp.589.000","c":"Rp.590.000","d":"Rp.591.000","h":"Rp.588.000"},
	{"n":"3","i":"trapesium.png","q":"Sisi manakah yang sejajar dengan sisi AD?","a":"CD","b":"AC","c":"BD","d":"BC","h":"BC"},
	{"n":"4","i":"","q":"Panjang dari dua garis sejajar trapesium 20 cm. jika tinggi trapesium tersebut 5 cm, maka luasnya adalah?","a":"50","b":"60","c":"70","d":"80","h":"50"},
	{"n":"5","i":"","q":"Ada berapa macam bangun trapesium?","a":"1","b":"2","c":"3","d":"4","h":"3"}];
	
	
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
