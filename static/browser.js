/**
 * Created by Nikita on 6/26/2017.
 */
var c = 0;
function toggleList() {
    var list = document.getElementById('list');
    if(c % 2 === 0){
        list.style.display = 'none';
    }
    else {
        list.style.display = 'block';
    }
    c++;
}