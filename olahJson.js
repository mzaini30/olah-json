class OlahJson {
  constructor(json){
    this.json = json
  }
  query(querynya){
    this.querynya = querynya
    return this
  }
  selesai(){
    return this.querynya
  }
}