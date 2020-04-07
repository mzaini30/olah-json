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

		// bagian filter
		var sebelumTanya = pisahTanya[0]
		var setelahTanya = pisahTanya[1]

		var pisahSebelumTanya = sebelumTanya.split('/')
		
		// bagian selektor
		var judulTable = pisahSebelumTanya[0]
		var kunci = pisahSebelumTanya[1]
		
		// bagian selektor
		var selektor = eval(`this.json.${judulTable}`)
		if (kunci){
			selektor = selektor.filter(data => data.id == kunci)
		}

		this.jsonBaru = selektor
		return this
	} 

	get(){
		return this.jsonBaru
	}
}