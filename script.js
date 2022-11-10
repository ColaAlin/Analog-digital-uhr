function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " ";
  
    document.getElementById("digital-clock").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
  }
currentTime();


 const secondsHand = document.getElementById('seconds')
 const minutesHand = document.getElementById('minutes')
 const hoursHand = document.getElementById('hours')

 function getTime(){
     const now = new Date()
   
     const seconds = now.getSeconds()

     const minutes = now.getMinutes()
    
     const hours = now.getHours()

     const timeInterval = 6

     secondsHand.style.transform = 'rotate(' + (seconds * timeInterval) + 'deg)'
     minutesHand.style.transform = 'rotate(' + (minutes * timeInterval + seconds / 10) + 'deg)'
     hoursHand.style.transform = 'rotate(' + (hours * 30 + minutes / 10 ) + 'deg)'
 }
setInterval(getTime, 1000);
getTime();
  