$('document').ready(function(){
	
		var noso = [0,1,2,3,4,5,6,7,8]
	var soal1 = [{"n":"1","i":"wr.jpg","q":"apa nama bangun disamping?","a":"prisma_segitiga","b":"prisma_segiempat","c":"prisma_segilima","d":"tabung","h":"tabung"},
	{"n":"2","i":"","q":"Apa rumus volume tabung?","a":"πxrxrxt","b":"πxrxt","c":"πxlxt","d":"πxpxt","h":"πxrxrxt"},
	{"n":"3","i":"","q":"Berapa sisi sebuah tabung?","a":"3","b":"4","c":"5","d":"6","h":"3"},
	{"n":"3","i":"","q":"Berapa titik sudut tabung?","a":"1","b":"2","c":"3","d":"0","h":"0"},		
	{"n":"4","i":"","q":"Berapa nilai π?","a":"3,11","b":"3,12","c":"3,13","d":"3,14","h":"3,14"},
	{"n":"3","i":"","q":"Berapa volume tabung jika r=5, t=10?","a":"777","b":"786","c":"790","d":"799","h":"786"},
	{"n":"3","i":"","q":"Berapa volume tabung jika r=10, t=15?","a":"4714","b":"4724","c":"4730","d":"4740","h":"4714"},		
	{"n":"5","i":"","q":"Jika diameter tabung=10 dan tinggi=10. Berapa volume tabung?","a":"786","b":"787","c":"789","d":"790","h":"786"};
	{"n":"3","i":"","q":"Jika diameter tabung=20 dan tinggi=20. Berapa volume tabung?","a":"6280","b":"6286","c":"6290","d":"6295","h":"6286"},	
	{"n":"3","i":"","q":"Selimut tabung disebut juga?","a":"sisi_panjang","b":"sisi_lingkaran","c":"sisi_lengkung","d":"sisi_sudut","h":"sisi_lengkung"}],

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


