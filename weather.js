function c(){
let city=String(document.getElementById("city").value);
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=6bacb232a0f59d0ec64765b01657a03e")
    .then((res) => res.json())
    .then((json) => {
      document.getElementById("c").innerHTML="Name of City:"+city;
      document.getElementById("d").innerHTML="TimeZone:"+json.timezone;
      document.getElementById("e").innerHTML="Temperature"+json.main.temp;
      document.getElementById("f").innerHTML="Visibility:"+json.visibility;      
    }
  );
}