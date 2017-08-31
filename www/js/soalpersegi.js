+$('document').ready(function(){
	var soal1 =
	[{"n":"5","i":"persegi.png","q":"Apa nama bangun diatas?","a":"persegi","b":"persegi_panjang","c":"segitiga","d":"jajargenjang","h":"persegi"},
	{"n":"5","i":"persegi.png","q":"sisi manakah yang sejejar dengan sisi AB?","a":"AD","b":"BC","c":"CD","d":"AC","h":"CD"},
	{"n":"5","i":"","q":"Sudut manakah yang berhadapan dengan sudut ADC?","a":"ABC","b":"ACD","c":"ADB","d":"ACB","h":"ABC"},
	{"n":"5","i":"","q":"Sebuah persegi mempunyai panjang sisi 4 cm, berapa kelilingnya?","a":"15","b":"16","c":"17","d":"18","h":"16"},
	{"n":"5","i":"","q":"Jika sisi sebuah persegi adalah 10, berapa luasnya?","a":"90","b":"100","c":"110","d":"120","h":"100"},
	{"n":"1","i":"","q":""Jika sisi suatu persegi = 5 berapa luasnya ?","a":"35","b":"25","c":"20","d":"15","h":"25"},
	{"n":"2","i":"","q":"Ruang kelas Yulia berbentuk persegi dengan panjang sisi 55 m. Maka keliling ruang kelas Yulia adalah ….","a":"200","b":"220","c":"165","d":"160","h":"220"},
	{"n":"3","i":"persegi.png","q":"Sisi manakah yang sejajar dengan sisi AB?","a":"AC","b":"AA","c":"BD","d":"CD","h":"CD"},
	{"n":"4","i":"","q":"Berapa besar masing-masing keempat sudut persegi?","a":"180_derajat","b":"60_derajat","c":"90_derajat","d":"45_derajat","h":"90_derajat"},
	{"n":"5","i":"","q":"Ada berapa simetri lipat pada bangun persegi?","a":"4","b":"5","c":"6","d":"7","h":"4"}];
	
	$.each(soal1,function(index,data){
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
