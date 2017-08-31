$('document').ready(function(){
		var noso = [0,1,2,3,4,5,6,7,8]
	var soal1 = [{"n":"","i":"","q":"Ada berapa macam segitiga menurut besar sudutnya?","a":"4","b":"3","c":"2","d":"1","h":"b"},
	{"n":"","i":"","q":"Apa nama segitiga yang salah satu sudutnya adalah 90 derajat?","a":"segitiga_samakaki","b":"segitiga_siku-siku","c":"segitiga_sama-sisi","d":"segitiga_tumpul","h":"b"},
	{"n":"","i":"","q":"Apa rumus luas segitiga?","a":"1/2(axt)","b":"1/2(pxl)","c":"axt","d":"pxl","h":"b"},
	{"n":"","i":"","q":"Tinggi sebuah segitiga adalah 12 cm, jika luasnya 114 cm2. Maka panjang alasnya adalah ","a":"15","b":"19","c":"25","d":"29","h":"b"},
	{"n":"","i":"","q":"Jika alas segitiga = 10 dan tingginya 5, berapa luasnya ?","a":"15","b":"25","c":"50","d":"100","h":"a"},
	{"n":"","i":"","q":"Jika luas segitiga = 25 dan tingginya 5, berapa alassnya ?","a":"10","b":"20","c":"30","d":"40","h":"a"},
	{"n":"","i":"","q":"Sebuah segitiga sama sisi memiliki keliling 60 cm. Berapa panjang sisinya","a":"5","b":"10","c":"15","d":"20","h":"d"},
	{"n":"","i":"","q":"Segitiga siku memiliki alas = 3 dan tinggi = 4. Berapa Kelilingnya.","a":"9","b":"12","c":"6","d":"7","h":"b"},
	{"n":"","i":"","q":"Luas segitiga siku-siku = 6 m. Alasnya = 3 cm. Berapa kelilingnya ?","a":"9","b":"12","c":"6","d":"7","h":"b"}];
	
	
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