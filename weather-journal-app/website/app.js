/* Global Variables */
// my api key = 65efc76b2a823e81a66bd87a9f8e6486
//Api


//https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}
let personalApikey= `65efc76b2a823e81a66bd87a9f8e6486&units=imperial`;

let myTemp;
// this elment catch the button
let submit = document.getElementById('generate');


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth()+1)+'.'+ d.getDate()+'.'+ d.getFullYear();



// we add event when user click on the button the arrow function (main function in code) take the values user type it into lables countryCODE,feel
submit.addEventListener('click',()=>{
   let  countryCODE = document.getElementById('zip').value;
   let feel = document.getElementById('feelings').value;
   let baseUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${countryCODE}&appid=`;
   //full api link
   let myFullApi = baseUrl+personalApikey;
   // fetch th api and convert it to json
   let fetchApi = fetch(myFullApi).then(mk => mk.json());
       // we take the promise from fetch api and convert to object 
   fetchApi.then((data) =>{
      //select the temp from object
      my1Temp=data.main.temp;
     // call the function to send data take 4 parameters 1) route 2) elment that contains temp 3)element that contains feeling of user 4 ) elment contains the current date
      sendData('/store',my1Temp,feel,newDate);

   }).then(()=>retrieveData());



});



// arrow function contains the data to send to server take 4 parameters 1) route 2) elment that contains temp 3)element that contains feeling of user 4 ) elment contains the current date
let sendData = async (url,my1Temp,feel,newDate)=>{
    // object that contains the data  
   let myOwnData = {
      myTemp :my1Temp,
      thefeeling: feel,
      thedata: newDate
     };
     try{
     //fetch method  (post) to send data to server
   let respo =await fetch(url,{
      method:'post',
      credentials: 'same-origin',
      headers:{
         'Content-Type':'application/json'
      },
      body:JSON.stringify(myOwnData),

   });
  
   }catch(erorr){
      console.log(erorr)
   }
};



// to call data from server and view in browser
const retrieveData = async () =>{
   const request = await fetch('/send');
   try {
   // Transform into JSON
   const allData = await request.json()
   console.log(allData)
   // Write updated data to DOM elements
   document.getElementById('temp').innerHTML = Math.round(allData.myTemp)+ 'degrees';
   document.getElementById('content').innerHTML = allData.thefeeling;
   document.getElementById("date").innerHTML =allData.thedata;
   }
   catch(error) {
     console.log("error", error);
     // appropriately handle the error
   }
  }




