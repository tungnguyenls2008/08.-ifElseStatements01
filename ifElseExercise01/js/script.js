function checkAnswer() {
    let a=document.getElementById('answer').value;
    if (a === 'ECMAScript') {
        document.getElementById('respond').innerHTML=('Right!');
        console.log(a);
    } else {
        document.getElementById('respond').innerHTML=("You don't know? ECMAScript!");
        console.log(a);
    }
}