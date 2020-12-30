import * as counter from 'lib/counter.js';

console.log(counter.counter); // 1
counter.increment();
console.log(counter.counter); // 2
  
let l=["butt1","butt1","butt2","butt1","test"]    
let s="", expr="butt1";  

l.forEach(element => switchme(element)); 
    
function switchme(expr) {    
  switch (expr) {
    case 'butt1':
      s = 'Hello Butt1 '+expr+'<br>'+s; 
      document.getElementById("demo").innerHTML = s;
      console.log('Hello JavaScript! ${expr}',"\n");
      break;
    case 'butt2':
      s = 'Hello Butt2 '+expr+'<br>'+s; 
      document.getElementById("demo").innerHTML = s;
      console.log('Hello JavaScript! ${expr}',"\n");
      break;
    default:
      s = 'Hello Default '+expr+'<br>'+s; 
      document.getElementById("demo").innerHTML = s;    
      console.log(`Sorry, we are out of ${expr}.`);
  }  
}    
