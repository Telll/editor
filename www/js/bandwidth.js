$(function(){

	var tbgn = (new Date()).getTime();
		console.log(tbgn);
	var tend, delay, band;
        
	$.ajax( {
             url: "assets/100k.html", 
             cache: false
        }).done(function( data ) {
            	tend = (new Date()).getTime();
		console.log(tend);
		delay = tend - tbgn;
		band = 100/delay;  // Mbytes/second
		console.log(band);
                document.write("<h1>You can download "+band+" Mb/Sec");
                document.write("<h1>You can download "+band+" Mb/Sec");
	});

});
