function insert(num) {
    document.forms.textview.value =
    document.forms.textview.value +num; 
}
function clean() {
    document.forms.textview.value = '';
}
function back() {
    var exp =  document.forms.textview.value;
    document.forms.textview.value = exp.substring(0, exp.length-1);
}
function equal() {
    var exp =  document.forms.textview.value;
    if(exp) {
        document.forms.textview.value = eval(exp);
    }
}