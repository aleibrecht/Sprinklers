// Insert script into the DOM
function insertStyle(src) {
    var a=document.createElement("link");
    a.href=src;
    a.rel="stylesheet";
    document.head.appendChild(a);
}

// Insert script into the DOM
function insertScript(src,callback) {
	callback = callback || function(){};

    var a=document.createElement("script");
    a.src=src;
    document.head.appendChild(a);

    var interval = setInterval(function(){
		if (document.readyState === "complete") {
			clearInterval(interval);
			callback();
		}
	},2);
}

insertStyle("http://rawgit.com/salbahra/Sprinklers/master/www/css/jquery.mobile.min.css");
insertStyle("http://rawgit.com/salbahra/Sprinklers/master/www/css/main.css");
insertScript("http://rawgit.com/salbahra/Sprinklers/master/www/js/jquery.min.js",init);

function init() {
	var body = $("body");

	body.hide();

	$.get("http://rawgit.com/salbahra/Sprinklers/master/www/index.html",function(data){
		var pages = data.match(/<body>([.\s\S]*)<\/body>/);

		body.html(pages[1]);

		insertScript("http://rawgit.com/salbahra/Sprinklers/master/www/js/libs.js",function(){
			insertScript("http://rawgit.com/salbahra/Sprinklers/master/www/js/main.js",function(){
				insertScript("http://rawgit.com/salbahra/Sprinklers/master/www/js/jquery.mobile.min.js",function(){
					body.show();
				});
			});
		});

		// Set current IP to the device IP
//			curr_ip = document.URL.match(/https?:\/\/(.*)\/.*?/)[1];

		// Disables site selection menu
//			curr_local = true;

		// Request device password if unknown

		// Trigger login (if device hasn't already)

	});
}