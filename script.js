var card = document.getElementsByClassName('card')
var input = document.querySelector('.name')
var submit = document.getElementsByClassName('submit');
var name = document.getElementsByClassName('name');
var temp= document.getElementsByClassName('temp');
var desc = document.getElementsByClassName('desc');


card.addEventListener ('submit', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=1d19135b5e0c3aa77f8aa4dd056afed7')
    .then(response => response.json())
    .then(data => {
      var tempValue = data['main']['temp'];
      var nameValue = data['name'];
      var descValue = data['weather'][0]['description'];
    
    name.innerHTML = nameValue;
      desc.innerHTML = descValue;
      temp.innerHTML = tempValue;
    
    
    })
    

    })