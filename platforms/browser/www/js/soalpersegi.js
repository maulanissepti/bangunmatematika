+$('document').ready(function(){
	var soal1 = [{"n":"1","i":"","q":""Jika sisi suatu persegi = 5 berapa luasnya ?","a":"35","b":"25","c":"20","d":"15","h":"25"},
	{"n":"2","i":"","q":"Ruang kelas Yulia berbentuk persegi dengan panjang sisi 55 m. Maka keliling ruang kelas Yulia adalah ….","a":"200","b":"220","c":"165","d":"160","h":"220"},
	{"n":"3","i":"persegi.png","q":"Sisi manakah yang sejajar dengan sisi AB?","a":"AC","b":"AA","c":"BD","d":"CD","h":"CD"},
	{"n":"4","i":"","q":"Berapa besar masing-masing keempat sudut persegi?","a":"180 derajat","b":"60 derajat","c":"90 derajat","d":"45 derajat","h":"90 derajat"},
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
