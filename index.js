let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1;
today = `${mm}/${dd}`;

document.getElementById('date-display').innerText = today;