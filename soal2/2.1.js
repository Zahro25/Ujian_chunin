let raport = function (nilaiUN){
    let rataRAta = nilaiUN.reduce((acc, cur)=> acc+cur)/nilaiUN.length
    if(nilaiUN.length === 4){
        if (rataRAta <= 100 && rataRAta >= 90){
            console.log('A');
        }else if (rataRAta < 90 && rataRAta >= 80){
            console.log('B');
        }else if (rataRAta < 80 && rataRAta >= 70){
            console.log('C');
        } else if (rataRAta < 70 && rataRAta >= 60){
            console.log('D');
        }else if(rataRAta < 60 && rataRAta >= 0){
            console.log('E');
        }else{
            console.log('data yang anda inputkan salah');
        }
    }else{
            console.log('Anda terlalu banyak memasukkan data');
    }
}
raport([90, 80, 70, 'ab']);