$('document').ready(function(){
	var soal1 = [{"n":"73","i":"persegi.png","q":"Apa nama bangun diatas?","a":"persegi","b":"persegi_panjang","c":"segitiga","d":"jajargenjang","h":"a"},
	{"n":"2","i":"persegi.png","q":"sisi manakah yang sejejar dengan sisi AB?","a":"AD","b":"BC","c":"CD","d":"AC","h":"b"},
	{"n":"3","i":"","q":"Sudut manakah yang berhadapan dengan sudut ADC?","a":"ABC","b":"ACD","c":"ADB","d":"ACB","h":"a"},
	{"n":"4","i":"","q":"Sebuah persegi mempunyai panjang sisi 4 cm, berapa kelilingnya?","a":"15","b":"16","c":"17","d":"18","h":"b"},
	{"n":"5","i":"","q":"Jika sisi sebuah persegi adalah 10, berapa luasnya?","a":"90","b":"100","c":"110","d":"120","h":"b"},
	{"n":"6","i":"","q":"Jika sisi suatu persegi = 5 berapa luasnya ?","a":"35","b":"25","c":"20","d":"15","h":"b"},
	{"n":"7","i":"","q":"Ruang kelas Yulia berbentuk persegi dengan panjang sisi 55 m. Maka keliling ruang kelas Yulia adalah ….","a":"200","b":"220","c":"165","d":"160","h":"b"},
	{"n":"8","i":"persegi.png","q":"Sisi manakah yang sejajar dengan sisi AB?","a":"AC","b":"AA","c":"BD","d":"CD","h":"d"},
	{"n":"9","i":"","q":"Berapa besar masing-masing keempat sudut persegi?","a":"180_derajat","b":"60_derajat","c":"90_derajat","d":"45_derajat","h":"c"},
	{"n":"10","i":"","q":"Ada berapa simetri lipat pada bangun persegi?","a":"4","b":"5","c":"6","d":"7","h":"a"},
	{"n":"11","i":"","q":"Jika panjang persegi mempunyai panjang = 7 dan lebarnya 5, berapa luasnya ?","a":"35","b":"25","c":"12","d":"30","h":"a"},
	{"n":"12","i":"","q":"Jika panjang persegi mempunyai panjang = 72 dan lebarnya 54, berapa luasnya ?","a":"3587","b":"3888","c":"3890","d":"3899","h":"b"},
	{"n":"12","i":"","q":"keliling dari persegi panjang yang mempunyai panjang = 10 dan lebar = 5 adalah?.","a":"20","b":"30","c":"15","d":"10","h":"b"},
	{"n":"13","i":"","q":"keliling dari persegi panjang yang mempunyai panjang = 135 dan lebar = 121 adalah?.","a":"520","b":"515","c":"512","d":"510","h":"c"},
	{"n":"14","i":"panjang.png","q":"Sisi manakah yang sejajar dengan sisi AB?","a":"AC","b":"AA","c":"BD","d":"CD","h":"d"},
	{"n":"15","i":"","q":"Berapa besar masing-masing keempat sudut persegi panjang?","a":"180_derajat","b":"60_derajat","c":"90_derajat","d":"45_derajat","h":"c"},
	{"n":"16","i":"","q":"persegi panjang yang memiliki luas 72, dan panjang 9cm, maka berapa tingginya?","a":"6","b":"7","c":"8","d":"9","h":"c"},
	{"n":"17","i":"","q":"persegi panjang yang memiliki luas 900, dan lebar 25 cm, maka berapa panjangnya?","a":"36","b":"37","c":"38","d":"39","h":"d"},
	{"n":"18","i":"aj.png","q":"Ada berapa simetri lipat pada bangun persegi?","a":"2","b":"3","c":"4","d":"5","h":"a"},
	{"n":"19","i":"","q":"Ada berapa macam segitiga menurut besar sudutnya?","a":"4","b":"3","c":"2","d":"1","h":"b"},
	{"n":"20","i":"","q":"Apa nama segitiga yang salah satu sudutnya adalah 90 derajat?","a":"segitiga_samakaki","b":"segitiga_siku-siku","c":"segitiga_sama-sisi","d":"segitiga_tumpul","h":"b"},
	{"n":"21","i":"","q":"Apa rumus luas segitiga?","a":"1/2(axt)","b":"1/2(pxl)","c":"axt","d":"pxl","h":"a"},
	{"n":"22","i":"","q":"Tinggi sebuah segitiga adalah 12 cm, jika luasnya 114 cm2. Maka panjang alasnya adalah ","a":"15","b":"19","c":"25","d":"29","h":"b"},
	{"n":"23","i":"","q":"Jika alas segitiga = 10 dan tingginya 5, berapa luasnya ?","a":"15","b":"25","c":"50","d":"100","h":"a"},
	{"n":"24","i":"","q":"Jika luas segitiga = 25 dan tingginya 5, berapa alassnya ?","a":"10","b":"20","c":"30","d":"40","h":"a"},
	{"n":"25","i":"","q":"Sebuah segitiga sama sisi memiliki keliling 60 cm. Berapa panjang sisinya","a":"5","b":"10","c":"15","d":"20","h":"b"},
	{"n":"26","i":"","q":"Segitiga siku memiliki alas = 3 dan tinggi = 4. Berapa Kelilingnya.","a":"9","b":"12","c":"6","d":"7","h":"b"},
	{"n":"27","i":"","q":"Luas segitiga siku-siku = 6 m. Alasnya = 3 cm. Berapa kelilingnya ?","a":"9","b":"12","c":"6","d":"7","h":"b"},
	{"n":"28","i":"","q":"Panjang dari dua garis sejajar trapesium 46 cm. jika tinggi trapesium tersebut 12 cm, maka luasnya adalah?","a":"275","b":"276","c":"277","d":"278","h":"b"},
	{"n":"29","i":"","q":"Sebuah atap bangunan terdiri dari 4 trapesium dengan ukuran panjang sisi sejajar 4 m dan 10  m. Tinggi trapesium 3 m. Trapesium tersebut di cat dengan biaya Rp.7.000,00 tiap m2. Berapakah biaya yang dikeluarkan untuk mengecat seluruh trapesium tersebut?","a":"Rp.588.000","b":"Rp.589.000","c":"Rp.590.000","d":"Rp.591.000","h":"b"},
	{"n":"30","i":"trapesium.png","q":"Sisi manakah yang sejajar dengan sisi AD?","a":"CD","b":"AC","c":"BD","d":"BC","h":"d"},
	{"n":"31","i":"","q":"Panjang dari dua garis sejajar trapesium 20 cm. jika tinggi trapesium tersebut 5 cm, maka luasnya adalah?","a":"50","b":"60","c":"70","d":"80","h":"a"},
	{"n":"32","i":"","q":"Sebuah trapesium memiliki panjang sisi-sisi sejajar berturut-turut 4cm dan 10cm serta tinggi 6cm. berapa luas trapesium tersebut?","a":"33","b":"35","c":"37","d":"39","h":"b"},
	{"n":"33","i":"","q":"Sebuah trapesium yang besar salah satu sudutnya adalah 90 derajat adalah?","a":"Trapesium_samasisi","b":"Trapesium_samakaki","c":"Trapesium_sembarang","d":"Trapesium_siku-siku","h":"d"},
	{"n":"34","i":"","q":"Sebuah benda berbentuk trapesium dengan sisi yang sejajar dalah 15 cm dan 10 cm, dan tinggi 8cm. Luas trapesium tersbut adalah?","a":"100","b":"102","c":"103","d":"104","h":"a"},
	{"n":"35","i":"","q":"Ada berapa macam bangun trapesium?","a":"1","b":"2","c":"3","d":"4","h":"c"},
	{"n":"36","i":"j.png","q":"Sudut manakah yang sama besar dengan sudut DAB adalah?","a":"sudut_DCB","b":"sudut_ADC","c":"sudut_ABC","d":"sudut_DAB","h":"a"},
	{"n":"37","i":"j.png","q":"sisi manakah yang sejajar dengan AD","a":"BC","b":"AC","c":"BD","d":"AB","h":"a"},
	{"n":"38","i":"","q":"hitunglah keliling suatu jajargenjang yang memiliki sisi 15 cm dan 21 cm.","a":"70","b":"71","c":"72","d":"73","h":"c"},
	{"n":"39","i":"","q":"hitunglah keliling suatu jajargenjang yang memiliki sisi 45 cm dan 56 cm.","a":"200","b":"201","c":"202","d":"203","h":"c"},
	{"n":"40","i":"","q":"hitunglah luas jajargenjang dengan alas 26 cm dan tinggi 17 cm.","a":"442","b":"445","c":"412","d":"410","h":"a"},
	{"n":"41","i":"","q":"suatu jajargenjang memiliki keliling 52 cm. Jika panjang salah satu sisinya 16 cm, hitunglah panjang sisi yang lainnya.","a":"10","b":"11","c":"12","d":"13","h":"a"},
	{"n":"42","i":"","q":"taman di depan rumah Pak Budi berbentuk jajargenjang. Panjang sisi yang berbeda 8 meter dan 12 meter. Disekeliling taman tersebut dipasang lampu taman tiap 4 meter. Berapa banyak lampu yang terpasang???","a":"10","b":"11","c":"12","d":"13","h":"a"},
	{"n":"43","i":"","q":"suatu jajargenjang memiliki luas	1764 dm2 dan panjangnya 63 dm. Tinggi jajargenjang tersebut adalah … cm.","a":"260","b":"270","c":"280","d":"290","h":"280"},
	{"n":"44","i":"","q":"pada saat olahraga lari, Budi mengelilingi lapangan yang berbentuk jajargenjang dengan panjang alas 25 meter dan lebar sisi 20 meter. Budi berlari sebanyak 4 kali putaran. Berapakah panjang lintasan lari yang dilakukan Budi ???","a":"360","b":"370","c":"380","d":"390","h":"a"},
	{"n":"45","i":"","q":"hitunglah luas jajargenjang dengan alas 34 cm dan tinggi 27 cm.","a":"912","b":"915","c":"916","d":"918","h":"d"},
	{"n":"46","i":"tr.png","q":"Apa nama bangun disamping?","a":"persegi","b":"persegi_panjang","c":"belah_ketupat","d":"segitiga","h":"c"},
	{"n":"47","i":"","q":"Rumus keliling belah ketupat adalah?","a":"4xsisi","b":"+sisi","c":"sisixsisi","d":"sisi+sisi","h":"a"},
	{"n":"48","i":"","q":"Sebuah belah ketupat memiliki panjang sisi adalah 2 cm. Berapa kelilingnya","a":"8","b":"9","c":"10","d":"11","h":"8"},
	{"n":"49","i":"","q":"Diketahui panjang diagonal-diagonal sebuah belah ketupat berturut-turut 15 dan 12 cm. Tentukan luas belah ketupat itu.","a":"70","b":"80","c":"90","d":"100","h":"c"},
	{"n":"50","i":"","q":"6.	Sebuah belah ketupat mempunyai panjang diagonal 24 cm dan 27 cm. Luas belah ketupat tersebut adalah ","a":"324","b":"342","c":"344","d":"320","h":"a"},
	{"n":"51","i":"","q":"Panjang sisi belah ketupat adalah 32 cm. Berapa kelilingnya","a":"120","b":"124","c":"126","d":"128","h":"d"},
	{"n":"52","i":"","q":"Sebuah belah ketupat mempunyai luas 1080 cm, panjang diagonalnya 54 cm. maka berapa panjang diagonal yang lain?","a":"20","b":"40","c":"60","d":"80","h":"b"},
	{"n":"53","i":"","q":"Sebuah belah ketupat mempunyai luas 200 cm, panjang diagonalnya 25 cm. maka berapa panjang diagonal yang lain?","a":"20","b":"16","c":"9","d":"10","h":"b"},
	{"n":"54","i":"","q":"Sebuah belah ketupat memiliki panjang sisi adalah 10 cm. Berapa kelilingnya","a":"20","b":"40","c":"60","d":"80","h":"b"},
	{"n":"55","i":"lay.png","q":"apa nama bangun di atas?","a":"belah_ketupat","b":"segitiga","c":"layang-layang","d":"persegi","h":"c"},
	{"n":"56","i":"lay.png","q":"Sudut BCD sama besar dengan sudut?","a":"ACD","b":"ABC","c":"BAD","d":"ADC","h":"c"},
	{"n":"57","i":"lay.png","q":"Sisi AB mempunyai sisi yang sama dengan?","a":"BC","b":"AD","c":"CD","d":"BD","h":"a"},
	{"n":"58","i":"","q":"Aldi membuat layang-layang yang salah satu panjang diagonalnya adalah 60 cm. Luas layang-layang tersebut adalah 2400 cm. tentukan panjang diagonal yang lain?","a":"60","b":"70","c":"80","d":"90","h":"c"},
	{"n":"59","i":"lay.png","q":"Pada gambar diatas panjang AC= 14, dan panjang BD= 28, Tentukan luasnya","a":"195","b":"196","c":"197","d":"198","h":"b"},
	{"n":"60","i":"","q":"Luas layang-layang yang panjang diagonalnya 40cm dan 25cm adalah?","a":"300","b":"400","c":"500","d":"600","h":"c"},
	{"n":"61","i":"","q":"Sebuah layang-layang mempunyai luas 200 cm. panjang salah satu diagonalnya adalah 20cm. tentukan panjang diagonal yang lain.","a":"30","b":"20","c":"10","d":"15","h":"b"},
	{"n":"62","i":"","q":"Diketahui panjang diagonal-diagonal layang-layang yaitu, d1=10dm dan d2=9dm. tentukan luasnya","a":"30","b":"35","c":"40","d":"45","h":"d"},
	{"n":"63","i":"","q":"Sebuah bangun berbentuk layang-layang dengan panjang diagonal 1(d1) berukuran 18 cm dan diagonal 2 (d2) berukuran 16 cm. Tentukan luas bangun tersebut?","a":"143","b":"144","c":"145","d":"146","h":"b"},
	{"n":"64","i":"hy.png","q":"apa nama bangun di atas?","a":"belah_ketupat","b":"segitiga","c":"lingkaran","d":"persegi","h":"c"},
	{"n":"65","i":"","q":"radius(r) disebut juga?","a":"sudut","b":"sisi","c":"diameter","d":"jari-jari","h":"d"},
	{"n":"66","i":"","q":"Sebuah roda sepeda memiliki jari-jari 28 cm, berapa kelilingnya??","a":"88","b":"116","c":"176","d":"144","h":"c"},
	{"n":"67","i":"","q":"Berapa cm diameter (d) lingkaran, jika radius (r)= 15","a":"10","b":"20","c":"30","d":"40","h":"c"},
	{"n":"68","i":"","q":"Berapa luas lingkaran jika d=14?","a":"308","b":"616","c":"309","d":"617","h":"a"},
	{"n":"69","i":"","q":"Sebuah meja berbentuk lingkaran dengan diameter 126 cm. Hitunglah luasnya","a":"12,474","b":"13,474","c":"14,474","d":"15,474","h":"a"},
	{"n":"70","i":"","q":"Sebuah lingkaran dengan luas 616 cm. bera cm jari-jarinya?","a":"14","b":"16","c":"20","d":"24","h":"a"},
	{"n":"71","i":"","q":"Berapa luas lingkaran jika r=7?","a":"150","b":"154","c":"152","d":"156","h":"b"},
	{"n":"72","i":"","q":"berapa luas suatu lingkaran jika radius(r) = 14","a":"615","b":"616","c":"617","d":"618","h":"b"}];
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

