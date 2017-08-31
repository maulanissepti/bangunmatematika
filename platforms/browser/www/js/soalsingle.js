$('document').ready(function(){
	var soal1 = [{"n":"1","i":"segitiga.jpg","q":"Jika alas segitiga = 10 dan tingginya 5, berapa luasnya ?","a":"15","b":"25","c":"50","d":"100","h":"15"},
	{"n":"2","i":"","q":"Jika luas segitiga = 25 dan tingginya 5, berapa alassnya ?","a":"10","b":"20","c":"30","d":"40","h":"10"},
	{"n":"3","i":"","q":"Sebuah segitiga sama sisi memiliki keliling 60 cm. Berapa panjang sisinya","a":"5","b":"10","c":"15","d":"20","h":"20"},
	{"n":"4","i":"","q":"Segitiga siku memiliki alas = 3 dan tinggi = 4. Berapa Kelilingnya.","a":"9","b":"12","c":"6","d":"7","h":"12"},
	{"n":"5","i":"segitiga.jpg","q":"Luas segitiga siku-siku = 6 m. Alasnya = 3 cm. Berapa kelilingnya ?","a":"9","b":"12","c":"6","d":"7","h":"12"}];
	
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
