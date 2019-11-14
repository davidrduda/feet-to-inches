function conv(ft) {
    return feet*12;
}
var feet=Number(prompt('Enter the number of feet.'));
var inches=Math.round(conv(feet),2);
if (feet>1){
    alert(feet+' feet is '+inches+' inches.');
}
else {
    alert('1 foot is '+inches+' inches.');
}