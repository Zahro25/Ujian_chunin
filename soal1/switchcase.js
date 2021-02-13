let product = 'tunik';
switch(product){
    case 'bedak':
    case 'lipstick':
    case 'blushon':
    case 'maskara':
    case 'eyeliner':
        console.log("kosmetik");
        break;
    case 'tunik':
    case 'kemeja':
    case 'kaos':
        console.log("atasan");
        break;
    case 'rok plisket':
    case 'baggy pants':
    case 'rok sepan':
        console.log('bawahan');
        break
    default:
        console.log("bukan product kami");
}