//male akan names
  var mnames = [Kwasi, Kwadwo,Kwabena, Kwaku, Yaw, Kofi, Kwame];

//female akan names
  var fnames = [Akosua, Adwoa, Abenaa, Akua, Yaa, Afua, Ama];

//gender variable
  var gender;

 //date variables
  var cc;
  var yy;
  var mm;
  var dd;

//function to get day of the week
 function dow(cc,yy,mm,dd)
 {
   return (((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26*(mm + 1) / 10)) + dd) % 7;}
