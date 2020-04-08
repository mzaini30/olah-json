# Olah JSON

> Masih versi alpha

Proyek ini terinspirasi dari [typicode/json-server](https://github.com/typicode/json-server)

Kalau JSON Server kan itu untuk sisi server. Maka, Olah JSON ini adalah dari sisi client

## Install

- [For development](olahJson.js) - masih pakai ES2015+
- [For production](olahJson.min.js) - sudah diolah pakai Babel dan minify dengan Uglify JS

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
var datanya = new OlahJson(data)

var hasilOlahan = datanya.query('santri?nama=zen&alamat=samarinda&id=1').get()

// Hasil:
// [
//   {
//     "id": 1,
//     "nama": "Zen",
//     "alamat": "Samarinda"
//   }
// ]

// Contoh lain: santri/2
// Hasil:
// [
//   {
//     "id": 2,
//     "nama": "Yani",
//     "alamat": "Samarinda"
//   }
// ]
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
````

## DELETE

```javascript
data.query('santri').delete()
data.query('santri/1').delete()
```

## PUT

```javascript
data.query('santri/10').put({
  'nama': 'Kucing',
  'alamat': 'Balikpapan'
})
```

## TODO

- [ ] Filter (Contoh: santri?`_q`=aku)
- [x] GET
- [x] PUT
- [x] DELETE
- [ ] POST