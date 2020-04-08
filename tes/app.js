// new VConsole

var datanya = new OlahJson(data)

// var hasilOlahan = datanya.query('santri/3').put({
// 	'nama': 'Rey',
// 	'alamat': 'Klaten'
// }).get()

var hasilOlahan = datanya
.query('lomba').delete()
.query('santri/3').delete()
.query('santri/1').put({
	'nama': 'Yani',
	'alamat': 'Loa Bakung'
}).get()

// var baruLagi = new OlahJson(hasilOlahan)
// var hasil = baruLagi.query('lomba/4').put({
// 	'lomba': 'sepeda',
// 	'santri_id': 1
// })
console.log(hasilOlahan)