	function isEmpty(str){
		var flag = false;
		if(str.split(" ").join("")==""){
			flag = true;
		}
		return flag;
	}


	function checkmemname(name){
		var flag = false;
		var regExp = new RegExp( /^[가-힣]{2,20}$/ );
		if(!regExp.test(name)){
		
			flag = true;
		}			
		return flag;
	}


	function checkid(id){
		var flag = false;
		var regExp = new RegExp( /^[a-z][a-z0-9_]{4,9}$/ );
		if(!regExp.test(id)){
			var flag = true;
		}
		return flag;
	}
 

	function checkpwd(pwd){
		var flag = false;
		var regExp = new RegExp( /^[a-z0-9]{5,8}$/ );
		if(!regExp.test(pwd)){
			var flag = true;
		}
		return flag;
	}

