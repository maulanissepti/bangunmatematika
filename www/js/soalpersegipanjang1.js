$('document').ready(function(){
	var noso = [0,1,2,3,4,5,6,7,8]
	var soal1 = [{"n":"","i":"","q":"Jika panjang persegi mempunyai panjang = 7 dan lebarnya 5, berapa luasnya ?","a":"35","b":"25","c":"12","d":"30","h":"a"},
	{"n":"","i":"","q":"Jika panjang persegi mempunyai panjang = 72 dan lebarnya 54, berapa luasnya ?","a":"3587","b":"3888","c":"3890","d":"3899","h":"b"},
	{"n":"","i":"","q":"keliling dari persegi panjang yang mempunyai panjang = 10 dan lebar = 5 adalah?.","a":"20","b":"30","c":"15","d":"10","h":"b"},
	{"n":"","i":"","q":"keliling dari persegi panjang yang mempunyai panjang = 135 dan lebar = 121 adalah?.","a":"520","b":"515","c":"512","d":"510","h":"c"},
	{"n":"","i":"panjang.png","q":"Sisi manakah yang sejajar dengan sisi AB?","a":"AC","b":"AA","c":"BD","d":"CD","h":"d"},
	{"n":"","i":"","q":"Berapa besar masing-masing keempat sudut persegi panjang?","a":"180_derajat","b":"60_derajat","c":"90_derajat","d":"45_derajat","h":"c"},
	{"n":"","i":"","q":"persegi panjang yang memiliki luas 72, dan panjang 9cm, maka berapa tingginya?","a":"6","b":"7","c":"8","d":"9","h":"c"},
	{"n":"","i":"","q":"persegi panjang yang memiliki luas 900, dan lebar 25 cm, maka berapa panjangnya?","a":"36","b":"37","c":"38","d":"39","h":"a"},
	{"n":"","i":"panjang.png","q":"Ada berapa simetri lipat pada bangun persegi panjang?","a":"2","b":"3","c":"4","d":"5","h":"a"}];

	
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