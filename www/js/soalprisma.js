$('document').ready(function(){
	
		var noso = [0,1,2,3,4,5,6,7,8,9]
	var soal1 = [{"n":"1","i":"wrh.jpg","q":"apa nama bangun disamping?","a":"prisma_segitiga","b":"prisma_segiempat","c":"prisma_segilima","d":"prisma_segidelapan","h":"prisma_segitiga"},
	{"n":"2","i":"","q":"Berapa rusuk sebuah prisma segitiga?","a":"6","b":"7","c":"8","d":"9","h":"9"},
	{"n":"3","i":"","q":"Berapa sisi prisma segitiga?","a":"5","b":"6","c":"7","d":"8","h":"5"},
	{"n":"3","i":"","q":"Apa rumus volume prisma segitiga?","a":"pxlxt","b":"pxl","c":"luas.alas_x_t","d":"luas.alas_x_l_x_t","h":"luas.alas_x_t"},		
	{"n":"4","i":"","q":"Sebuah prisma yang mempuinyai luas alas 40 dan tinggi 12, maka berapa volume prisma tersebut?","a":"400","b":"420","c":"440","d":"480","h":"480"},
	{"n":"3","i":"","q":"Sebuah prisma yang mempuinyai luas alas 96 dan tinggi 16, maka berapa volume prisma tersebut?","a":"1536","b":"1537","c":"1538","d":"1539","h":"1536"},
	{"n":"3","i":"","q":"Berapa volume prisma jika panjangnya=8, lebar=4 dan tinggi 10?","a":"310","b":"320","c":"330","d":"340","h":"320"},		
	{"n":"5","i":"","q":"Berapa volume prisma jika panjangnya= 15, lebar 10 dan tinggi 20?","a":"3000","b":"3100","c":"3200","d":"3300","h":"3000"};
	{"n":"3","i":"","q":"Jika volume sebuah prisma adalah 350, luas alasnya 35. maka berpa tingginya?","a":"6","b":"7","c":"10","d":"11","h":"10"},	
	{"n":"3","i":"","q":"Berapa luas permukaan prisma segitiga, jika luas alas=10, keliling alas=30, dan tinggi=15??","a":"450","b":"460","c":"470","d":"480","h":"470"},
	{"n":"3","i":"","q":"Berapa luas permukaan prisma segitiga, jika luas alas=50, keliling alas=150, dan tinggi=20?","a":"3100","b":"3200","c":"3300","d":"3400","h":"3100"}],
	
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


