$('document').ready(function(){
	var noso = [0,1,2,3,4,5,6,7,8,9]
		var soal1 = [{"n":"","i":"mh.jpg","q":"Berapa sisi sebuah balok?","a":"5","b":"6","c":"7","d":"8","h":"b"},
		{"n":"","i":"mh.jpg","q":"Berapa jumlah rusuk sebuah balok?","a":"9","b":"10","c":"11","d":"12","h":"d"},
		{"n":"","i":"mh.jpg","q":"Berapa titik sudut sebuah balok?","a":"8","b":"9","c":"10","d":"11","h":"8"},
	{"n":"","i":"","q":"Rumus volume kubus adalah?","a":"sisixsisixsisi","b":"sisi+sisi+sisi","c":"sisixsisi","d":"sisi+sisi","h":"c"},
	{"n":"","i":"","q":"Sebuah kubus memiliki panjang sisi adalah 2 cm. Berapa kelilingnya","a":"8","b":"9","c":"10","d":"11","h":"a"},
	{"n":"","i":"","q":"Bak mandi Arman berbentuk kubus. Bak tersebut berisi air sampai penuh. Air yang dimasukkan 216 liter. Tentukanlah panjang sisi bak mandi Arman tersebut","a":"214","b":"215","c":"216","d":"217","h":"c"},
	{"n":"","i":"","q":"memiliki volme 672 dengan panjang 12 lebar 8 , maka tentukan tingginnya ?","a":"9","b":"8","c":"7","d":"6","h":"c"},
	{"n":"","i":"","q":"suatu balok memiliki panjang 10 cm lebar 5 cm dan tinggi 8 cm , maka berapakah volum balok ?","a":"300","b":"400","c":"500","d":"600","h":"b"},
	{"n":"","i":"","q":"Diketahui panjang= 5 cm, lebar= 3 cm, dan tinggi= 4 cm, luas permukaanya adalah?","a":"93","b":"94","c":"95","d":"96","h":"b"},
	{"n":"","i":"","q":"Titik sudut pada sebuah kubus yaitu?","a":"9","b":"8","c":"7","d":"6","h":"b"}];
	var acaksoal = shuffle(noso);
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

