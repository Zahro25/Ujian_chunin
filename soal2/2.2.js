let data = {
    id : 1,
    name :'Leanne Graham',
    username : 'Bret',
    email :'Sincere@april.biz',
    addres : {
      street :'Kulas Light',
      suite : 'Apt. 556',
      city : 'Gwenborough',
      zipcode :'92998-3874',
      },
      phone : '1-770-736- 8031 x56442',
      website :'hildegard.org',
  }
  let data1 = {...data};
    data1 = {
    name : 'fatimatuzzahro',
    email : 'zahro248120@gmail.com',
    hoby : 'makan'
  }

  const {street, city} = data.addres;

  console.log(data1);
  console.log(`${street} ${city}`);