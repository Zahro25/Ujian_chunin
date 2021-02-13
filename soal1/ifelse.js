let waktu = 17;
if (waktu > 24){
    console.log('maaf anda salah wilayah mungkin');
}else if(waktu >= 1 && waktu < 12 ){
    console.log('selamat pagi pak');
}else if(waktu >= 12 && waktu < 15){
    console.log('selamat siang pak');
}else if(waktu >= 15 && waktu < 19){
    console.log('selamat sore pak');
}else{
    console.log('selamat malam pak');
}