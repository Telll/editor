    /** the movie player
     * TODO: make a class
     **/
    var thePlayer = {};
    projekktor('#telll-pkt', {
	volume: 0.8,
	playerFlashMP4: 'js/projekktor/swf/StrobeMediaPlayback/StrobeMediaPlayback.swf',
	playerFlashMP3: 'js/projekktor/swf/StrobeMediaPlayback/StrobeMediaPlayback.swf',
        width: $('#telll-movie').width(),
        height: $('#telll-movie').height(),
        disallowSkip: false,
        //platforms: ['browser', 'flash'],
        enableFullscreen: false,
        useYTIframeAPI: true,
    }, function(player){
        // player listeners
        player.addListener('time', timeListener);
        player.addListener('state', stateListener);
        player.addListener('mouseenter', mouseEnterListener);
        player.addListener('touchstart', mouseEnterListener);
        player.addListener('mouseleave', mouseLeaveListener);
        player.addListener('touchend', mouseLeaveListener);
        // is youtube?
        if (isYoutube){
            var playlist = [
               {
                  0:{src:"http://www.youtube.com/watch?v=ooWWBybEKHc", 
                     type:"video/youtube"}
               }   
            ];
            player.setFile(playlist);
            player.setConfig( {platforms: ['flash']} );
            player.setDebug(true);
            console.log('Its Youtube');
            console.log(player);
        }
        //player.setDebug(true);
        thePlayer = player;
    });
    // Video behaviors
    // show labels when mouse over
    var mouseEnterListener = function(){
          tagDefaultView(); 
    }
    // hide labels 5 seconds after mouse out
    var mouseLeaveListener = function(){
          setTimeout(function(){tagNoneView()},5000); 
    }
    // state listener callback
    var stateListener = function(state) {
    //console.log(state);
    switch(state) {
        case 'PLAYING':
        break;
        case 'PAUSED':
            $('.tag').detach();
	    for (i = 0 ; i < animT.length ; i++) { clearTimeout(animT[i]); }
            for (i = 0 ; i < trackms.length; i++){ trackms[i].stopped = 1; }
        break;
        case 'STOPPED':
            $('.tag').detach();
	    for (i = 0 ; i < animT.length ; i++) { clearTimeout(animT[i]); }
            for (i = 0 ; i < trackms.length; i++){ trackms[i].stopped = 1; }
        break;
        case 'COMPLETED':
            showClickbox();
        break;
    }
    }

    // time listener callback
    // triggered whenever playhead position changes (e.g. during playback)
    var timeListener = function(value) {
        $('#status').val( value );
        moviePosition = value;
        // scan trackms to see if someone is now
        for (i=0; i < trackms.length; i++){
            p2=trackms[i].points[0].t;
            p1=p2;
            for (j=0; j < trackms[i].points.length; j++){
                tp = trackms[i].points[j].t;
                if (tp > p2) p2 = tp;
                if (tp < p1) p1 = tp;
            }
            if ( value >= p1 && value <= p2 ) { // It's playing now!
                if (trackms[i].stopped){
                    trackms[i].stopped = 0;
                    actualPhotolink = trackms[i].photolink;
//console.log('Photolink n: ');
//console.log(trackms[i].photolink);
//console.log('Actual ph: ');
//console.log(actualPhotolink);
                    // scroll photolink panel to here
                    scrollPhotolinksPanel( actualPhotolink - highlightedPhotolink );
                    playTrackm(i); // animate tag
                    flashBalls();  // the warn element
               }
            } else {
                    trackms[i].stopped = 1;
            }
        }
    }

    /** projekktor toolbar change
     * align logo
    */
    $('.ppcontrols').bind('cssClassChanged', function(){
        if ($('.ppcontrols').hasClass('active')){
            //console.log('Controls active');
            $("#telll-warn").css({
                   "bottom" : '40px'
            });
        } else {
            //console.log('Controls out');
             $("#telll-warn").css({
                   "bottom" : '10px'
            });
        }
    });


