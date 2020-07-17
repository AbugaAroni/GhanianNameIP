//male akan names, with the first being sunday, and last being saturday
  var mnames = ['Kwasi', 'Kwadwo','Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];

//female akan names, with the first being sunday, and last being saturday
  var fnames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua','Ama'];

//gender variable
  var gender;

//personsname, value returned afterif statement carried out
  var yourname;
 //date variables
  var cc;
  var yy;
  var mm;
  var dd;

//number of day of week, sun =1, sat =7
  var nodow;

  //function to get day of the week
   function dow(cc,yy,mm,dd)
   {
     return (((((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26*(mm + 1) / 10)) + dd) % 7).toFixed(0));}

  nodow = parseInt(dow (cc,yy,mm,dd));
  console.log(dow (cc,yy,mm,dd));
  console.log(nodow);
  console.log(mnames[nodow]+"control");

  //if statement for selection of male names

  if(nodow===0)
   {yourname = mnames[0];
  	 console.log(yourname+"sunday");}

      else if (nodow===1)
   {yourname = mnames[1];
  	 console.log(yourname+"monday");}

     else if (nodow===2)
   {yourname = mnames[2];
  	 console.log(yourname+"tuesday");}

      else if (nodow==3)
   {yourname = mnames[3];
  	 console.log(yourname+"wednesday");}

     else if (nodow==4)
   {yourname = mnames[4];
  	 console.log(yourname+"AB4UGA");}

     else if (nodow==5)
   {yourname = mnames[5];
  	 console.log(yourname+"ABUG6A");}

      else if (nodow==6)
   {yourname = mnames[6];
  	 console.log(yourname+"ABA");}


   else {console.log("Itdidntwork");}
