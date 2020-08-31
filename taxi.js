const tariffData = [
  [[[2.3, 0.15, 1.4],  
  [2.5, 0.15, 1.7]], 
  [[1.7, 0.15, 1.6], 
  [2, 0.15, 1.9]]], 
  [[[2.5, 0.18, 1.51], 
  [2.7, 0.18, 1.9]], 
  [[1.9, 0.18, 1.71], 
  [2.1, 0.18, 1.95]]]
]
let fare = 0;
let i = 0; //i day or night
let j = 0; //j 1to4 or 5to8 passengers
let k = 0; //k standart or lux

const btns = document.querySelector('.ride-type-container');
const form = document.querySelector('form');
const resetBtn = document.querySelector('.reset-btn');
btns.addEventListener('click', colorChange);
form.addEventListener('change', fareCalculator);
resetBtn.addEventListener('click', reset);

function reset() {
  document.getElementById('distance').value = "";
  document.getElementById('time').value = "";
  document.getElementById('fare').textContent = '£0.0';
}

function colorChange(event){
  const isButton = event.target;
  document.querySelector('.form-container').classList = `form-container ${isButton.classList[0]}`;  
  isButton.classList[0] === 'standard' ? k = 0 : k = 1
  fareCalculator();
}

function fareCalculator () {
  let distance = document.getElementById('distance').value;
  let time = document.getElementById('time').value;
  if (isNaN(distance) || isNaN(time)) {
    window.alert("Distance and Time values must be number");
    reset();
  } else {
    let dayNight = document.getElementsByName('day-night')  
    for (let rd of dayNight) {
      rd.checked ? i = rd.value : i;
    }
    let passNumber = document.getElementsByName('pass-number')  
    for (let rd of passNumber) {
      rd.checked ? j = rd.value : j;
    }
    let arr = tariffData[i][j][k];
    fare = arr[0] + distance*arr[2] + time*arr[1];
    console.log(fare);
    if (fare < 4) {
      fare = 4;
    }
    document.getElementById('fare').textContent = '£' + fare.toFixed(2);
  };
}


