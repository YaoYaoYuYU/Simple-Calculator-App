let display = document.getElementById('display');

function appendToDisplay(val){
  display.value += val;
}

function ClearDisplay(){
  display.value='';
}

function CalculateResult(){
  try{
    display.value = eval(display.value);
  }catch(error){
    display.value='Error';
  }
}
