fashnoid.service('SessionService', function($http) { 

    this.isKeyAvailable = function (key) {  
    	if(localStorage.getItem(key) != null)
    		return true;
    	return false;
    }; 

    this.setObject = function (key, value) {
    	localStorage.setItem(key, JSON.stringify(value));
    };
	
	this.getObject = function (key) {
		console.log(' Key ---- ', key);
		if(localStorage.getItem(key) != null )
			return localStorage.getItem(key);
		return null;
	}

	this.removeObject = function (key) {
		if(localStorage.getItem(key) != null )
			return localStorage.setItem(key, null);
		return null;
	}

});