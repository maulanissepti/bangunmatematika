$('document').ready(function(){
		var soal1 = [{"n":"1","i":"j.png","q":"Sudut manakah yang sama besar dengan sudut DAB adalah?","a":"sudut_DCB","b":"sudut_ADC","c":"sudut_ABC","d":"sudut_DAB","h":"a"},
	{"n":"2","i":"","q":"dalah?","a":"sisixsisixsisi","b":"sisi+sisi+sisi","c":"sisixsisi","d":"sisi+sisi","h":"c"},
	{"n":"3","i":"","q":"?","a":"8","b":"9","c":"10","d":"11","h":"a"},
	{"n":"4","i":"","q":"?","a":"214","b":"215","c":"216","d":"217","h":"c"},
	{"n":"5","i":"","q":"?","a":"9","b":"8","c":"7","d":"6","h":"b"}];
	
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

