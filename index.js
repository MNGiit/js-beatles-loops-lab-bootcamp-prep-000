var musicians = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'];

var instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums'];

var array = [];

function theBeatlesPlay (musicians, instruments) {
  
   for (var i = 0; i < 4; ++i){
     
     array.push(musicians[i] + " plays "+  instruments[i]);
     
   }
  
  return array;
  
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  'He was a choir boy and boy scout',
  'He hated the sound of his own voice'
];

var strings = [];

function johnLennonFacts (facts){
  
  for (var i = 0; i < 4; i++){
    array.push(facts[i] +"!!!");
  }
  
  return strings;
}