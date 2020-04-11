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
					selektor = selektor.filter(data => eval(`data.${x[0]}.toString().toLowerCase()`) == eval(`${x[1]}.toString().toLowerCase()`))
					// di bawah ini untuk q aja
					// selektor = selektor.filter(data => eval(`data.${x[0]}.toString().toLowerCase().includes('${x[1]}'.toString().toLowerCase())`))
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

		this.json = this.jsonBaru
		return this
	}

	delete(){
		// delete selesai
		var teksPemotongan = this.jsonString.replace(this.jsonBaruString, '').replace(/,,/g, ',').replace(/,\]/g, ']').replace(/\[,/g, '[') // memperbaiki sintaks json
		teksPemotongan = JSON.parse(teksPemotongan)
		this.json = teksPemotongan
		return this
	}

	put(dataPut){
		// put selesai
		var pisah = this.querynya.split('/')[1]
		dataPut['id'] = Number(pisah)
		dataPut = JSON.stringify(dataPut)
		var dataBaru = this.jsonString.replace(this.jsonBaruString, dataPut)
		dataBaru = JSON.parse(dataBaru)
		this.json = dataBaru
		return this
	}

	post(dataPost){
		// post selesai
		var panjangnya = this.json.length
		var idTerakhir = eval(`this.json[${panjangnya - 1}].id`)
		var idBaru = idTerakhir + 1
		dataPost['id'] = idBaru
		var elemenBaruString = JSON.stringify(dataPost)
		var selektor = this.json.filter(data => data.id == idTerakhir)
		var selektorString = JSON.stringify(selektor).substring(1)
		selektorString = selektorString.substring(0, selektorString.length - 1)
		var tambahkan = `${selektorString},${elemenBaruString}`

		var ubah = this.jsonString.replace(selektorString, tambahkan)
		ubah = JSON.parse(ubah)

		this.json = ubah
		return this
	} 

	get(){
		// get selesai
		return this.json
	}
}