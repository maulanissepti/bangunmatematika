$('document').ready(function(){
	var noso = [0,1,2,3,4,5,6,7,8,9];
	var soal1 = [{"n":"","i":"wrh.jpg","q":"apa nama bangun disamping?","a":"prisma_segitiga","b":"prisma_segiempat","c":"prisma_segilima","d":"prisma_segidelapan","h":"a"},
	{"n":"","i":"","q":"Berapa rusuk sebuah prisma segitiga?","a":"6","b":"7","c":"8","d":"9","h":"d"},
	{"n":"","i":"","q":"Berapa sisi prisma segitiga?","a":"5","b":"6","c":"7","d":"8","h":"a"},
	{"n":"","i":"","q":"Apa rumus volume prisma segitiga?","a":"pxlxt","b":"pxl","c":"luas.alas_x_t","d":"luas.alas_x_l_x_t","h":"c"},		
	{"n":"","i":"","q":"Sebuah prisma yang mempuinyai luas alas 40 dan tinggi 12, maka berapa volume prisma tersebut?","a":"400","b":"420","c":"440","d":"480","h":"d"},
	{"n":"","i":"","q":"Sebuah prisma yang mempuinyai luas alas 96 dan tinggi 16, maka berapa volume prisma tersebut?","a":"1536","b":"1537","c":"1538","d":"1539","h":"a"},
	{"n":"","i":"","q":"Berapa volume prisma jika panjangnya=8, lebar=4 dan tinggi 10?","a":"310","b":"320","c":"330","d":"340","h":"b"},		
	{"n":"","i":"","q":"Berapa volume prisma jika panjangnya= 15, lebar 10 dan tinggi 20?","a":"3000","b":"3100","c":"3200","d":"3300","h":"a"},
	{"n":"","i":"","q":"Jika volume sebuah prisma adalah 350, luas alasnya 35. maka berpa tingginya?","a":"6","b":"7","c":"10","d":"11","h":"c"},	
	{"n":"","i":"","q":"Berapa luas permukaan prisma segitiga, jika luas alas=10, keliling alas=30, dan tinggi=15??","a":"450","b":"460","c":"470","d":"480","h":"c"},
	{"n":"","i":"","q":"Berapa luas permukaan prisma segitiga, jika luas alas=50, keliling alas=150, dan tinggi=20?","a":"3100","b":"3200","c":"3300","d":"3400","h":"a"}];
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