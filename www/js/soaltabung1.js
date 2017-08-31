$('document').ready(function(){
	var noso = [0,1,2,3,4,5,6,7,8,9];
	var soal1 = [{"n":"","i":"wr.jpg","q":"apa nama bangun disamping?","a":"prisma_segitiga","b":"prisma_segiempat","c":"prisma_segilima","d":"tabung","h":"d"},
	{"n":"","i":"","q":"Apa rumus volume tabung?","a":"πxrxrxt","b":"πxrxt","c":"πxlxt","d":"πxpxt","h":"a"},
	{"n":"","i":"","q":"Berapa sisi sebuah tabung?","a":"3","b":"4","c":"5","d":"6","h":"a"},
	{"n":"","i":"","q":"Berapa titik sudut tabung?","a":"1","b":"2","c":"3","d":"0","h":"d"},		
	{"n":"","i":"","q":"Berapa nilai π?","a":"3,11","b":"3,12","c":"3,13","d":"3,14","h":"d"},
	{"n":"","i":"","q":"Berapa volume tabung jika r=5, t=10?","a":"777","b":"786","c":"790","d":"799","h":"b"},
	{"n":"","i":"","q":"Berapa volume tabung jika r=10, t=15?","a":"4714","b":"4724","c":"4730","d":"4740","h":"a"},		
	{"n":"","i":"","q":"Jika diameter tabung=10 dan tinggi=10. Berapa volume tabung?","a":"786","b":"787","c":"789","d":"790","h":"a"},
	{"n":"","i":"","q":"Jika diameter tabung=20 dan tinggi=20. Berapa volume tabung?","a":"6280","b":"6286","c":"6290","d":"6295","h":"b"},	
	{"n":"","i":"","q":"Selimut tabung disebut juga?","a":"sisi_panjang","b":"sisi_lingkaran","c":"sisi_lengkung","d":"sisi_sudut","h":"c"}];
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