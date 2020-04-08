# Olah JSON

> Versi Beta

Proyek ini terinspirasi dari [typicode/json-server](https://github.com/typicode/json-server)

Kalau JSON Server kan itu untuk sisi server. Maka, Olah JSON ini adalah dari sisi client

## Install

- [For development](olahJson.js) - masih pakai ES2015+
- [For production](olahJson.min.js) - sudah diolah pakai Babel dan minify dengan Uglify JS

Lalu, panggil dengan:

```html
<script src='olahJson.js'></script>
```

Atau

```html
<script src='olahJson.min.js'></script>
```

## Struktur JSON

```javascript
var data = {
  "santri": [
    {
      "id": 1,
      "nama": "Zen",
      "alamat": "Samarinda"
    },
    {
      "id": 2,
      "nama": "Yani",
      "alamat": "Samarinda"
    },
    {
      "id": 3,
      "nama": "Anggi",
      "alamat": "Samarinda"
    }
  ],
  "lomba": [
    {
      "id": 1,
      "lomba": "balap karung",
      "santri_id": 1
    }
  ]
}
```

## Getting started (contohnya)

```javascript
var data = {
  "santri": [
    {
      "id": 1,
      "nama": "Zen",
      "alamat": "Samarinda"
    },
    {
      "id": 3,
      "nama": "Yani",
      "alamat": "Samarinda"
    }
  ],
  "lomba": [
    {
      "id": 4,
      "lomba": "balap karung",
      "santri_id": 3
    }
  ]
}
var datanya = new OlahJson(data) // harus pakai new OlahJson()
var hasilOlahan = datanya.query('santri?nama=zen&alamat=samarinda').get() // pakai get() di paling akhir
console.log(hasilOlahan)
```

## Contoh query yang lain

```
santri?nama=zen
santri/1
```

## GET

```javascript
data.query('santri').get()
data.query('santri/1').get()
data.query('santri?id=1').get()
data.query('santri?id=1&nama=zen').get()
data.query('santri/1?id=1').get()
data.query('santri/1?id=1&nama=zen').get()
```

## DELETE

```javascript
data.query('santri').delete().get()
data.query('santri/1').delete().get()
```

## PUT

```javascript
data.query('santri/10').put({
  'nama': 'Kucing',
  'alamat': 'Balikpapan'
}).get()
```

## POST

```javascript
data.query('santri').post({
  'nama': 'Rey',
  'alamat': 'Berau'
}).get()
```

## Chain method

Mendukung chain method

Caranya, gunakan `.query()` kemudian `post/put/delete`, lalu di ujung semua itu, pakai `get()`.

Contoh:

```javascript
data.query('lomba').delete()
.query('santri/3').delete()
.query('santri/1').put({
  'nama': 'Yani',
  'alamat': 'Loa Bakung'
}).get()
```

Contoh lain:

```javascript
data.query('santri').post({
  'nama': 'Rey',
  'alamat': 'Berau'
}).query('santri').post({
  'nama': 'Ari',
  'alamat': 'Kaltara'
}).query('lomba').post({
  'lomba': 'masukkan kelereng',
  'santri_id': 11
}).get()
```

## TODO

- [ ] Filter (Contoh: "santri?`_q`=aku")
- [x] GET
- [x] PUT
- [x] DELETE
- [x] POST
- [x] Chain method