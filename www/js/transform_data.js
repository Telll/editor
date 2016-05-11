// Create the actual telll data
// run with node

var dump = require('var-dump')({silence: false});
var data = require("./old_data");
var myPhotolinks = data.myPhotolinks;
var trackms = data.trackms;
var spots = data.spots;
var spots2 = data.spots2;

var plId = myPhotolinks.length;
var trId = trackms.length;

for (var i = 0; i < spots.length; i++){
   var photolink = {
        thumb: spots[i].thumb,  
        photolink: {
            id: plId,
            title: spots[i].links[0].title,
            description: spots[i].links[0].description,
            link: [{
                title: spots[i].links[0].title,
                description:  spots[i].links[0].description,
                url:  spots[i].links[0].link
            }]
        }
    }
    var track     = {
	id: trId,
        stopped: 1,
        photolink: plId,
        points: spots[i].points
    };
    myPhotolinks.push(photolink);
    trackms.push(track);

	plId ++;
	trId ++;
 
}

for (var j = 0; j < spots2.length; j++){
   var photolink = {
        thumb: spots2[j].thumb,  
        photolink: {
            id: plId,
            title: spots2[j].links[0].title,
            description: spots2[j].links[0].description,
            link: [{
                title: spots2[j].links[0].title,
                description:  spots2[j].links[0].description,
                url:  spots2[j].links[0].link
            }]
        }
    }
    var track     = {
	id: trId,
        stopped: 1,
        photolink: plId,
        points: spots2[j].points
    };
    myPhotolinks.push(photolink);
    trackms.push(track);

	plId ++;
	trId ++;
 
}


var movieId = 0;
for (var k = 0; k < trackms.length; k++){
	if ( (k > 10) && (k <= 19) ) movieId = 1;
	if ( (k > 19) && (k <= 30) ) movieId = 2;
    trackms[k].movie = movieId;
}
dump(myPhotolinks);
console.log("//////////////////////////////////");
dump(trackms);
