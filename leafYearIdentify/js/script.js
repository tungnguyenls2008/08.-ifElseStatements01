function checkLeafYear(){
let y=document.getElementById('year').value;
if (y % 4 === 0) {
    if (y % 100 === 0) {
        if (y % 400 === 0) {
            document.getElementById('result').value=(y + " is a leap year");
        } else {
            document.getElementById('result').value=(y + " is NOT a leap year");
        }
    } else {
        document.getElementById('result').value=(y + " is a leap year");
    }
} else {
    document.getElementById('result').value=(y + " is NOT a leap year");
}}