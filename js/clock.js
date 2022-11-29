// const clock = () => {
//    const date = new Date()
//    const sec = date.getSeconds()
//    const minute = date.getMinutes()
//    const hour = date.getHours()
   
//    let hourAngle = hour * 30
//    let minuteAngle = minute * 6
//    let secAngle = sec * 6
   
//    function moveSecond () {
//       const arrowSecond = document.getElementById('second');
      
//       arrowSecond.style.transform = `rotate(${secAngle}deg)`
       
      

const clock = () => {
   const arrowSecond = document.getElementById('second');
   const arrowMinute = document.getElementById('minute');
   const arrowHour = document.getElementById('hour');
   
   setInterval(() => {
      let deg = 6
      const date = new Date()
      const sec = date.getSeconds() * deg
      const minute = date.getMinutes() * deg
      const hour = date.getHours() * 30

   arrowHour.style.transform = `rotate(${(hour) + (minute / 12)}deg)`
   arrowMinute.style.transform = `rotate(${minute}deg)`
   arrowSecond.style.transform = `rotate(${sec}deg)`
   })   
}
clock()

