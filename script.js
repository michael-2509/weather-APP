var display = document.querySelector('.display');
var test = document.getElementById('test');
var input = document.querySelector('.inputValue')
var submit = document.querySelector('.submit');
var desire = document.querySelector('.desire');
var temp= document.querySelector('.temp');
var desc = document.querySelector('.desc');
var iconn = document.querySelector('.icon');
var image = document.createElement('img');
var tick = document.querySelector('.tick-tock')




submit.addEventListener ('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=1d19135b5e0c3aa77f8aa4dd056afed7&units=metric')
    .then(response => response.json())
    .then(data => {

      var nameValue = data['name'];
      var tempValue = data['main']['temp'];
      var descValue = data['weather'][0]['description'];
      var iconValue = data['weather'][0]['icon'];
    
      desire.innerHTML = nameValue ;
      temp.innerHTML = Math.round(tempValue)+'&deg'+ 'C';
      desc.innerHTML = descValue;
      
      image.setAttribute('src', "https://openweathermap.org/img/wn/"+iconValue+"@2x.png");
      test.appendChild(image);
  
      

      let now = new Date();
      tick.innerHTML = update(now);
    })

      function update (d) {
      let months = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"]
      let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

      let day = days[d.getDay()];
      let month = months[d.getMonth()];
      let date = d.getDate();
      let year = d.getFullYear();
    
      return `${day} ${date} ${month} ${year}`
    }

   
   });




   
