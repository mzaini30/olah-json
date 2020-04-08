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
		var setelahTanya = pisahTanya[1]
		
		// bagian selektor
		var pisahSebelumTanya = sebelumTanya.split('/')
		var judulTable = pisahSebelumTanya[0]
		var kunci = pisahSebelumTanya[1]
		var selektor = eval(`this.json.${judulTable}`)
		if (kunci){
			selektor = selektor.filter(data => data.id == kunci)
		}

		if (setelahTanya){
			// bagian filter
			var pisahDan = setelahTanya.split('&')
			for (var n in pisahDan){
				pisahDan[n] = pisahDan[n].split('=')
			}
			for (var x of pisahDan){
				if (!x[0].startsWith('_')){ // jika nggak diawali dengan _
					// selektor = selektor.filter(data => eval(`data.${x[0]}`) == x[1])
					selektor = selektor.filter(data => eval(`data.${x[0]}.toString().toLowerCase().includes('${x[1]}'.toString().toLowerCase())`))
				} else { // jika diawali dengan _
					if (x[0] == '_q'){
	
					}
				}
			}
		}

		// hasilnya
		this.jsonBaru = selektor
		this.jsonString = JSON.stringify(this.json)

		// ini untuk delete
		this.jsonBaruString = JSON.stringify(this.jsonBaru).substring(1)
		this.jsonBaruString = this.jsonBaruString.substring(0, this.jsonBaruString.length - 1)

		return this
	} 

	get(){
		// get selesai
		return this.jsonBaru
	}

	delete(){
		// delete selesai
		this.teksPemotongan = this.jsonString.replace(this.jsonBaruString, '').replace(/,,/g, ',')
		this.teksPemotongan = JSON.parse(this.teksPemotongan)
		return this.teksPemotongan
	}

	put(dataBaru){

	}

	post(dataBaru){

	}
}