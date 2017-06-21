order=[1,-8,5,11,33,67,-95];
    var orderInc=[];
    var orderDec=[];
    for( var a=0;a<order.length;a++){
        orderInc[a]=order[a];
        orderDec[a]=order[a];
    }
    for (var c = 0; c < order.length; c++) {
        for (var z = c + 1; z < order.length; z++) {
            if (orderInc[c] > orderInc[z]) {
                var f = orderInc[c];
                orderInc[c] = orderInc[z];
                orderInc[z] = f;
            }
            if (orderDec[c] < orderDec[z]) {
                var g = orderDec[c];
                orderDec[c] = orderDec[z];
                orderDec[z] = g;
            }
        }
    }
console.log(orderInc);
console.log(orderDec);
