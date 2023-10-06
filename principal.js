document.getElementById('atm-form')
.addEventListener('submit', function(event) {
    event.preventDefault();
    var pin =
    document.getElementById('pin').value;

     
});


//
function consultarsaldo() {
    var CantidadT=parseInt(document.getElementById('cant').value);
    var Cantidad1=parseInt(document.getElementById('C1').value);
    var Cantidad2=parseInt(document.getElementById('C2').value);
    document.getElementById('CT').value=(Cantidad1+Cantidad2);
    if (CantidadT) {
        if( Cantidad1 + Cantidad2){
         }else(CantidadT)
    }alert('saldo disponible');
}

const logout = () => {
    sessionStorage.removeItem("token")
    window.location = '/index.html'

    const logoutbutton = document.querySelector('logout')
    logoutbutton.addEventListener('click', logout)
}


function formula() {
    var CantidadT=parseInt(document.getElementById('cant').value);
    var Cantidad1=parseInt(document.getElementById('C1').value);
    var Cantidad2=parseInt(document.getElementById('C2').value);
    document.getElementById('C1').value=(Cantidad1-CantidadT);
    document.getElementById('C2').value=(Cantidad2+CantidadT);
    
}

function formula2() {
    var CantidadT=parseInt(document.getElementById('cant').value);
    var Cantidad1=parseInt(document.getElementById('C1').value);
    var Cantidad2=parseInt(document.getElementById('C2').value);
    document.getElementById('C1').value=(Cantidad1+CantidadT);
    document.getElementById('C2').value=(Cantidad2-CantidadT);
    
}

function formula3() {
    var CantidadT=parseInt(document.getElementById('cant').value);
    var Cantidad1=parseInt(document.getElementById('C1').value);
    var Cantidad2=parseInt(document.getElementById('C2').value);
    document.getElementById('C1').value=(Cantidad1+CantidadT);
    
}

function formula4() {
    var CantidadT=parseInt(document.getElementById('cant').value);
    var Cantidad1=parseInt(document.getElementById('C1').value);
    var Cantidad2=parseInt(document.getElementById('C2').value);
    document.getElementById('C2').value=(Cantidad2+CantidadT);
    
}

function formula5() {
    var CantidadT=parseInt(document.getElementById('cant').value);
    var Cantidad1=parseInt(document.getElementById('C1').value);
    var Cantidad2=parseInt(document.getElementById('C2').value);
    document.getElementById('C1').value=(Cantidad1-CantidadT);
    
}
function formula6() {
    var CantidadT=parseInt(document.getElementById('cant').value);
    var Cantidad1=parseInt(document.getElementById('C1').value);
    var Cantidad2=parseInt(document.getElementById('C2').value);
    document.getElementById('C2').value=(Cantidad2-CantidadT);
    
}