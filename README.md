# Olah JSON

> Masih versi alpha

Proyek ini terinspirasi dari [typicode/json-server](https://github.com/typicode/json-server)

Kalau JSON Server kan itu untuk sisi server. Maka, Olah JSON ini adalah dari sisi client

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
olah.query('santri').get()
olah.query('santri/1').get()
olah.query('santri?id=1').get()
olah.query('santri?id=1&nama=zen').get()
olah.query('santri/1?id=1').get()
olah.query('santri/1?id=1&nama=zen').get()
````

## DELETE

```javascript
olah.query('santri').delete()
olah.query('santri/1').delete()
```

## TODO

- [ ] Filter
- [ ] UPDATE, PUT, DELETE