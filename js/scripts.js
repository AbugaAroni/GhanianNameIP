

const dob1 = document.getElementById('dob');
const genders = document.getElementById("gender");
const form = document.getElementById('nameform');


form.onsubmit = function (e) {
  e.preventDefault();
var result = document.getElementById('result');
//console.log(form.dob.value);
//console.log(form.gender.value);

var sex = (form.gender.value);

var date = (form.dob.value);
//console.log(date + " this is the date");

//temporarily store and slice date values
		var qq = (date).slice(0, 2);
    var ww = (date).slice(2, 4);
    var ee = (date).slice(5, 7);
    var tt = (date).slice(8, 10);

//console.log(qq+ww+ee+tt);
  form.reset();

  //male akan names, with the first being sunday, and last being saturday
    var mnames = ['Kwasi', 'Kwadwo','Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];

  //female akan names, with the first being sunday, and last being saturday
    var fnames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua','Ama'];

  //gender variable
    var gender1 = sex;

  //personsname, value returned afterif statement carried out
    var yourname;
   //date variables
    var cc =  parseInt(qq);
    var yy =  parseInt(ww);
    var mm =  parseInt(ee);
    var dd =  parseInt(tt);

/*    console.log(cc + " cc value");
    console.log(yy + " yy value");
    console.log(mm + " mm value");
    console.log(dd + " dd value");
    */
  //number of day of week, sun =1, sat =7
    var nodow;

    //function to get day of the week
     function dow(cc,yy,mm,dd)
     {
       return (((((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26*(mm + 1) / 10)) + dd) % 7).toFixed(0));}

    nodow = parseInt(dow (cc,yy,mm,dd));

  //if statement that will switch according to the gender

    if (gender1==="Male") {
      //if statement for selection of male names
    if(nodow===1)
     {yourname = mnames[0];
     window.alert("Your Akan name is " + yourname);}

        else if (nodow===2)
     {yourname = mnames[1];
     window.alert("Your Akan name is " + yourname);}

       else if (nodow===3)
     {yourname = mnames[2];
     window.alert("Your Akan name is " + yourname);}

        else if (nodow==4)
     {yourname = mnames[3];
     window.alert("Your Akan name is " + yourname);}

       else if (nodow==5)
     {yourname = mnames[4];
     window.alert("Your Akan name is " + yourname);}

       else if (nodow==6)
     {yourname = mnames[5];
     window.alert("Your Akan name is " + yourname);}

        else if (nodow==7)
     {yourname = mnames[6];
     window.alert("Your Akan name is " + yourname);}

     else {window.alert("You must input values for the application to work");}
    }
    else {
      //if statement for selection of female names
    if(nodow===1)
     {yourname = fnames[0];
     window.alert("Your Akan name is " + yourname);}

        else if (nodow===2)
     {yourname = fnames[1];
     window.alert("Your Akan name is " + yourname);}

       else if (nodow===3)
     {yourname = fnames[2];
     window.alert("Your Akan name is " + yourname);}

        else if (nodow==4)
     {yourname = fnames[3];
     window.alert("Your Akan name is " + yourname);}

       else if (nodow==5)
     {yourname = fnames[4];
     window.alert("Your Akan name is " + yourname);}

       else if (nodow==6)
     {yourname = fnames[5];
     window.alert("Your Akan name is " + yourname);}

        else if (nodow==7)
     {yourname = fnames[6];
     window.alert("Your Akan name is " + yourname);}


     else { window.alert("You must input values for the application to work");}


    }



};

//form
/*
 const gender= document.getElementById('gender');
 const dob= document.getElementById('dob');
 const form= document.getElementById('form');
 const errorElement = document.getElementById('error')
*/
