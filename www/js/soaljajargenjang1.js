$('document').ready(function(){
	var noso = [0,1,2,3,4,5,6,7,8,9]
	var soal1 = [{"n":"1","i":"j.png","q":"Sudut manakah yang sama besar dengan sudut DAB adalah?","a":"sudut_DCB","b":"sudut_ADC","c":"sudut_ABC","d":"sudut_DAB","h":"a"},
	{"n":"","i":"j.png","q":"sisi manakah yang sejajar dengan AD","a":"BC","b":"AC","c":"BD","d":"AB","h":"a"},
	{"n":"","i":"","q":"hitunglah keliling suatu jajargenjang yang memiliki sisi 15 cm dan 21 cm.","a":"70","b":"71","c":"72","d":"73","h":"c"},
	{"n":"","i":"","q":"hitunglah keliling suatu jajargenjang yang memiliki sisi 45 cm dan 56 cm.","a":"200","b":"201","c":"202","d":"203","h":"c"},
	{"n":"","i":"","q":"hitunglah luas jajargenjang dengan alas 26 cm dan tinggi 17 cm.","a":"442","b":"445","c":"412","d":"410","h":"a"},
	{"n":"","i":"","q":"suatu jajargenjang memiliki keliling 52 cm. Jika panjang salah satu sisinya 16 cm, hitunglah panjang sisi yang lainnya.","a":"10","b":"11","c":"12","d":"13","h":"a"},
	{"n":"","i":"","q":"taman di depan rumah Pak Budi berbentuk jajargenjang. Panjang sisi yang berbeda 8 meter dan 12 meter. Disekeliling taman tersebut dipasang lampu taman tiap 4 meter. Berapa banyak lampu yang terpasang???","a":"10","b":"11","c":"12","d":"13","h":"a"},
	{"n":"","i":"","q":"suatu jajargenjang memiliki luas	1764 dm2 dan panjangnya 63 dm. Tinggi jajargenjang tersebut adalah … cm.","a":"260","b":"270","c":"280","d":"290","h":"c"},
	{"n":"","i":"","q":"pada saat olahraga lari, Budi mengelilingi lapangan yang berbentuk jajargenjang dengan panjang alas 25 meter dan lebar sisi 20 meter. Budi berlari sebanyak 4 kali putaran. Berapakah panjang lintasan lari yang dilakukan Budi ???","a":"360","b":"370","c":"380","d":"390","h":"a"},
	{"n":"","i":"","q":"hitunglah luas jajargenjang dengan alas 34 cm dan tinggi 27 cm.","a":"912","b":"915","c":"916","d":"918","h":"d"}];
	
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
	//alert(j+'-'+k);
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