
// regular check d
function hasNum(str) {
	if(/\d/.test(str))
		return 1;
	else
		return 0;
}

function hasLo(str)
{
	if(/[a-z]/.test(str))
		return 1;
	else
		return 0;
}

function hasUp(str) {
	if(/[A-Z]/.test(str))
		return 1;
	else
		return 0;
}

function hasSpe(str) {
	if(/[!@#$%^&*()-+]/.test(str))
		return 1;
	else
		return 0;
}

function mymin(p) {
	var curr_len = p.length;
	
	var type_len = hasNum(p) + hasLo(p) + hasUp(p) + hasSpe(p);
	var type_miss_len = 4 - type_len;
	var fill_len;
	var min_p_len = 6;
	var need_len = 0;
	if(curr_len < min_p_len) {
		fill_len = min_p_len - (curr_len + type_miss_len);
		need_len = fill_len + type_miss_len;	
	} else {
		need_len = type_miss_len;
	}			

	return need_len;
}

function minimumNumber(n, password) {
	return mymin(password);
}

var n = null;
var password = 'Ab1'; 
var out = minimumNumber(n, password);
console.log(out);
