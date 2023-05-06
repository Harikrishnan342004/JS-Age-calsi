function Operation()
{
     setInterval(() =>         // setInterval()  method is used to call a function at specified intervals (in milliseconds )....
     {


        //Collect the input [ birth DOB  ] from users .....

        let birthdate =  new Date(document.getElementById("birthdate").value );



        let now = new Date();
        let ageInMs = now.getTime() - birthdate.getTime();



        let ageInseconds = ageInMs / 1000 ;
        let ageInMinutes = ageInseconds / 60;
        let ageInHrs =   ageInMinutes/60;
        let ageInDays = ageInHrs/24 ;
        let ageInMonths =ageInDays/ 30.4372;
        let ageInYears = ageInMonths/12;


        document.querySelector("#years").innerHTML = Math.floor(ageInYears);
        document.querySelector('#months').innerHTML = Math.floor(ageInMonths);
        document.querySelector("#days").innerHTML = Math.floor(ageInDays);
        document.querySelector("#hours").innerHTML = Math.floor(ageInHrs);
        document.querySelector("#minutes").innerHTML = Math.floor(ageInMinutes);
        document.querySelector("#seconds").innerHTML = Math.floor(ageInseconds);
        document.querySelector("#seconds").style.borderBottom = '1px grey solid';
      }, 1000);
}

function reset()
{
    window.location.reload();
}