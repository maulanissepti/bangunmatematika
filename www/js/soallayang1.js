$('document').ready(function(){
		var noso = [0,1,2,3,4,5,6,7,8]
		var soal1 = [{"n":"","i":"lay.png","q":"apa nama bangun di atas?","a":"belah_ketupat","b":"segitiga","c":"layang-layang","d":"persegi","h":"c"},
	{"n":"","i":"lay.png","q":"Sudut BCD sama besar dengan sudut?","a":"ACD","b":"ABC","c":"BAD","d":"ADC","h":"c"},
	{"n":"","i":"lay.png","q":"Sisi AB mempunyai sisi yang sama dengan?","a":"BC","b":"AD","c":"CD","d":"BD","h":"a"},
	{"n":"","i":"","q":"Aldi membuat layang-layang yang salah satu panjang diagonalnya adalah 60 cm. Luas layang-layang tersebut adalah 2400 cm. tentukan panjang diagonal yang lain?","a":"60","b":"70","c":"80","d":"90","h":"c"},
	{"n":"","i":"lay.png","q":"Pada gambar diatas panjang AC= 14, dan panjang BD= 28, Tentukan luasnya","a":"195","b":"196","c":"197","d":"198","h":"b"},
	{"n":"","i":"","q":"Luas layang-layang yang panjang diagonalnya 40cm dan 25cm adalah?","a":"300","b":"400","c":"500","d":"600","h":"c"},
	{"n":"","i":"","q":"Sebuah layang-layang mempunyai luas 200 cm. panjang salah satu diagonalnya adalah 20cm. tentukan panjang diagonal yang lain.","a":"30","b":"20","c":"10","d":"15","h":"b"},
	{"n":"","i":"","q":"Diketahui panjang diagonal-diagonal layang-layang yaitu, d1=10dm dan d2=9dm. tentukan luasnya","a":"30","b":"35","c":"40","d":"45","h":"d"},
	{"n":"","i":"","q":"Sebuah bangun berbentuk layang-layang dengan panjang diagonal 1(d1) berukuran 18 cm dan diagonal 2 (d2) berukuran 16 cm. Tentukan luas bangun tersebut?","a":"143","b":"144","c":"145","d":"146","h":"b"}];
	
	
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