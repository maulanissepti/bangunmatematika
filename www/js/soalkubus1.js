$('document').ready(function(){
	var soal1 = [{"n":"","i":"k.jpg","q":"Berapa sisi sebuah kubus?","a":"5","b":"6","c":"7","d":"8","h":"b"},
	{"n":"","i":"","q":"Rumus volume kubus adalah?","a":"sisixsisixsisi","b":"sisi+sisi+sisi","c":"sisixsisi","d":"sisi+sisi","h":"c"},
	{"n":"","i":"","q":"Sebuah kubus memiliki panjang sisi adalah 2 cm. Berapa kelilingnya","a":"8","b":"9","c":"10","d":"11","h":"a"},
	{"n":"","i":"","q":"Bak mandi Arman berbentuk kubus. Bak tersebut berisi air sampai penuh. Air yang dimasukkan 216 liter. Tentukanlah panjang sisi bak mandi Arman tersebut","a":"214","b":"215","c":"216","d":"217","h":"c"},
	{"n":"","i":"","q":"Contoh benda berbentuk kubus?","a":"dadu","b":"bola","c":"meja","d":"gelas","h":"a"},
	{"n":"","i":"","q":"Sebuah kubus dengan sisi 15, berapa volumenya?","a":"3370","b":"3371","c":"3379","d":"3375","h":"d"},
	{"n":"","i":"","q":"Sebuah kubus dengan sisi 7, berapa luasnya?","a":"294","b":"290","c":"292","d":"293","h":"a"},
	{"n":"","i":"","q":"Sebuah kubus dengan sisi 9, berapa kelilingnya?","a":"105","b":"106","c":"107","d":"108","h":"d"},
	{"n":"","i":"","q":"Titik sudut pada sebuah kubus yaitu?","a":"9","b":"8","c":"7","d":"6","h":"b"},
	{"n":"","i":"k.jpg","q":"Yang berhadapan dengan sisi ABCD adalah?","a":"ADGE","b":"BCHF","c":"EFHG","d":"ABCD","h":"c"}]
	
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

