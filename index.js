// Örnek Görev: İlkini Dön
// Bu fonksiyon, bir dizi ve bir geriçağıran(callback) fonksiyon alır.
// Dizinin ilk elemanını geriçağıran fonksiyona parametre olarak verir ve sonucu döner.
function ilkiniDon(stringArray, callback) {
  return callback(stringArray[0]);
}

///// M V P ///////

/*Görev 1: macSkoru()
  
  Aşağıdaki skor1 ve skor2 kodlarını inceleyiniz ve aşağıdaki soruları altına not alarak cevaplayın
  
  1. skor1 ve skor2 arasındaki fark nedir?
  
  2. Hangisi bir closure kullanmaktadır? Nasıl tarif edebilirsin? (yarınki derste öğreneceksin :) )
  
  3. Hangi durumda skor1 tercih edilebilir? Hangi durumda skor2 daha mantıklıdır?
*/

// skor1 kodları
function skorArtirici() {
  let skor = 0;
  return function skorGuncelle() {
   return skor++;
  }
}

const skor1 = skorArtirici();

// skor2 kodları
let skor2Skor = 0;

function skor2() {
  return skor2Skor++;
}


//

/* Görev 2: takimSkoru() 
Aşağıdaki takimSkoru() fonksiyonununda aşağıdakileri yapınız:
  1. Bir çeyrekte bir takımın ürettiği skoru rastgele(random) elde eden bir sonuc dönünüz(return)
  
  Ön Bilgi: Bir çeyrekte takımlar ortalama 10 ile 25 sayı üretebiliyor
  Örnek: takimSkoru çağrıldığında 10-25 arasında bir skor dönmeli
  
Not: Bu fonskiyon, aşağıdaki diğer görevler için de bir callback fonksiyonu olarak da kullanılacak
*/

function takimSkoru(){
    const x = Math.ceil(Math.random() * (25-10)) + 10;
    return x;
}

function takimSkoru2(){
  const x = Math.ceil(Math.random() * (25-10)) + 10;
  return x;
}


console.log(takimSkoru());




/* Görev 3: macSonucu() 
Aşağıdaki macSonucu() fonksiyonununda aşağıdakileri yapınız:
  1. Görev 2'de oluşturduğunuz 'takimSkoru'nu callback fonskiyonunu olarak ilk parametrede alın
  2. Bir basketbol maçında oynanan çeyrek sayısını ikinci parametre olarak alın
  3. Her çeyrekte EvSahibi ve KonukTakim için bir skor oluşturun
  4. Her oynanan çeyrekten sonra EvSahibi ve KonukTakim için skoru güncelleyin
  5. Son çeyrekten sonra, maçın bitiş skorunu bir object olarak dönün(return)

  Örneğin: macSonucu(takimSkoru, 4) çalıştırınca aşağıdaki object'i dönmeli
{
  "EvSahibi": 92,
  "KonukTakim": 80
}
*/ 

takimSkoru();

function macSonucu(skor, Periyot){
  let EvSahibiSkoru = 0;
  let KonukTakimSkoru = 0;

  for (let i = 0; i < Periyot; i++) {
    EvSahibiSkoru += skor();
    KonukTakimSkoru += skor();
  }

  return {
   EvSahibi: EvSahibiSkoru,
   KonukTakim: KonukTakimSkoru
  };

}

console.log("macSonucu", macSonucu(takimSkoru, 4));



/* Zorlayıcı Görev 4: periyotSkoru()
Aşağıdaki periyotSkoru() fonksiyonununda aşağıdakileri yapınız:
  1. Görev 2'de oluşturduğunuz 'takimSkoru'nu callback fonskiyonunu olarak ilk parametrede alın
  2. takimSkoru callback fonksiyonunu kullanarak, EvSahibi ve KonukTakim için bir skor üretin
  3. Bir object olarak EvSahibi ve KonukTakim skorunu dönün
  
Örneğin: periyotSkoru(takimSkoru) çalıştırınca aşağıdaki object'i dönmeli
{
  "EvSahibi": 18,
  "KonukTakim": 12
}
  */

takimSkoru();

function periyotSkoru(sonuc) {
    return {
      EvSahibi: sonuc(),
      KonukTakim: sonuc()
    };
}

console.log("periyotSkoru", periyotSkoru(takimSkoru));

console.log("futbolperiyotSkoru", periyotSkoru(takimSkoru2));

/* Zorlayıcı Görev 5: skorTabelasi() 
Aşağıdaki skorTabelasi() fonksiyonunu kullanarak aşağıdakileri yapınız:
  1. İlk parametre olarak Görev 4'te oluşturduğumuz 'periyotSkoru'nu bir değişken olarak almalı
  2. İkinci parametre olarak Görev 2'de oluşturduğumuz 'takimSkoru'nu bir değişken olarak almalı
  3. Üçüncü parametre olarak da oynanacak olan çeyrek sayısını alın
  4. Her bir çeyreğin sonucunu bir string olarak bir array içinde dönün. Aşadaki örnek gibi olmalı. Her çeyrekteki atılan sayıları ayrı ayrı yazmalı(toplam skoru değil!).
  5. Eğer maç berabere biterse uzatmalar oynanmalı ve "Uzatma 1: Ev Sahibi 13 - Konuk Takım 11" eklemeli. (Her uzatma için ayrı ayrı eklemeli)
  6. Maç bitince de final skoru yazmalı: "Maç Sonucu: Ev Sahibi 101 - Konuk Takım 98"

MAÇ UZAMAZ ise skorTabelasi(periyotSkoru, takimSkoru, 4)
  
[
  "1. Periyot: Ev Sahibi 10 - Konuk Takım 21", 
  "2. Periyot: Ev Sahibi 20 - Konuk Takım 13",
  "3. Periyot: Ev Sahibi 13 - Konuk Takım 9", 
  "4. Periyot: Ev Sahibi 18 - Konuk Takım 11", 
  "Maç Sonucu: Ev Sahibi 61 - Konuk Takım 54"  
]

MAÇ UZAR ise skorTabelasi(periyotSkoru, takimSkoru, 4)
[
  "1. Periyot: Ev Sahibi 10 - Konuk Takım 21", 
  "2. Periyot: Ev Sahibi 20 - Konuk Takım 13",
  "3. Periyot: Ev Sahibi 13 - Konuk Takım 9", 
  "4. Periyot: Ev Sahibi 18 - Konuk Takım 18",
  "1. Uzatma: Ev Sahibi 10 - Konuk Takım 6" 
  "Maç Sonucu: Ev Sahibi 71 - Konuk Takım 67"  
]
] */
// NOTE: Bununla ilgili bir test yoktur. Eğer logladığınız sonuçlar yukarıdakine benziyor ise tamamlandı sayabilirsiniz.

function skorTabelasi(periyotSkoru, takimSkoru, ceyrekSayisi) {
  const skorlar = [];

  for (let i = 1; i <= ceyrekSayisi; i++) {
    const periyotSkor = periyotSkoru(takimSkoru);
    skorlar.push(`${i}. Periyot: Ev Sahibi ${periyotSkor.EvSahibi} - Konuk Takım ${periyotSkor.KonukTakim}`);
  }

  let evToplam = 0;
  let konukToplam = 0;
  for (let i = 0; i < ceyrekSayisi; i++) {
    const periyotSkor = periyotSkoru(takimSkoru);
    evToplam += periyotSkor.EvSahibi;
    konukToplam += periyotSkor.KonukTakim;
  }

  if (evToplam === konukToplam) {
    let uzatmaNo = 1;
    while (true) {
      const uzatmaSkor = periyotSkoru(takimSkoru);
      skorlar.push(`Uzatma ${uzatmaNo}: Ev Sahibi ${uzatmaSkor.EvSahibi} - Konuk Takım ${uzatmaSkor.KonukTakim}`);
      uzatmaNo++;

      if (uzatmaSkor.EvSahibi !== uzatmaSkor.KonukTakim) {
        break;
      }
    }
  }

  skorlar.push(`Maç Sonucu: Ev Sahibi ${evToplam} - Konuk Takım ${konukToplam}`);
  return skorlar;
}

/* Aşağıdaki satırları lütfen değiştirmeyiniz */
function sa(){
  console.log('Kodlar çalışıyor');
  return 'as';
}
sa();
module.exports = {
  sa,
  ilkiniDon,
  skor1,
  skor2,
  takimSkoru,
  macSonucu,
  periyotSkoru,
  skorTabelasi,
}
