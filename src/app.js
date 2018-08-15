//Expressi projemize dahil ediyoruz
import express from 'express'

//Expressi çalıştırmak için değişken atıyoruz.
const app = express();

//Express fonksiyonlarımız
app.get('/', (req, res) => {
    res.send('express.js çalışıyor.')
})

app.get('/blog', (req, res) => {
    res.json(data)
})

//Server için port ayarlarımız.
app.listen('8080', function () {
    console.log('8080 portu çalışıyor...')
})