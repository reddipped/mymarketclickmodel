//let showLogin = true;
let showMyOrders = false;
let showOrders = false;

// Only one should be true 
let LoginPanel = true ;
let MyOrder = false ;
let MySearch = false ;
let MySettings = false ;

function clickMyOrder() {
    showMyOrders != showMyOrders;
}


function clickLogin() {
    console.log('login');
    // showMyOrders(true);
    showLogin(false);

}

function showLogin(visible) {
    
    if (visible) {
        document.getElementsByClassName('login')[0].style.visibility = 'visible';
    } else {
        document.getElementsByClassName('login')[0].style.visibility = 'hidden';
    }
}