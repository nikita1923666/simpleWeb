/**
 * Created by Nikita on 6/26/2017.
 */
function toggleList() {
    var list = $('#list');

    if (list.is(':visible')) {
        list.fadeOut();
    }
    else {
        list.fadeIn();
    }
}

function insert() {
    var list = $('#list');
    var children = list.children();
    var next = children.length + 1;
    list.append('<li>Dog ' + next + '</li>');
}

function ajaxCalc() {
    var form = $('#ajaxCalc');
    var inputA = form.find('input[name="a"]');
    var inputB = form.find('input[name="b"]');
    var inputC = form.find('input[name="c"]');

    var a = inputA.val();
    var b = inputB.val();
    var c = inputC.val();

    var url = '/solve.api?a=' + a + '&b=' + b + '&c=' + c;
//(a to ooo< query.a)a='a'(from value of input here)
    $.ajax(url, {
        success: displayResult,
        error: showError
    })

}

function displayResult(data) {
    var resPad = $('#result');

    resPad.html('<div class="solve">' +
        '<div>' +
        '<p><span class="purple">The Quadratic Formula:</span>' +
        ' For ax² + bx + c = 0, the values of x which are the solutions of the equation are given by:' +
        '</p>' +
        '</div>' +
        '<p>First root for this equation-X1: ' + data.x1 + '</p>' +
        '<p>Second root for this equation-X2:' + data.x2 + '</p>' +
        '</div>');
    resPad.show();
}

function showError(resp) {
    var resPad = $('#result');

    resPad.html('<div class="error">' +
        '<p><span class="purple">The Quadratic Formula:</span>' +
        ' For ax² + bx + c = 0, the values of x which are the solutions of the equation are given by:' +
        '</p>' +
        '<p>Error: ' + (resp.responseText || resp.statusText) + '</p>' +
        '</div>');

    resPad.show();
}

function clearResult() {
    var resPad = $('#result');
    resPad.hide();
}