/*
Javascript üçün ilk olaraq https://nodejs.org saytından download bölməsindən LTS-ə (Long Terms Support, yəni tərcüməsi 
UZUN MÜDDƏTLİ DƏSTƏK deməkdir) daxil olaraq Windows installeri yükləməliyik. Bu bizə REACT-da MPM paketləri yükləmək üçün lazım olacaqdır.
Proqram yüklənərkən VS studio mütləq bağlı olmalıdır.


JavaScript necə bir dildir?
1. Dynamic Typed - dəyişənin tipini dəyişməyə icazə verir.
2. İntrepretasiya olunan dildir. (Yəni yuxarıdan aşağıya doğru oxuyur və hər sətri hər dəfə tərcümə edir və buna görə də JavaScript sürətli 
    bir dil deyildir.)

Verlənlərin 2 növ tipi olur.
1. Primitiv.    (string, boolean, undefined, null, number)
2. Referans.    ({} - obyekt tipi, [] kv. mötərizə (massiv (array) Çoxluq tipi obyekt)

Məsələn:

const telebeObyekti = {
    ad: "Meherrem",
    soyad: "Dadaşov",
    MelumatlariGetir: function() {

    }
}

*/

// "Meherrem" //string
// 22 // number
// true //boolean
// null //null

// const telebeObyekti = [ {
//     ad: "Məhərrəm",
//     soyad: Dadashov,
//     getMelumatlariGetir: function() {

//     }
// }
// ] //obyekt
// console.log(telebeObyekti)
// [] - massiv (Array) Çoxluq tipi obyekt

const telebeAdi = "Vaqif"
const telebeSoyadi = "Əhmədov"
const telebeStatusu = true
console.log(telebeAdi, telebeSoyadi, telebeStatusu)

const telebeObyekti = [{
    telebeninAdi: "Vaqif",
    telebeninSoyadi: "Əhmədov",
    telebeninStatusu: true
},

{   telebeninAdi: "Murad",
    telebeninSoyadi: "Ismayilov",
    telebeninStatusu: false

}
]
console.log(telebeObyekti)
