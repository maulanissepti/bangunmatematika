$('document').ready(function(){
	
		var soal1 = [{"n":"1","i":"lay.png","q":"apa nama bangun di atas?","a":"belah_ketupat","b":"segitiga","c":"layang-layang","d":"persegi","h":"layang-layang"},
	{"n":"2","i":"lay.png","q":"Sudut BCD sama besar dengan sudut?","a":"ACD","b":"ABC","c":"BAD","d":"ADC","h":"BAD"},
	{"n":"3","i":"lay.png","q":"Sisi AB mempunyai sisi yang sama dengan?","a":"BC","b":"AD","c":"CD","d":"BD","h":"BC"},
	{"n":"2","i":"","q":"Aldi membuat layang-layang yang salah satu panjang diagonalnya adalah 60 cm. Luas layang-layang tersebut adalah 2400 cm. tentukan panjang diagonal yang lain?","a":"60","b":"70","c":"80","d":"90","h":"80"},
	{"n":"4","i":"lay.png","q":"Pada gambar diatas panjang AC= 14, dan panjang BD= 28, Tentukan luasnya","a":"195","b":"196","c":"197","d":"198","h":"196"},
	{"n":"4","i":"","q":"Luas layang-layang yang panjang diagonalnya 40cm dan 25cm adalah?","a":"300","b":"400","c":"500","d":"600","h":"500"},
	{"n":"4","i":"","q":"Sebuah layang-layang mempunyai luas 200 cm. panjang salah satu diagonalnya adalah 20cm. tentukan panjang diagonal yang lain.","a":"30","b":"20","c":"10","d":"15","h":"20"},
	{"n":"4","i":"","q":"Diketahui panjang diagonal-diagonal layang-layang yaitu, d1=10dm dan d2=9dm. tentukan luasnya","a":"30","b":"35","c":"40","d":"45","h":"45"},
	{"n":"5","i":"","q":"Sebuah bangun berbentuk layang-layang dengan panjang diagonal 1(d1) berukuran 18 cm dan diagonal 2 (d2) berukuran 16 cm. Tentukan luas bangun tersebut?","a":"143","b":"144","c":"145","d":"146","h":"144"}];
	
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


