/**
 * Created by Nikita on 6/15/2017.
 */
function sort(order) {
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

exports.sort = sort;