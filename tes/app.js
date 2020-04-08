// new VConsole

var datanya = new OlahJson(data)

// var hasilOlahan = datanya.query('santri/3').put({
// 	'nama': 'Rey',
// 	'alamat': 'Klaten'
// }).get()

var hasilOlahan = datanya.query('santri').post({
	'nama': 'Rey',
	'alamat': 'Berau'
}).query('santri').post({
	'nama': 'Ari',
	'alamat': 'Kaltara'
}).query('lomba').post({
	'lomba': 'masukkan kelereng',
	'santri_id': 11
}).get()

// var baruLagi = new OlahJson(hasilOlahan)
// var hasil = baruLagi.query('lomba/4').put({
// 	'lomba': 'sepeda',
// 	'santri_id': 1
// })
console.log(hasilOlahan)