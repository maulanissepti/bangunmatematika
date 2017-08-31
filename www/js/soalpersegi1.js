$('document').ready(function(){
	var noso = [0,1,2,3,4,5,6,7,8,9]
	var soal1 =	[{"n":"","i":"persegi.png","q":"Apa nama bangun diatas?","a":"persegi","b":"persegi_panjang","c":"segitiga","d":"jajargenjang","h":"a"},
	{"n":"","i":"persegi.png","q":"sisi manakah yang sejejar dengan sisi AB?","a":"AD","b":"BC","c":"CD","d":"AC","h":"b"},
	{"n":"","i":"","q":"Sudut manakah yang berhadapan dengan sudut ADC?","a":"ABC","b":"ACD","c":"ADB","d":"ACB","h":"a"},
	{"n":"","i":"","q":"Sebuah persegi mempunyai panjang sisi 4 cm, berapa kelilingnya?","a":"15","b":"16","c":"17","d":"18","h":"b"},
	{"n":"","i":"","q":"Jika sisi sebuah persegi adalah 10, berapa luasnya?","a":"90","b":"100","c":"110","d":"120","h":"b"},
	{"n":"","i":"","q":"Jika sisi suatu persegi = 5 berapa luasnya ?","a":"35","b":"25","c":"20","d":"15","h":"b"},
	{"n":"","i":"","q":"Ruang kelas Yulia berbentuk persegi dengan panjang sisi 55 m. Maka keliling ruang kelas Yulia adalah ….","a":"200","b":"220","c":"165","d":"160","h":"b"},
	{"n":"","i":"persegi.png","q":"Sisi manakah yang sejajar dengan sisi AB?","a":"AC","b":"AA","c":"BD","d":"CD","h":"d"},
	{"n":"","i":"","q":"Berapa besar masing-masing keempat sudut persegi?","a":"180_derajat","b":"60_derajat","c":"90_derajat","d":"45_derajat","h":"c"},
	{"n":"","i":"","q":"Ada berapa simetri lipat pada bangun persegi?","a":"4","b":"5","c":"6","d":"7","h":"a"}];
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

function shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
}