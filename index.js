const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library bodyparser
const cors = require("cors") // memanggil library cors
const app = express()

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())
// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))
// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

app.post("/bujur_sangkar", (req,res)=>{
    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
    let tinggi = Number(req.body.lebar)

    let luas = 2*(panjang*lebar +panjang*tinggi+tinggi*lebar)
    let keliling = 2*(panjang + lebar)
    let response ={
        panjang: panjang,
        lebar: lebar,
        luas: luas,
        keliling: keliling
    }
    res.json(response)
})

// praktikum 1

app.post("/kubus", (req,res)=>{
    let sisi = Number(req.body.sisi)
    let luas = 6*sisi*sisi
    let volume = sisi^3
    let response ={
        tittle:"volume dan luas kubus",
        volume: volume,
        luas: luas
    }
    res.json(response)
})

app.post("/balok", (req,res)=>{
    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
    let tinggi = Number(req.body.lebar)

    let luas = 2*(panjang*lebar +panjang*tinggi+tinggi*lebar)
    let volume = panjang*lebar*tinggi
    let response ={
        tittle:"volume dan luas balok",
        volume: volume,
        luas: luas
    }
    res.json(response)
})

app.post("/bola", (req,res)=>{
    let r = Number(req.body.r)

    let luas = 4*3.14*r^2
    let volume = 4*3.14*r^3/3
    let response ={
        tittle:"volume dan luas bola",
        volume: volume,
        luas: luas
    }
    res.json(response)
})

app.post("/kerucut", (req,res)=>{
    let r = Number(req.body.r)
    let s = Number(req.body.s)
    let T = Number(req.body.t)

    let luas = 3.14*r*s+3.14*r^2
    let volume = 3.14*r^2*T/3
    let response ={
        tittle:"volume dan luas kerucut",
        volume: volume,
        luas: luas
    }
    res.json(response)
})

//praktikum 2

app.get("/convert/:satuan/:suhu", (req,res) => {
    let satuan = req.params.satuan  
    let suhu = Number(req.params.suhu) 
    let response


if(satuan=="celcius"){
            let reamur=suhu*4/5 
            let farenheit=9*suhu/5+32 
            let kelvin=suhu+273
    let result ={
             reamur,
             farenheit,
             kelvin
    }

     response = {
        celcius:suhu,
        result
        }
}

else if (satuan=="reamur"){
    let celcius=suhu*5/4
    let farenheit=9*suhu/4+32 
    let kelvin=5*suhu/4+273
    
let result ={
     celcius,
     farenheit,
     kelvin
}

 response = {
    reamur:suhu,
    result
}

}

else if (satuan=="kelvin"){
    let celcius=suhu-273
    let farenheit=9/5*(suhu-273)+32 
    let reamur= 4/5*(suhu-273)

    let result ={
        celcius,
        farenheit,
        reamur
}

 response = {
    kelvin:suhu,
    result
}

}

else if (satuan=="fahrenheit"){
    let celcius=5/9*(suhu-32)
    let kelvin=5/9*(suhu-32)+273
    let reamur= 4/9*(suhu-32)
    let result ={
        celcius,
        kelvin,
        reamur
    }

     response = {
        fahrenheit:suhu,
        result
}

}
 
res.json(response)

})

//praktikum 3

app.post("/konversi_bilangan/desimal", (req,res)=> {
    let bil = Number(req.body.bil)
    let biner = bil.toString(2)
    let octal = bil.toString(8)
    let heksadesimal = bil.toString(16)
    let response ={
       biner: biner,
       octal: octal,
       heksadesimal: heksadesimal
    }
    res.json(response)
})

app.post("/konversi_bilangan/biner", (req,res)=> {
    let bil = Number(req.body.bil)
    let desimal = parseInt(bil, 2)
    let octal = parseInt(bil,2).toString(8)
    let heksadesimal = parseInt(bil,2).toString(16)
    let response ={
       desimal: desimal,
       octal: octal,
       heksadesimal: heksadesimal
    }
    res.json(response)
})

app.post("/konversi_bilangan/octal", (req,res)=> {
    let bil = Number(req.body.bil)
    let desimal = parseInt(bil, 8)
    let biner = parseInt(bil,8).toString(2)
    let heksadesimal = parseInt(bil,8).toString(16)
    let response ={
       desimal: desimal,
       biner: biner,
       heksadesimal: heksadesimal
    }
    res.json(response)
})

app.post("/konversi_bilangan/heksadesimal", (req,res)=> {
    let bil = Number(req.body.bil)
    let desimal = parseInt(bil, 16)
    let biner = parseInt(bil,16).toString(2)
    let octal = parseInt(bil,16).toString(8)
    let response ={
       desimal: desimal,
       biner: biner,
       octal: octal
    }
    res.json(response)
})

//praktikum 4

app.post("/bmi" , (req,res)=>{
    let t=Number(req.body.tinggi)
    let b=Number(req.body.berat)

    let bmi=b/t^2
    let response

    if(bmi<18.5){
        response={
            tinggi:t,
            berat:b,
            bmi:bmi,
            status:"kekurangan berat badan"

        }
    }
    else if(18.5<=bmi<=24.9){
        response={
            tinggi:t,
            berat:b,
            bmi:bmi,
            status:"Normal (idela)"

        }
    }
    else if(25.0<=bmi<=29.9){
        response={
            tinggi:t,
            berat:b,
            bmi:bmi,
            status:"kelebihan berat badan"

        }
    }
    else if(30<=bmi){
        response={
            tinggi:t,
            berat:b,
            bmi:bmi,
            status:"Normal (idela)"

        }
    }

    res.json(response)
})

//parktikum 5

app.post("/gg", (req, res) => {
    let bil=Number(req.body.bil)
    let response

    if(bil%2==0){

        response={
            bil:bil,
            hasil :"bilangan genap"
        }
    }
    else{
        response={
            bil:bil,
            hasil:"bilangan ganjil"
        }
    }

    res.json(response)
})

// app.post("/test", (req,res)=>{

// })

// app.put("/test",(req,res)=>{

// })

// app.delete("/test",(req,res)=>{
    
// })




app.listen(8000, () => {
    console.log("Server run on port 8000");
   })