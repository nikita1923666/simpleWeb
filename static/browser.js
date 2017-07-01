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


    var url = '/solve.api?' + form.serialize();
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

function ajaxSearch() {
    var form = $('#ajaxSearch');
    var url = '/search.api?' + form.serialize();
    $.ajax(url, {
        success: displaySearch,
    })
}
function displaySearch(data) {
    var a = $('#found');
    a.html('');
    if (data.person && data.person.length) {
        var table = $(
            '<table>' +
               '<tr>' +
                '<th>Number</th>'+
                  '<th>Name</th>' +
                  '<th>Last Name</th>' +
                  '<th>Age</th>' +
               '</tr>' +
            '</table>');
        data.person.forEach(function (person, n) {
            table.append(
                '<tr>' +
                '<td>' + (n+1) +'</td>' +
                   '<td>' + person.name +'</td>' +
                   '<td>' + person.surname + '</td>' +
                   '<td>' + person.age + '</td>' +
                '</tr>');
        });

        a.append(table);
    }

}