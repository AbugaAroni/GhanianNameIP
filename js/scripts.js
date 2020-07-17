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
   //tofixed returns a single digit
   return nodow = ((((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26*(mm + 1) / 10)) + dd) % 7).toFixed(0);}

if(gender === "Male")
//if statement for selection of male names
  {if(nodow===1)
    {
      yourname= mnames[1];
    }
  else if(nodow===2)
    {
      yourname= mnnames[2];
    }
    else if(nodow===3)
      {
        yourname= mnnames[3];
      }
      else if(nodow===4)
        {
          yourname= mnnames[4];
        }
        else if(nodow===5)
          {
            yourname= mnnames[5];
          }
          else if(nodow===6)
            {
              yourname= mnnames[6];
            }
            else
            {
              yourname= mnames[7];
            }
}
//selection of female names
else if {

}
// should display error
else
