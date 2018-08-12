
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
	if(/[!@#$%^&*()\-+]/.test(str))
		return 1;
	else
		return 0;
}

function mymin(p) {
	var curr_len = p.length;

	var all_type = 4;
	var min_p_len = 6;	
	
	var type_exist_len = hasNum(p) + hasLo(p) + hasUp(p) + hasSpe(p);
	var type_miss_len = all_type - type_exist_len;  	
	var after_add_miss_type_len = curr_len + type_miss_len;

	// e.g. abc + 1A$
	if(after_add_miss_type_len >= min_p_len) {
		return type_miss_len;
	} else {
		// e.g. a + 1A$, so (fill) + miss_type 
		return (min_p_len - after_add_miss_type_len) + type_miss_len;
	}

}

function minimumNumber(n, password) {
	return mymin(password);
}

var n = null;
var password = 'AUzs-nV'; 
var out = minimumNumber(n, password);
console.log(out);
