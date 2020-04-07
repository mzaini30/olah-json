class Matematika {
  constructor(){
    this.jumlah = 0
  }
  tambah(angka){
    this.jumlah += angka
    return this
  }
  selesai(){
    return this.jumlah
  }
}

// bilangan = new Matematika
// console.log(bilangan.tambah(3).tambah(2).selesai())
// Hasilnya: 5