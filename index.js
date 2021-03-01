let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1;
today = `${mm}/${dd}`;

document.getElementById('date-display').innerText = today;

function currentTime(){
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let timeOfDay = 'AM';
    timeOfDay = hour >= 12 ? 'PM' : 'AM'

    hour = (hour == 0) ? 12 : (hour > 12) ? hour - 12 : hour;
    hour = updateTime(hour)
    min = updateTime(min)

    document.getElementById('clock-display').innerText = `${hour}:${min} ${timeOfDay}`;
    var t = setTimeout(function(){ currentTime() }, 2000)
}

function updateTime(time){
    if(time < 10){
        return '0' + time;
    } else {
        return time;
    }
}

currentTime()