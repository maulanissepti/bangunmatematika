+$('document').ready(function(){
	var soal1 = [{"n":"1","i":"","q":"Jika panjang persegi panjang = 7 dan lebarnya 5, berapa luasnya ?","a":"35","b":"25","c":"12","d":"30","h":"35"},
	{"n":"2","i":"","q":"keliling dari persegi panjang yang mempunyai panjang = 10 dan lebar = 5 adalah?.","a":"20","b":"30","c":"15","d":10","h":"30"},
	{"n":"3","i":"panjang.png","q":"Sisi manakah yang sejajar dengan sisi AB?","a":"AC","b":"AA","c":"BD","d":"CD","h":"CD"},
	{"n":"4","i":"","q":"Berapa besar masing-masing keempat sudut persegi panjang?","a":"180 derajat","b":"60 derajat","c":"90 derajat","d":"45 derajat","h":"90 derajat"},
	{"n":"5","i":"segitiga.jpg","q":"Ada berapa simetri lipat pada bangun persegi?","a":"2","b":"3","c":"4","d":"5","h":"2"}];
	
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
