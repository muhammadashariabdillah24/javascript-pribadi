// let Tipeangka = 1;
// let Tipehuruf = 'Aku Sayang Kamu'
// let Tipenull = null
// let Tipeboolean = true

// if (Tipeangka == 1) {
//     console.log('Benar 1')
// } 

// if(Tipehuruf == 'Aku Sayang Kamu') {
//     console.log('Benar 2')
// } 

// if(Tipenull == null) {
//     console.log('Benar 3')
// } 

// if(Tipeboolean != false) {
//     console.log('Benar 4')
// }

// let angka = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//  let angka_hasil = angka[5]

//  if (angka_hasil == 1 || 2 || 3 || 4 || 5) {
//      for (let i = 0; i >= 0;) {
//          console.log('Serangan Tipe 0 Sebanyak', i)
//          i+=1

//          if(i == 100){
//              console.log('Lanjuttt')
//              continue;
//          }else if(i == 110){
//              console.log('Stopp!!!')
//              break;
//          }
//      }

//  } else if(angka_hasil == 6 || 7 || 8 || 9 || 10) {
//      let i = 1;
//      while (i) {
//          console.log('Serangan Tipe 1 Sebanyak', i)
//         i+=2
//      }
//  } else {
//      console.log('Maaf tidak ada angka yang sama , silahkan coba lagi')
//  }

// for (let i = 0; i >= 0;) {
//     i++;

//     if(i%2 == 0){
//         console.log(i, ' Ini Bilangan Genap')
//     }else{
//         console.log(i, ' Ini Bilangan Ganjil');
//     }
// }

// function dataArray() {

//     let dataArr = [['Melon', 'Semangka', 'Jeruk'],
//                     ['Tomat', 'Bayam', 'Cabe'],
//                      ['Sepeda', 'Mobil', 'Motor']];

    // console.log(dataArr[0]);
    // console.log(dataArr[0][0] , ' Adalah buah terenak');
    // console.log(dataArr[1]);
    // console.log(dataArr[1][1] , ' Adalah sayuran terenak');
    // console.log(dataArr[2]);
    // console.log(dataArr[2][2] , ' Adalah kendaraan terbaik');

    // for (let i = 0; i < dataArr.length; i++) {
    //     console.log(dataArr[2][i]);
    // }

    

    // for (let i of dataArr[0]) {
    //     console.log(i);
    // }

    // let a = 1
    // while (dataArr) {
    //     console.log(dataArr[2][a]);
    //     a++;
    // }

    
//}

// dataArray();

// let t_badan = [150, 170, 180, 190, 210, 220, 230];

//  for (let i of t_badan) {
//      console.log(i , ' Array For Of');
//  }

// for (let i = 0; i < t_badan.length; i++) {
//     console.log(t_badan[i]);
// }

function panggil() {
    let motor = {
        type : 'Honda',
        harga : 50000000,
        warna : 'Merah',
        tahun : [[1999, 2000, 2001, 2002, 2003, 2004, 2005],
                 [2006, 2007, 2008, 2009, 2010, 2011, 2012],
                  [2013, 2014, 2015, 2016, 2017, 2018, 2019]]
    }

    let mobil = {
        type : 'Honda Mobilio',
        harga : 600000000,
        warna : 'Hitam',
        tahun : [[2000, 2001, 2002, 2003, 2004, 2005, 2006],
                  [2007, 2008, 2009, 2010, 2011, 2012, 2013],
                   [2014, 2015, 2016, 2017, 2018, 2019, 2020]]
    }
    
    let sayuran = {
        nama : 'Bayam',
        warna : 'Hijau',
        bentuk : 'Lentur',
        harga : [[2000, 4000, 6000, 8000, 10000, 12000, 14000, 16000],
                  [18000, 20000, 22000, 24000, 26000, 28000, 30000],
                   [32000, 34000, 36000, 38000, 40000, 42000, 44000]]
    }

    let buah = {
        nama : 'Apel',
        warna : 'Merah',
        bentuk : 'Bulat Dan Padat',
        harga : [[1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000],
                  [9000, 10000, 11000, 12000, 13000, 14000, 15000],
                   [16000, 17000, 18000, 19000, 20000, 21000, 22000]]
    }

    // console.log('Objek Motor : ' , motor.type)
    // console.log('Objek Mobil : ', mobil.warna)
    // console.log('Objek Sayuran : ', sayuran.nama)
    // console.log('Objek Buah' , buah.bentuk)

    let hasil_mobil = mobil.tahun[0][2];
    let hasil_motor = motor.tahun[1][4];
    let hasil_sayuran = sayuran.harga[2][6];
    let hasil_buah = buah.harga[0][6];

    console.log(hasil_mobil);
    console.log(hasil_motor);
    console.log(hasil_sayuran);
    console.log(hasil_buah);
}

panggil();