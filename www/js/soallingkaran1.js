$('document').ready(function(){
		var noso = [0,1,2,3,4,5,6,7,8]
		var soal1 = [{"n":"","i":"hy.png","q":"apa nama bangun di atas?","a":"belah_ketupat","b":"segitiga","c":"lingkaran","d":"persegi","h":"c"},
	{"n":"","i":"","q":"radius(r) disebut juga?","a":"sudut","b":"sisi","c":"diameter","d":"jari-jari","h":"d"},
	{"n":"","i":"","q":"Sebuah roda sepeda memiliki jari-jari 28 cm, berapa kelilingnya??","a":"88","b":"116","c":"176","d":"144","h":"c"},
	{"n":"","i":"","q":"Berapa cm diameter (d) lingkaran, jika radius (r)= 15","a":"10","b":"20","c":"30","d":"40","h":"c"},
	{"n":"","i":"","q":"Berapa luas lingkaran jika d=14?","a":"308","b":"616","c":"309","d":"617","h":"a"},
	{"n":"","i":"","q":"Sebuah meja berbentuk lingkaran dengan diameter 126 cm. Hitunglah luasnya","a":"12,474","b":"13,474","c":"14,474","d":"15,474","h":"a"},
	{"n":"","i":"","q":"Sebuah lingkaran dengan luas 616 cm. bera cm jari-jarinya?","a":"14","b":"16","c":"20","d":"24","h":"a"},
	{"n":"","i":"","q":"Berapa luas lingkaran jika r=7?","a":"150","b":"154","c":"152","d":"156","h":"b"},
	{"n":"","i":"","q":"berapa luas suatu lingkaran jika radius(r) = 14","a":"615","b":"616","c":"617","d":"618","h":"b"}];
		
	
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