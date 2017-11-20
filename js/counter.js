// Counter function

function modify_qty(val) {
    var qty = document.getElementById('qty').value;
    var new_qty = parseInt(qty,10) + val;
    
    if (new_qty < 0) {
        new_qty = 0;
    }
    
    document.getElementById('qty').value = new_qty;
    return new_qty;
}

// switch case

oCount.addEventListener('click', function(e) {
    e.preventDefault();
    nCount += 1;
    switch(nCount) {
        case 1:
            oResult.innerHTML = 'penny';
            break;
        case 2:
            oResult.innerHTML = 'nickle';
            break;
        case 3:
            oResult.innerHTML = 'dime';
            break;
        case 4:
            oResult.innerHTML = 'quarter';
            break;
        case 5:
            oResult.innerHTML = 'loonie';
            break;
        case 6:
            oResult.innerHTML = 'twonnie';
            break;
        default:
            oResult.innerHTML = 'No change';
    }
}, false); 