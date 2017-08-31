$('document').ready(function(){
var soal1 = [{"n":"44","i":"balok.jpg","q":"Berapa sisi sebuah balok?","a":"5","b":"6","c":"7","d":"8","h":"b"},
	{"n":"1","i":"","q":"Rumus volume balok adalah?","a":"sisixsisixsisi","b":"sisi+sisi+sisi","c":"p.l.t","d":"p.l","h":"c"},
	{"n":"2","i":"","q":"berapa rusuk dari sebuah balok?","a":"10","b":"11","c":"12","d":"13","h":"c"},
	{"n":"3","i":"","q":"Sebuah balok memiliki panjang sisi adalah 4 cm, lebar = 2, tinggi = 6. Berapa luasnya","a":"48","b":"49","c":"50","d":"51","h":"a"},
	{"n":"4","i":"balok.jpg","q":"Sebuah balok dengan panjang sisi AB= 7, lebar sisi BC=3. Dan volume balok tersebut adalah 105, maka berapa tingginya?","a":"5","b":"6","c":"7","d":"8","h":"a"},
	{"n":"5","i":"balok.jpg","q":"Sebuah balok dengan panjang sisi AB= 24, lebar sisi BC=13. Dan volume balok tersebut adalah 4992, maka berapa tingginya?","a":"15","b":"16","c":"17","d":"18","h":"b"},
	{"n":"6","i":"balok.jpg","q":"Sebuah balok dengan panjang sisi=20, lebar=15, dan tingginya= 17. Berapa volumenya?","a":"5000","b":"5050","c":"5100","d":"5150","h":"c"},
	{"n":"7","i":"","q":"Sebuah balok memiliki panjang sisi adalah 4 cm, lebar = 2, tinggi = 6. Berapa kelilingnya?","a":"190","b":"191","c":"192","d":"193","h":"c"},
	{"n":"8","i":"k.jpg","q":"Berapa sisi sebuah kubus?","a":"5","b":"6","c":"7","d":"8","h":"b"},
	{"n":"9","i":"","q":"Rumus volume kubus adalah?","a":"sisixsisixsisi","b":"sisi+sisi+sisi","c":"sisixsisi","d":"sisi+sisi","h":"a"},
	{"n":"10","i":"","q":"Sebuah kubus memiliki panjang sisi adalah 2 cm. Berapa kelilingnya","a":"8","b":"9","c":"10","d":"11","h":"a"},
	{"n":"11","i":"","q":"Bak mandi Arman berbentuk kubus. Bak tersebut berisi air sampai penuh. Air yang dimasukkan 216 liter. Tentukanlah panjang sisi bak mandi Arman tersebut","a":"214","b":"215","c":"216","d":"217","h":"c"},
	{"n":"12","i":"","q":"Titik sudut pada sebuah kubus yaitu?","a":"9","b":"8","c":"7","d":"6","h":"b"},
	{"n":"13","i":"se4.jpg","q":"apa nama bangun disamping?","a":"prisma_segitiga","b":"prisma_segiempat","c":"limas_segitiga","d":"limas_segiempat","h":"d"},
	{"n":"14","i":"","q":"Apa rumus volume limas segi tiga?","a":"1/3x(1/2xpxl)xt","b":"1/3x(1/2xpxl)","c":"1/3x(pxlxt)","d":"1/2(pxl)xt","h":"a"},
	{"n":"15","i":"","q":"sisi alas kerucut berbentuk?","a":"lingkaran","b":"segitiga","c":"persegi","d":"jajargenjang","h":"a"},
	{"n":"16","i":"","q":"Berapa titik sudut limas segiempat?","a":"1","b":"4","c":"3","d":"5","h":"d"},		
	{"n":"17","i":"","q":"Ada berapa banyak rusuk kerucut??","a":"1","b":"2","c":"3","d":"4","h":"a"},
	{"n":"18","i":"","q":"Berapa volume dari limas segiempat, jika luas alas=16, tinggi=6?","a":"30","b":"31","c":"32","d":"33","h":"c"},
	{"n":"19","i":"","q":"Berapa volume dari limas segiempat, jika luas alas=60, tinggi=10?","a":"200","b":"220","c":"240","d":"260","h":"b"},		
	{"n":"20","i":"","q":"Berapa volume limas segitiga jika mepunyai panjang=12, lebar=10, tinggi=15?","a":"340","b":"345","c":"320","d":"300","h":"d"},
	{"n":"21","i":"","q":"Berapa luas permukaan kerucut jika mempunyai diameter 100, s=15?","a":"785","b":"780","c":"775","d":"770","h":"a"},	
	{"n":"22","i":"","q":"Berapa luas permukaan kerucut jika mempunyai diameter 36, s=10?","a":"376","b":"376,8","c":"377","d":"377,8","h":"b"},
	{"n":"23","i":"wrh.jpg","q":"apa nama bangun disamping?","a":"prisma_segitiga","b":"prisma_segiempat","c":"prisma_segilima","d":"prisma_segidelapan","h":"a"},
	{"n":"24","i":"","q":"Berapa rusuk sebuah prisma segitiga?","a":"6","b":"7","c":"8","d":"9","h":"d"},
	{"n":"25","i":"","q":"Berapa sisi prisma segitiga?","a":"5","b":"6","c":"7","d":"8","h":"a"},
	{"n":"26","i":"","q":"Apa rumus volume prisma segitiga?","a":"pxlxt","b":"pxl","c":"luas.alas_x_t","d":"luas.alas_x_l_x_t","h":"c"},		
	{"n":"27","i":"","q":"Sebuah prisma yang mempuinyai luas alas 40 dan tinggi 12, maka berapa volume prisma tersebut?","a":"400","b":"420","c":"440","d":"480","h":"d"},
	{"n":"28","i":"","q":"Sebuah prisma yang mempuinyai luas alas 96 dan tinggi 16, maka berapa volume prisma tersebut?","a":"1536","b":"1537","c":"1538","d":"1539","h":"a"},
	{"n":"29","i":"","q":"Berapa volume prisma jika panjangnya=8, lebar=4 dan tinggi 10?","a":"310","b":"320","c":"330","d":"340","h":"b"},		
	{"n":"30","i":"","q":"Berapa volume prisma jika panjangnya= 15, lebar 10 dan tinggi 20?","a":"3000","b":"3100","c":"3200","d":"3300","h":"a"},
	{"n":"31","i":"","q":"Jika volume sebuah prisma adalah 350, luas alasnya 35. maka berpa tingginya?","a":"6","b":"7","c":"10","d":"11","h":"c"},	
	{"n":"32","i":"","q":"Berapa luas permukaan prisma segitiga, jika luas alas=10, keliling alas=30, dan tinggi=15??","a":"450","b":"460","c":"470","d":"480","h":"c"},
	{"n":"33","i":"","q":"Berapa luas permukaan prisma segitiga, jika luas alas=50, keliling alas=150, dan tinggi=20?","a":"3100","b":"3200","c":"3300","d":"3400","h":"a"},
	{"n":"34","i":"wr.jpg","q":"apa nama bangun disamping?","a":"prisma_segitiga","b":"prisma_segiempat","c":"prisma_segilima","d":"tabung","h":"d"},
	{"n":"35","i":"","q":"Apa rumus volume tabung?","a":"πxrxrxt","b":"πxrxt","c":"πxlxt","d":"πxpxt","h":"a"},
	{"n":"36","i":"","q":"Berapa sisi sebuah tabung?","a":"3","b":"4","c":"5","d":"6","h":"a"},
	{"n":"37","i":"","q":"Berapa titik sudut tabung?","a":"1","b":"2","c":"3","d":"0","h":"d"},		
	{"n":"38","i":"","q":"Berapa nilai π?","a":"3,11","b":"3,12","c":"3,13","d":"3,14","h":"d"},
	{"n":"39","i":"","q":"Berapa volume tabung jika r=5, t=10?","a":"777","b":"786","c":"790","d":"799","h":"b"},
	{"n":"40","i":"","q":"Berapa volume tabung jika r=10, t=15?","a":"4714","b":"4724","c":"4730","d":"4740","h":"a"},		
	{"n":"41","i":"","q":"Jika diameter tabung=10 dan tinggi=10. Berapa volume tabung?","a":"786","b":"787","c":"789","d":"790","h":"a"},
	{"n":"42","i":"","q":"Jika diameter tabung=20 dan tinggi=20. Berapa volume tabung?","a":"6280","b":"6286","c":"6290","d":"6295","h":"b"},	
	{"n":"43","i":"","q":"Selimut tabung disebut juga?","a":"sisi_panjang","b":"sisi_lingkaran","c":"sisi_lengkung","d":"sisi_sudut","h":"c"}];
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
		"<a class='list-group-item' onclick=cekjwb('"+data.a+"','"+data.h+"')>"+data.a+"</a>"+
		"<a class='list-group-item' onclick=cekjwb('"+data.b+"','"+data.h+"')>"+data.b+"</a>"+
		"<a class='list-group-item' onclick=cekjwb('"+data.c+"','"+data.h+"')>"+data.c+"</a>"+
		"<a class='list-group-item' onclick=cekjwb('"+data.d+"','"+data.h+"')>"+data.d+"</a>"+
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
