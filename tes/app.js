// new VConsole

var datanya = new OlahJson(data)

var hasilOlahan = datanya.query('santri/1').put({
	'nama': 'Kucing',
	'alamat': 'Balikpapan'
})
console.log(hasilOlahan)