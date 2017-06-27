/**
 * Created by Nikita on 6/15/2017.
 */
function sortInc(order) {
    for (var c = 0; c < order.length; c++) {
        for (var z = c + 1; z < order.length; z++) {
            if (order[c] > order[z]) {
                var f = order[c];
                order[c] = order[z];
                order[z] = f;
            }
        }
    }

    return order;
}
function sortDec(order) {
    for (var c = 0; c < order.length; c++) {
        for (var z = c + 1; z < order.length; z++) {
            if (order[c] < order[z]) {
                var f = order[c];
                order[c] = order[z];
                order[z] = f;
            }
        }
    }

    return order;
}

function solve1(a,b,c){
    var x1;
    var d = b*b - 4*a*c;
    x1 = (-b + Math.sqrt(d))/(2*a);
    return x1;
}
function solve2(a,b,c){
    var x2;
    var d = b*b - 4*a*c;
    x2 = (-b - Math.sqrt(d))/(2*a);
    return x2;
}
exports.sortInc = sortInc;
exports.sortDec = sortDec;
exports.solve1 = solve1;
exports.solve2 = solve2;