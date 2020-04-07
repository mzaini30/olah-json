// contoh query
// santri/1
// santri?nama=Zen

class OlahJson {
	constructor(json){
		this.json = json
	}

	query(querynya){
		this.querynya = querynya
		var pisahTanya = this.querynya.split('?')

		var sebelumTanya = pisahTanya[0]
		var setelahTanya = pisahTanya[1] // ini bagian filter

		var pisahSebelumTanya = sebelumTanya.split('/')
		
		var judulTable = pisahSebelumTanya[0] // ini judul table, contoh: santri
		var kunci = pisahSebelumTanya[1] // ini kunci, contoh: 1
		
		var selektor = eval(`this.json.${judulTable}`)
		if (kunci){

		}

		this.jsonBaru = selektor
		return this
	} 

	selesai(){
		return this.jsonBaru
	}
}