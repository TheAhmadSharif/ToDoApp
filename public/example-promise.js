function getTemplateCallback (location, callback) {
	callback(undefined, 47);
	callback('City not found');
}

getTemplateCallback('Dhaka', function (error,temperature ){
	if(error) {
		console.log('error');
	}
	else { 
		console.log('success', temperature);
	}
});


function getPromise (location) {
	return new Promise (function (resolve, reject) {
			resolve (78);
			reject('City Not Found');
	});
};

getPromise('Dhaka').then(function (temperature){
	console.log('Success')
}, function (error) {

});