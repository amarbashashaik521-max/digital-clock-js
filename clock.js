
function showTime()
{
   let now = new Date();

   let hours = now.getHours();
   let minutes = now.getMinutes();
   let seconds = now.getSeconds();

   if (hours < 10)
   {
   	hours = "0" + hours;
   }
   if (minutes < 10)
   {
	minutes = "0" + minutes;
   }
   if (seconds < 10)
   {
        seconds = "0" + seconds;
   }


   document.getElementById("clock").innerHTML =
   hours + ":" + minutes + ":" + seconds;
   
   let days = [
"Sunday",
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday"
];
  
 let months = [
"January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December"
];

   let day=days[now.getDay()]; 
   let month=months[now.getMonth()];
   let date=now.getDate();
   let year=now.getFullYear();

   document.getElementById("date").innerHTML = day + "<br>" + date + " " + month + " " + year;

   }

showTime();
setInterval(showTime,1000);
