// new VConsole

var datanya = new OlahJson(data)

// var hasilOlahan = datanya.query('santri/3').put({
// 	'nama': 'Rey',
// 	'alamat': 'Klaten'
// }).get()

var hasilOlahan = datanya.query('santri').get()

// var baruLagi = new OlahJson(hasilOlahan)
// var hasil = baruLagi.query('lomba/4').put({
// 	'lomba': 'sepeda',
// 	'santri_id': 1
// })
console.log(hasilOlahan)