var wallet_amount = 25;

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};

function nextLook(look) {
    document.getElementById(look).scrollIntoView();
    if(look !== 'look1') {
        wallet_amount += 5;
        document.getElementById('wallet-amount').innerHTML = wallet_amount + ',00';
        document.getElementById('wallet-amount-m').innerHTML = wallet_amount  + ',00';
    }
}

function openPopup() {
    document.getElementById('popup').style.display = 'block';
}

function goVSL() {
    var page = '/vsl.html';
    window.open(page + '?src=' + getUrlParameter('src'), '_self');
}