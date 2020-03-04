/**
 * Сокращенный вариант функции querySelector
 *
 * @param e
 * @returns {Element}
 */
function qs(e){
	let cons = false;
    // console.log('qs(' + e + ')');
    if (typeof e != 'undefined' && e != '')
    try {
        var r = document.querySelector(e);
        if (cons && r == null) {
            console.log('qs("' + e + '") = null');
        }

        return r;
    } catch(t){
    	if (cons) console.log(t);
        return null;
    } else {
        if (cons)  console.log('error qs("' + e + '")');
        return null;
    }
}