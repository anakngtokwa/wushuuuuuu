const main = document.querySelector('.main');
const cancel = document.querySelector('.cancel');
const msg = document.querySelector('#msg');

while (true) {
    let n = prompt("Enter your name");
    
    if(n == null) {
        main.style.display = "none";
        cancel.style.display = "flex";
        msg.innerHTML = "Thank you!!!";
    }

    if (n.length > 0) {
        alert("Thru message lang sana 'to eh kaso bida bida ako");
        alert('What if Tayo nalang');
        alert('gusto mo ba 'ko? ');
        alert('I love You ' + n);
        main.style.display = 'block';
        break;
    }
}
