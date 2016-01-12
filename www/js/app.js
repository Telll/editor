/*
 * Please see the included README.md file for license terms and conditions.
 */

// This file is a suggested starting place for your code.
// It is completely optional and not required.
// Note the reference that includes it in the index.html file.


/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */

// The telll advertising framework
// it must be a global var if you want to use it globally
myAdFw = {
  status: null
};
// define the instance players
// the MockPlayer
var myPlayer = { "error": "Player not loaded!!!" };
// the optional player
var thePlayer = { "error": "Player not loaded!!!" };
var prjkPlayer = true;
var photolinksSent = [];
// default values for compatibility
// TODO incorporate in functions in telllSDK
var theHeight = $(window).height();
var actualPhotolink = 0;
var highlightedPhotolink = 0;
var phListSize = 7;
var phListElementWidth = 77;
var myPhotolinks = [{
  thumb: "img/photolinks/photolinks_ocean_13.00_180x90.jpg",
  photolink: {
    id: 0,
    title: "Brad Pitt - IMDB",
    description: "",
    link: [{
      title: "Brad Pitt - IMDB",
      description: "",
      url: " http://www.imdb.com/name/nm0000093/?ref_=nv_sr_1"
    }]
  }
}, {
  thumb: "img/photolinks/photolinks_ocean_13.01_180x90.jpg",
  photolink: {
    id: 1,
    title: "Ted Baker suit - Nordstrom",
    description: "",
    link: [{
      title: "Ted Baker suit - Nordstrom",
      description: "",
      url: "http://shop.nordstrom.com/c/mens-suits-sportcoats"
    }]
  }
}, {

  thumb: "img/photolinks/photolinks_ocean_13.02_180x90.jpg",
  photolink: {
    id: 2,
    title: "George Clooney -  IMDB",
    description: "",
    link: [{
      title: "George Clooney -  IMDB",
      description: "",
      url: "http://www.imdb.com/name/nm0000123/"
    }]
  }
}, {

  thumb: "img/photolinks/photolinks_ocean_13.03_180x90.jpg",
  photolink: {
    id: 3,
    title: "Armani suit - Celebrity Suit Shop",
    description: "",
    link: [{
      title: "Armani suit - Celebrity Suit Shop",
      description: "",
      url: "http://www.celebritysuitshop.com/product-category/movie-suits/oceans-11-12-and-13-suits/"
    }]
  }
}, {
  thumb: "img/photolinks/photolinks_ocean_13.04_180x90.jpg",
  photolink: {
    id: 4,
    title: "Las Vegas Travel",
    description: "",
    link: [{
      title: "Las Vegas Travel",
      description: "",
      url: "http://lasvegas.com"
    }]
  }
}, {
  thumb: "img/photolinks/photolinks_ocean_13.05_180x90.jpg",
  photolink: {
    id: 5,
    title: "Bellagio",
    description: "",
    link: [{
      title: "Bellagio",
      description: "",
      url: "https://www.bellagio.com/hotel/"
    }]
  }
}, {
  thumb: "img/photolinks/photolinks_ocean_13.06_180x90.jpg",
  photolink: {
    id: 6,
    title: "MGM Grand",
    description: "",
    link: [{
      title: "MGM Grand",
      description: "",
      url: "https://www.mgmgrand.com"
    }]
  }
}, {
  thumb: "img/photolinks/photolinks_ocean_13.07_180x90.jpg",
  photolink: {
    id: 7,
    title: "Luxor",
    description: "",
    link: [{
      title: "Luxor",
      description: "",
      url: "http://www.luxor.com"
    }]
  }
}, {
  thumb: "img/photolinks/photolinks_ocean_13.08_180x90.jpg",
  photolink: {
    title: "Ghurka vintage bag ",
    description: "",
    id: 8,
    link: [{
      title: "Ghurka vintage bag ",
      description: "",
      url: "http://www.ghurka.com/cavalier-i-leather-duffel-bag-vintage-chestnut"
    }]
  }
}, {
  thumb: "img/photolinks/photolinks_ocean_13.09_180x90.jpg",
  photolink: {
    id: 9,
    title: "John Varvatos bag ",
    description: "",
    link: [{
      title: "John Varvatos bag ",
      description: "",
      url: "https://www.johnvarvatos.com/moto-braid-duffle/4380241-CIP.html?dwvar_4380241-CIP_size=OSZ&dwvar_4380241-CIP_color=001#start=1"
    }]
  }
}, {
  thumb: "img/photolinks/photolinks_ocean_13.10_180x90.jpg",
  photolink: {
    id: 10,
    title: "Ford Taurus ",
    description: "",
    link: [{
      title: "Ford Taurus ",
      description: "",
      url: "http://www.ford.com/cars/taurus/"
    }]
  }
}, ];
var trackms = [{
    points: [{
      x: 10,
      y: 45,
      t: 0.8
    }, {
      x: 14,
      y: 40,
      t: 5
    }, {
      x: 17,
      y: 45,
      t: 8
    }, {
      x: 18,
      y: 45,
      t: 12
    }, {
      x: 15,
      y: 40,
      t: 14
    }],
    stopped: 1,
    photolink: 0,
  }, {
    points: [{
      x: 15,
      y: 40,
      t: 14.43
    }, {
      x: 16,
      y: 41,
      t: 17
    }, {
      x: 17,
      y: 42,
      t: 20
    }, {
      x: 18,
      y: 43,
      t: 25
    }, {
      x: 21,
      y: 45,
      t: 28
    }],
    stopped: 1,
    photolink: 1,
  },

  {
    points: [{
      x: 53,
      y: 50,
      t: 29
    }, {
      x: 53,
      y: 50,
      t: 30
    }, {
      x: 53,
      y: 50,
      t: 32
    }, {
      x: 53,
      y: 50,
      t: 33
    }, {
      x: 53,
      y: 50,
      t: 34
    }],
    stopped: 1,
    photolink: 2,
  }, {
    points: [{
      x: 50,
      y: 55,
      t: 36.5
    }, {
      x: 50,
      y: 55,
      t: 38
    }, {
      x: 50,
      y: 55,
      t: 39
    }, {
      x: 50,
      y: 55,
      t: 40
    }, {
      x: 51,
      y: 55,
      t: 42
    }],
    stopped: 1,
    photolink: 3,
  },

  {
    points: [{
      x: 46,
      y: 50,
      t: 47
    }, {
      x: 46,
      y: 50,
      t: 49
    }, {
      x: 46,
      y: 50,
      t: 51
    }, {
      x: 46,
      y: 50,
      t: 53
    }, {
      x: 46,
      y: 50,
      t: 54
    }],
    stopped: 1,
    photolink: 4,
  }, {
    points: [{
      x: 20,
      y: 50,
      t: 54
    }, {
      x: 20,
      y: 50,
      t: 55.3
    }, {
      x: 20,
      y: 50,
      t: 56.1
    }, {
      x: 20,
      y: 50,
      t: 56.8
    }, {
      x: 20,
      y: 50,
      t: 57.38
    }],
    stopped: 1,
    photolink: 5,
  }, {
    points: [{
      x: 45,
      y: 50,
      t: 55
    }, {
      x: 45,
      y: 50,
      t: 57.48
    }],
    stopped: 1,
    photolink: 6,
  }, {
    points: [{
      x: 70,
      y: 50,
      t: 56
    }, {
      x: 70,
      y: 50,
      t: 56.38
    }, {
      x: 70,
      y: 50,
      t: 57.58
    }],
    stopped: 1,
    photolink: 7,
  }, {
    points: [{
      x: 28,
      y: 60,
      t: 60
    }, {
      x: 20,
      y: 63,
      t: 61
    }, {
      x: 15,
      y: 65,
      t: 63
    }, {
      x: 13,
      y: 65,
      t: 64
    }, {
      x: 12,
      y: 66,
      t: 65
    }],
    stopped: 1,
    photolink: 8,
  }, {
    points: [{
      x: 20,
      y: 45,
      t: 67
    }, {
      x: 25,
      y: 55,
      t: 68
    }, {
      x: 30,
      y: 55,
      t: 71
    }, {
      x: 43,
      y: 55,
      t: 73
    }, {
      x: 45,
      y: 47,
      t: 74
    }],
    stopped: 1,
    photolink: 9,
  }, {
    points: [{
      x: 70,
      y: 60,
      t: 75
    }, {
      x: 55,
      y: 55,
      t: 77
    }, {
      x: 48,
      y: 50,
      t: 78
    }, {
      x: 47,
      y: 50,
      t: 79
    }, {
      x: 47,
      y: 50,
      t: 80
    }],
    stopped: 1,
    photolink: 10,
  },

];


var agent = navigator.userAgent.toLowerCase();
// detect ios
var isiOS = false;
var isIpad = false;
var isIphone = false;
if (agent.indexOf('iphone') >= 0) {
  isiOS = true;
  isIphone = true;
  window.scrollTo(0, 1);
}
if (agent.indexOf('ipad') >= 0) {
  isiOS = true;
  isIpad = true
  window.scrollTo(0, 1);
}
// detect android
var isAndroid = false;
if (agent.indexOf('android') >= 0) {
  isAndroid = true;
}
// play movie at youtube
var isYoutube = false;
if (location.search == "?youtube") {
  isYoutube = true;
}

// For improved debugging and maintenance of your app, it is highly
// recommended that you separate your JavaScript from your HTML files.
// Use the addEventListener() method to associate events with DOM elements.

// For example:

// var el ;
// el = document.getElementById("id_myButton") ;
// el.addEventListener("click", myEventHandler, false) ;


// The function below is an example of the best way to "start" your app.
// This example is calling the standard Cordova "hide splashscreen" function.
// You can add other code to it or add additional functions that are triggered
// by the same event or other events.

function onAppReady() {
  if (navigator.splashscreen && navigator.splashscreen.hide) { // Cordova API detected
    navigator.splashscreen.hide();
  }
  startTelll(function(t) {
    console.info("Its telll:", t);

  });

}

$(function() {
  onAppReady();
});
//document.addEventListener("app.Ready", onAppReady, false);
//document.addEventListener("deviceready", onAppReady, false) ;
//document.addEventListener("onload", onAppReady, false) ;

// The app.Ready event shown above is generated by the init-dev.js file; it
// unifies a variety of common "ready" events. See the init-dev.js file for
// more details. You can use a different event to start your app, instead of
// this event. A few examples are shown in the sample code above. If you are
// using Cordova plugins you need to either use this app.Ready event or the
// standard Crordova deviceready event. Others will either not work or will
// work poorly.

// NOTE: change "dev.LOG" in "init-dev.js" to "true" to enable some console.log
// messages that can help you debug Cordova app initialization issues.

function startTelll(cb) {
  console.log('Starting telll ...');
  // reformat the screen
  reformatScreen();
    $( window ).resize(function() {
  reformatScreen();
    });
    $(window).on('orientationchange', function(event) {
  reformatScreen();
    });

  // instabtiate the telll class
  myAdFw = new telllSDK.Telll();
  // Dashboard does not work in iphones
  if (isIphone) $("#open-dashboard").next().detach();
  if (isIphone) $("#open-dashboard").detach();

  myAdFw.login(null, function() {
    console.log("Logged!!!");
    // open and control clickbox
    myAdFw.showClickbox();
    //$("#popup-clickbox").removeClass("popup");
    $("#popup-clickbox").css("display", "none");
    $("#clickbox").html("<iframe src='http://webapp.telll.me/demo/clickbox.html' border='0' width='100%' height='100%' style='border:none'></iframe>");
    $("#popup-clickbox").find("button.close").unbind("click");
    $("#popup-clickbox").find("button.close").on("click", function() {
      $("#popup-clickbox").fadeOut("slow");
    });
    //open video player
    showMovie(function( movie, player ) {
      console.log("Callback from showMovie ...");
      console.log(myAdFw.movie);
      console.log(movie);
      // global player vars    
      //myPlayer = player;
      //thePlayer = player;
     var mp = myAdFw.moviePlayerView;
     // Load some default tag data
     myAdFw.store.tags = trackms;
     myAdFw.store.photolinks = myPhotolinks;
/*
     myAdFw.store.getLabel = function () {
         var label = "Telll Photolink";
         movie.photolinks.forEach(function(p){
               if (p.photolink.id == this.photolink ) label = p.photolink.title;
         });
         return label;
     }
     myAdFw.store.getImage = function () {
         var src  = "img/tag_default.png";
         movie.photolinks.forEach(function(p){
               if (p.photolink.id == this.photolink ) src = p.thumb;
         });
          return src;
     }
*/
     // instance the tagplayer
     console.log("The store for TagPlayer ...");  
     console.log(myAdFw.store);
     myAdFw.showTagPlayer( myAdFw.moviePlayerView, function(tp){
       console.log("Tag Player callback ...");  
       console.log(tp);
/*
       myAdFw.moviePlayerView.on("playing", function(){
             console.log( "Show tagPalyer when playing ...");
             console.log( myAdFw.tagPlayerView.state );
             if (
             myAdFw.tagPlayerView.state == 'init' || 
             myAdFw.tagPlayerView.state == 'detach'  
             ){ 
                  console.log( "Show !!!");
                  myAdFw.tagPlayerView.show();
             }

       });
       myAdFw.moviePlayerView.on("stop", function(t){
             console.log( "Detach TagPlayer when stoped ...");
             myAdFw.tagPlayerView.detach();
       });
       myAdFw.moviePlayerView.on("timeupdate", function(t){
             console.log( "Handle tag when time ...");
             myAdFw.tagPlayerView.handleTag(t);
       });

       myAdFw.moviePlayerView.on('init', function(data) { console.log( "MockPlayer: "           + " init  " + data ); });
       myAdFw.moviePlayerView.on('canplaytrough', function(data) { 
           console.log( "MockPlayer: "  + " can play  " + data ); 
  
       });
       myAdFw.moviePlayerView.on('loaded', function(data) { console.log( "MockPlayer: "         + " loaded  " + data ); });
       myAdFw.moviePlayerView.on('playing', function(data) { console.log( "MockPlayer: "        + " playing  " + data ); });
       myAdFw.moviePlayerView.on('timeupdate', function(data) { 
         console.log( "MockPlayer: "     + " time  " + data ); 
       });
       myAdFw.moviePlayerView.on('stop', function(data) { console.log( "MockPlayer: "           + " stop  " + data ); });
       myAdFw.moviePlayerView.on('paused', function(data) { console.log( "MockPlayer: "         + " paused  " + data ); });
*/  
     }); 
     console.log("Atual player:", player);
     console.log("ThePlayer:", thePlayer);
     console.log("MOCK:", myAdFw.moviePlayerView);
    });

    if (cb) cb(myAdFw);
  });
  if (window.innerHeight < 350) $("div.notes").fadeOut("slow");
}

/** Create the movie screen:
 * Movies List
 * Player
 * Controls
 * Photolinks List
 */
function showMovie(cb) {
  myAdFw.showMoviesList(function(m) {
    console.log("Movies list: running callback");
    //console.log("Movie selected: " + m.getTitle());
    console.log(m);
    myAdFw.showMockPlayer(function(mp) {
      console.log("MockPlayer: running callback ...");
      myPlayer = mp;
      console.log(mp);
      telllPopup($('#movie-player'), "Playing " + m.title);

      // create a sliding titlebar
      $(".popup-titlebar").wrapAll("<div class='tpp-slide'><div class='tpp-slide-panel'></div></div>");
      $("#movie-player").css({
        position: 'fixed',
        top: '0px'
      });

      $(".tpp-slide").css({
        height: '40px',
        width: '100%',
        'z-index': 'inherit',
        position: 'fixed',
        top: '0px'
      });
      $(".tpp-slide-panel").stop().slideToggle();
      $(".tpp-slide").on('mouseenter mouseleave', function(e) {
        $(".tpp-slide-panel").stop().slideToggle();
      });

      ///////////////////////////////////////
      /** the photolinks list
       ************************/
      //console.log("Calling the PhotolinksList");
      //console.log("The telll.movie: A", myAdFw.movie);
      var list = myAdFw.showPhotolinksList();
      //setTimeout(function () {
      //console.log(list);
      //console.log("The telll.movie: B ", myAdFw.movie);
      list.once("open", function(pl) {
        //console.log("The telll.movie: C ", myAdFw.movie);
        //console.log("PL :", pl);
        //console.log("Arr :", pl.a);
        createPhotolinksPanel(pl);
        //myPhotolinks = pl.photolinks.concat(myPhotolinks);
        //myAdFw.movie.photolinks = myPhotolinks;

      });
      //}, 1000);
      //
      //////////////////////////////////////
      // player listeners

      if (prjkPlayer) {
        launchPrjkPlayer( m, function (prjk){
	  //console.log("PRJK callback ...");
	  //console.log("The Player is now", thePlayer);
          if (cb) cb(myAdFw.movie, thePlayer);
	});
      } else {
        adaptMockPlayer();
        // put mock controls on panel
        $("div#mock-buttons").appendTo("div.popup-titlebar");
        $("div#mock-buttons").css({
          "float": "right",
          //"clear": "both"
        });
        // hide mock dull stuff
        $("#title-pos").hide();
	console.log("Loaded Mock Player", myPlayer);
        if (cb) cb(m, myPlayer);
      }

      checkMovieConsistency();


      //////////////////////////////////////
    });
  });

  // format movies list
  setTimeout(function() {
    formatMoviesList();
  }, 600);
}

function launchPrjkPlayer(movie, cb) {
//	console.log("Launching PRJK");
  ///////////////////////////////////////
  /** the pk movie player
   *********************/
  projekktor('#telll-movie', {
    volume: 0.8,
    playerFlashMP4: 'js/projekktor/swf/StrobeMediaPlayback/StrobeMediaPlayback.swf',
    playerFlashMP3: 'js/projekktor/swf/StrobeMediaPlayback/StrobeMediaPlayback.swf',
    width: $('window').width(),
    height: $('window').height(),
    disallowSkip: false,
    //platforms: ['browser', 'flash'],
    //platforms: ['flash'],
    controls: true,
    enableFullscreen: false,
    useYTIframeAPI: true,
  }, function(player) {
    //console.log("PPlayer running callback...");
    thePlayer = player; 
    // reformat player
    reformatPkPlayer();
    $("div#mock-buttons").appendTo("div.popup-titlebar");
    $("div#mock-buttons").css({
      "float": "right",
      //"clear": "both"
    });
    // rebind mock buttons
    $("div#mock-buttons button.pause").on("click",function(){ thePlayer.setPause() })
    $("div#mock-buttons button.play").on("click",function(){ thePlayer.setPlay() })
    $("div#mock-buttons button.stop").on("click",function(){ thePlayer.setStop() })
    // hide mock dull stuff
    $("#title-pos").hide();

    player.addListener('time', timeListener);
    player.addListener('state', stateListener);
    player.addListener('mouseenter', mouseEnterListener);
    player.addListener('touchstart', mouseEnterListener);
    player.addListener('mousedown', mouseDownListener);
    player.addListener('mouseleave', mouseLeaveListener);
    player.addListener('touchend', mouseLeaveListener);
    // is youtube?
    if (isYoutube) {
      var playlist = [{
        0: {
          src: "http://www.youtube.com/watch?v=ooWWBybEKHc",
          type: "video/youtube"
        }
      }];
      player.setFile(playlist);
      player.setConfig({
        platforms: ['flash']
      });
      player.setDebug(true);
      console.log('Its Youtube');
      console.log(player);
    }
    //player.setDebug(true);
    myAdFw.moviePlayerView.emit("loaded", movie);
    if (cb) cb(movie, player);
  });
  //////////////////////////////////////
  // Video behaviors
  // show labels when mouse over
  var mouseDownListener = function() {
    console.log("Toggle play/stop");//sync MockPlayer
	  if (myPlayer.state == "playing") {
             myAdFw.moviePlayerView.stop();
             //myAdFw.tagPlayerView.stop();
          }
          else {
             myAdFw.moviePlayerView.play();
             //myAdFw.tagPlayerView.play();
          }
  };
  var mouseEnterListener = function() {
    tagDefaultView();
    //$('.ppcontrols').appendTo("#telll-controls").fadeIn();
    //$('.ppcontrols').removeClass("inactive");
    //$('.ppcontrols').addClass("active");
    console.log("mouse over pk");
  };
  // hide labels 5 seconds after mouse out
  var mouseLeaveListener = function() {
    setTimeout(function() {
      tagNoneView();
    }, 5000);
  };
  // state listener callback
  var stateListener = function(state) {
    //console.log(state);
    switch (state) {
      case 'PLAYING':
	//myAdFw.moviePlayerView.emit("playing",myAdFw.movie);//sync MockPlayer
	//myAdFw.moviePlayerView.state = "playing";//sync MockPlayer
        break;
      case 'PAUSED':
	myAdFw.moviePlayerView.emit("pause",myAdFw.moviePlayerView.time);//sync MockPlayer
	myAdFw.moviePlayerView.state = "pause";//sync MockPlayer
        $('.tag').detach();
        for (i = 0; i < animT.length; i++) {
          clearTimeout(animT[i]);
        }
        for (i = 0; i < trackms.length; i++) {
          trackms[i].stopped = 1;
        }
        break;
      case 'STOPPED':
	myAdFw.moviePlayerView.emit("stop",myAdFw.moviePlayerView.time);//sync MockPlayer
	myAdFw.moviePlayerView.state = "stop";//sync MockPlayer
        $('.tag').detach();
        for (i = 0; i < animT.length; i++) {
          clearTimeout(animT[i]);
        }
        for (i = 0; i < trackms.length; i++) {
          trackms[i].stopped = 1;
        }
        break;
      case 'COMPLETED':
	myAdFw.moviePlayerView.emit("ended",myAdFw.moviePlayerView.time);//sync MockPlayer
	myAdFw.moviePlayerView.state = "ended";//sync MockPlayer
        showClickbox();
        $("div.telll-popup").detach();
        $("div#photolinks-list-widget").detach();
        $("div.popup-overlay").detach();
        break;
    }
  };

  // time listener callback
  // triggered whenever playhead position changes (e.g. during playback)
  var timeListener = function(value) {
          //console.log('timelistener ..', myAdFw.tagPlayerView);	  
          //myAdFw.tagPlayerView.handleTag(value);
          //console.log('timelistener ..');	  
	  myAdFw.moviePlayerView.emit("timeupdate",value);//sync MockPlayer
          myAdFw.moviePlayerView.time = value;
          //myAdFw.tagPlayerView.handleTag(value);
	  // do PRJK stuff
/*
    $('#status').val(value);
    moviePosition = value;
    // scan trackms to see if someone is now
    for (i = 0; i < trackms.length; i++) {
      p2 = trackms[i].points[0].t;
      p1 = p2;
      for (j = 0; j < trackms[i].points.length; j++) {
        tp = trackms[i].points[j].t;
        if (tp > p2) p2 = tp;
        if (tp < p1) p1 = tp;
      }
      if (value >= p1 && value <= p2) { // It's playing now!
        if (trackms[i].stopped) {
          trackms[i].stopped = 0;
          actualPhotolink = trackms[i].photolink;
          //console.log('Photolink n: ');
          //console.log(trackms[i].photolink);
          //console.log('Actual ph: ');
          //console.log(actualPhotolink);
          // scroll photolink panel to here
          scrollPhotolinksPanel(actualPhotolink - highlightedPhotolink);
          playTrackm(i); // animate tag
          flashBalls(); // the warn element
        }
      } else {
        trackms[i].stopped = 1;
      }
    } 
*/
  };

  /** Behavior for
   * telll logo
   */
  $('.logo-86x86').doubletap(function (e) {
      console.log('Double Click!!!');
      thePlayer.setPause();
      // Show clickbox
      showClickbox();
  }, function(e){
      console.log('Single Click!!!');
      tagDefaultView();
      //sendPhotolink(actualPhotolink);
  },400);




  /** projekktor toolbar change
   * align logo
   */
  $('.ppcontrols').bind('cssClassChanged', function() {
    if ($('.ppcontrols').hasClass('active')) {
      //console.log('Controls active');
      $(".logo-86x86").css({
        "bottom": '120px',
        "right": '20px'
      });
      $("#photolinks-list-widget").css({
        "bottom": '40px'
      });
    } else {
      //console.log('Controls out');
      $(".logo-86x86").css({
        "bottom": '2px',
        "right": '2px'

      });
      $("#photolinks-list-widget").css({
        "bottom": '0px'
      });
    }
  });
} // end launchPrjkPlayer

/** Full window
 * Adjust viewport to full window
 */
function fullWindow() {
  $("#telll-player-frame").css('position', 'fixed');
  $("#telll-player-frame").css('top', '0');
  $("#telll-player-frame").css('left', '0');
  $('#telll-movie').width($(window).width());
  $('#telll-movie').height($(window).height());
  $("#telll-player-frame").width($('#telll-movie').width());
  $("#telll-player-frame").height($('#telll-movie').height());
  $('#telll-pkt').width($('#telll-movie').width());
  $('#telll-pkt').height($('#telll-movie').height());
  theHeight = $(window).height();
}

function formatMoviesList() {
  // width, height of widget and thumbs
  $(".telll-movies-list-widget").css({
    width: "100%",
    height: "100%"
  });
  var thumbSize = {
    width: $("img.movie-thumb").width(),
    height: $("img.movie-thumb").height()
  };
  var nThumbs = parseInt(($(window).width() / thumbSize.width)) || 1;
  var offSet = 14;
  var newThumbSize = {
    width: parseInt(($(window).width() / nThumbs)) - offSet || 1,
    height: parseInt((thumbSize.height * ($(window).width() / nThumbs / thumbSize.width) - offSet)) || 1
  };
  var newMargin = $(window).width() - ((newThumbSize.width + offSet) * nThumbs);
  //console.log("Formating " + nThumbs + " elements ...");
  //console.log("From: ", thumbSize);
  //console.log("To: ", newThumbSize);
  //console.log("Window size ", $(window).width());
  //console.log("Thumbs size ", (newThumbSize.width + offSet) * nThumbs);
  $("img.movie-thumb").width(newThumbSize.width);
  $("div.telll-movie-element").width(newThumbSize.width);
  $("div.movie-label").width(newThumbSize.width);
  $("img.movie-thumb").height(newThumbSize.height);
  $("div.telll-movie-element").height(newThumbSize.height);
  $("div.movie-label").height(newThumbSize.height);
  $("#telll-movies-list-frame").css("margin", newMargin + "px");
  $("div.telll-movie-element:last").css("margin-bottom", "60px");
  //$("#telll-movies-list-frame").width($(window).width -(newMargin*2));
  /////////

}

function checkMovieConsistency(){
  if ($('div[id="movie-player"]').size() > 1 ) location.reload();
}

function reformatScreen(){
  centerStage();
  adaptMockPlayer();
  setPanelWidth();
}

function centerStage(){
  var height = $(window).height();
  var stageSize = {
    width:  $("div#telll-stage div#telll-content").width(),
    height: $("div#telll-stage div#telll-content").height()
  };
  var marginTop = (height - stageSize.height) / 2 ;
  $("div#telll-content").css("margin-top",marginTop+"px");
}

function reformatPkPlayer() {
  $(".telll-popup").css('position', 'fixed');
  $(".telll-popup").css('top', '0');
  $(".telll-popup").css('left', '0');
  $('#movie-player').width($(window).width());
  $('#movie-player').height($(window).height());
  $(".telll-popup").width($('#movie-player').width());
  $(".telll-popup").height($('#movie-player').height());
  $('#telll-movie').width($('#movie-player').width());
  $('#telll-movie').height($('#movie-player').height());
}

// TODO: move it to the PhotolinksList class
function setPanelWidth() {
  $('#panel-frame').width($(window).width());
  $('#panel').width($(window).width() - 65);

  // set the number of icons to be displayed
  // this vat will be used by scrollPanel to
  phListSize = parseInt($("#panel").width()/$(".frame-icon").width());

  //center the panel in frame
  var iconWidth = $('.frame-icon').width();
  var iconsWidth = 0;
  $('.frame-icon').each(function(index) {
	      iconsWidth += parseInt($(this).width(), 10);
  });
  var offset = ($("#panel").width() - iconWidth * phListSize);
  $("#panel").css({"margin-left":offset+"px", "width": ($("#panel").width()-offset)+"px"});
}


/**
 * createPhotolinksPanel
 * TODO: move it to the PhotolinksList class
 * @param a {PhotolinksList}
 **/
function createPhotolinksPanel(a) {
  console.log("Creating panel ...");
  console.log(a);
  // Fill panel with photolinks
  var photolinks = a.photolinks;
  myPhotolinks = photolinks.concat(myPhotolinks);
  if (photolinks.length > 0) $("#panel-slider").html(""); // clean panel
  for (i = 0; i < photolinks.length; ++i) {
    //console.log(photolinks[i]);
    var p = photolinks[i].photolink;
    if (p.link.length === 0) {
      p.link = [{
        title: "Telll Photolink"
      }];
    }
    //console.log(p);
    $("#panel-slider").append('<div class="frame-icon"><img class="photolink-icon" id="icon_' + p.id + '" src="' + p.thumb + '" id_photolink=' + p.id + '><label for="icon_' + p.id + '">' + p.link[0].title + '<label></div>');
  }
  // set panel width
  setPanelWidth();
  // trigger the closing popup and close too
  $("button.close").on("click", function() {
    $("#photolinks-list-widget").detach();
  });
  // create a sliding control
  $("#telll-controls").wrapAll("<div class='ct-slide'><div class='ct-slide-panel'></div></div>");
  $(".ct-slide").css({
    height: '60px',
    width: '100%',
    'z-index': 'inherit',
    position: 'absolute',
    bottom: '0px'
  });
  $(".ct-slide-panel").stop().slideToggle(2000);
  $(".ct-slide").on('mouseenter mouseleave', function(e) {
    $(".ct-slide-panel").stop().slideToggle("slow");
  });
  // mouse over show labels
  $(".frame-icon *").on("mouseover", function(e) {
    var thisid = $(this).attr('id');
    $('label[for=' + thisid + ']').css("display", "inline");
  });
  $(".frame-icon *").on("mouseleave", function(e) {
    $('label').css("display", "none");
  });
  // touch : labels
  $(".frame-icon *").on("touchstart", function(e) {
    var thisid = $(this).attr('id');
    $('label[for=' + thisid + ']').css("display", "inline");
  });
  $(".frame-icon *").on("touchend", function(e) {
    $('label').css("display", "none");
  });
  /*
              $(".frame-icon *").click(function() {
                  sendPhotolink($(this).attr('id_photolink'));
              });
              //$('.frame-icon *').dblclick(function (e) {
  */
  $('.frame-icon *').doubletap(function(e) {
    console.log('Double Click!!!');
    thePlayer.setPause();
    var ap = parseInt($(e.currentTarget).attr('id_photolink'));
    ///////////////////////////////////////
    // show dialog with photolinked webpage
    $('body').append('<div id="ph-dialog-' + ap + '"><iframe width="100%" height="100%" src="js/projekktor/themes/maccaco/buffering.gif"/></div>');
    //path = '/cgi-bin/mirror.pl?url='+myPhotolinks[ap].link[0].url;
    console.log (myPhotolinks);
    console.log(e);
    console.log($(e.srcElement).attr('id_photolink'));
    console.log (ap);
    console.log (myPhotolinks[ap]);
    path = myPhotolinks[ap].photolink.link[0].url;
    //path = 'http://webapp.telll.me/cgi-bin/mirror.pl?url='+myPhotolinks[ap].photolink.link[0].url;
    $("#ph-dialog-" + ap + " iframe").attr('src', path);
    var linkPopup = telllPopup($("#ph-dialog-" + ap),myPhotolinks[ap].photolink.link[0].title);
    
    $("#ph-dialog-" + ap).css({width:"100%",height:"100%"});
    //$("<button id='show-in-movie'>Show in movie</button>").appendTo(".popup-titlebar");
    $("<button id='show-in-movie'>Show in movie</button>").on("click", function() {
	  console.log("implement me please!");
	  telllDialog("Searching tag on movie ...",3000);
          var position = trackms[ap].points[0].t;
          thePlayer.setPlay();
          setTimeout(function() {
	    $("#"+linkPopup).remove();
            thePlayer.setPlayhead(Number(position.toString()));
            actualPhotolink = ap;
          }, 1500);
    }).appendTo(".popup-titlebar"); 
    $("<button id='share-on-face'>Share on Facebook</button>").on("click", function() {
	    console.log("implement me please!");
	    telllDialog("Share on Facebook not yet implemented, sorry",3000);
    }).appendTo(".popup-titlebar");
    /*
    $("#ph-dialog-" + ap).dialog({
      modal: true,
      width: '80%',
      height: theHeight - 5,
      title: myPhotolinks[ap].photolink.link[0].title,
      buttons: {
        "See in the movie": function() {
          var position = trackms[ap].points[0].t;
          $(this).dialog("close");
          thePlayer.setPlay();
          setTimeout(function() {
            thePlayer.setPlayhead(Number(position.toString()));
            actualPhotolink = ap;
          }, 500);
          $("<div data-role='popup' class='telll-popup'>Searching tag on movie ...</div>").appendTo('body');
          $(".telll-popup").popup();
          $(".telll-popup").popup("open", null);
          setTimeout(function() {
            $(".telll-popup").popup('close');
            $(".telll-popup").detach();
          }, 2000);

        }
      }
    });
    $("#ph-dialog-" + ap).dialog("open");
  *///////////////////////////////////////////////////////////
  }, function(e) {
    console.log('Single Click!!!');
    var ap = parseInt($(e.target).attr('id_photolink'));
    //console.log('Sendind Photolink ... '+ap);
    //console.log(e);
    sendPhotolink(ap);
  }, 400);
/*
  $('img.photolink-icon').on('click', function(e) {
    console.log('Single Click!!!');
    var ap = parseInt($(e.target).attr('id_photolink'));
    //console.log('Sendind Photolink ... '+ap);
    //console.log(e);
    sendPhotolink(ap);
  });
  */
  $('#return-button').on('click', function(e) {
    scrollPhotolinksPanel(-1);
  });
  $('#forward-button').on('click', function(e) {
    scrollPhotolinksPanel(1);
  });
  //highlightPhotolink(0);
  console.log("Panel created!!!");
}

function highlightPhotolink(n) {
  pls = $("#panel").find('.frame-icon img');
  console.log('---> ' + n);
  console.log(pls.eq(n));
  pls.each(function(i) {
    //console.log(pls.eq(i).attr('id_photolink'));
    //newSrc = pls.eq(i).find('img').attr('src').replace("_green.jpg", ".jpg");
    //pls.eq(i).find('img').attr('src', newSrc);
    if (parseInt(pls.eq(i).attr('id_photolink')) != n) {
      pls.eq(i).css('opacity', '0.3');
    } else {
      pls.eq(n).css('opacity', '1');
      console.log('highlighting ' + n);
    }
  });
  // highlight actual photolink
  //newSrc = pls.eq(n).find('img').attr('src').replace(".jpg", "_green.jpg");
  //pls.eq(n).find('img').attr('src', newSrc);
  //pls.eq(n).css({'width':'96px','height':'52px'});
}

function scrollPhotolinksPanel(n) {
  //console.log("Scrolled by:");
  //console.log(n);
  highlightedPhotolink += n;
  //console.log("Highlighted Photolink:");
  //console.log(highlightedPhotolink);
  pls = $("#panel").find('.frame-icon img');
  //console.log(pls);
  // Catching some errors
  if (highlightedPhotolink > pls.length - 1) {
    highlightedPhotolink = parseInt(pls.length) - 1;
  }
  if (highlightedPhotolink < 0) {
    highlightedPhotolink = 0;
  }

  highlightPhotolink(highlightedPhotolink);

  // Scroll panel to position
  // claculate offset
  var ml = 0;
  pls.each(function(i) {
    if (parseInt(pls.eq(i).attr('id_photolink')) < highlightedPhotolink - Math.round(phListSize / 2)
      //   && highlightedPhotolink < parseInt(pls.length) - Math.round(phListSize/2)
    ) {
      ml++;
    }
  });
  var of = ml * phListElementWidth * -1;
  $('#panel-slider').animate({
    'margin-left': of + "px"
  }, 400, function() {
    //pls.eq(0).insertAfter(pls.eq(pls.length-1));
    //pls.eq(0).css('margin-left',ml);
    //panelSliding = 0;
    console.log('Panel scrolled by: ' + of);
  });

  /*
            if (highlightedPhotolink == 0){ highlightPhotolink(0); panelSliding = 0;return 0; }
            if (highlightedPhotolink == 1){ highlightPhotolink(1); panelSliding = 0;return 0; }
            if (highlightedPhotolink == 2){ highlightPhotolink(2); panelSliding = 0;return 0; }
            if (highlightedPhotolink == 3 && n === 1){ highlightPhotolink(3); panelSliding = 0;return 0; }
            if (highlightedPhotolink == pls.length-1){
                    highlightPhotolink(6); panelSliding = 0;return 0; }
            if (highlightedPhotolink == pls.length-2 ){
                    highlightPhotolink(5); panelSliding = 0;return 0; }
            if (highlightedPhotolink == pls.length-3){
                    highlightPhotolink(4); panelSliding = 0;return 0; }
            if (highlightedPhotolink == pls.length-4 && n === -1){
                    highlightPhotolink(3); panelSliding = 0;return 0; }
            ml = pls.css('margin-left');
            mwidth = '-120px';
            if (n === -1){
	        pls.eq(pls.length-1).insertBefore(pls.eq(0));
	        pls.eq(pls.length-1).css('margin-left',mwidth);
                pls.eq(pls.length-1).animate({
                            'margin-left': ml,
                            'transparency' : 0
                       }, 400, function(){
                           //panelSliding = 0;
                });
	    } else if (n === 1){
                pls.eq(0).animate({
                        'margin-left': mwidth,
                        'transparency' : 0
                   }, 400, function(){
	               pls.eq(0).insertAfter(pls.eq(pls.length-1));
	               pls.eq(0).css('margin-left',ml);
                       //panelSliding = 0;
                });
	    } else if (Math.abs(n) > 1) {
                for (i=0; i<Math.abs(n) ; i++){
                    setTimeout(function(){
                        scrollPhotolinksPanel(n/Math.abs(n));
                    },(i+1)*451);
                }
            }
            // done
           // restore photolinks
           setTimeout(function(){
               highlightPhotolink(3); panelSliding = 0;
           },450);
           */
}
/** Send photolink to clickbox
 * @param id
 */
function sendPhotolink(photolinkId) {
  var plHtml = "";
  photolinksSent.push(myPhotolinks[photolinkId]);
  for (i = 0; i < photolinksSent.length; i++) {
    plHtml += "<div class='photolink-list-element'><a href='" + photolinksSent[i].photolink.link[0].url + "'><span class='photolink-thumb'><img class='photolink-thumb-image' src='" + photolinksSent[i].thumb + "'></span><span class=photolink-title>" + photolinksSent[i].photolink.link[0].title + "</span><span class='photolink-description'>" + photolinksSent[i].photolink.link[0].description + "</span></a></div>";
  }
  console.log("Sending photolink ... " + photolinkId);
  // clear some clickbox, open new and fill with html
  //$("#popup-clickbox").detach();
  //myAdFw.showClickbox();

  //$('#clickbox').html(plHtml);

  // send via cws
  var ret = myAdFw.cws.cmd.click_trackmotion({
    api_key: "1234",
    auth_key: myAdFw.credentials.authKey,
    trackmotion: photolinkId,
    extra_data: '{"photolinkbb":' + photolinkId + '}'
  }, function(resp) {
    //console.log('Sent!');
    if (resp.error) {
      telllDialog("Error: " + resp.error, 3000);
    } else {
      telllDialog("Photolink sent!", 3000)
    }
  });
}

function highlightPhotolink(n) {
  pls = $("#panel").find('.frame-icon img');
  console.log('---> ' + n);
  console.log(pls.eq(n));
  pls.each(function(i) {
    //console.log(pls.eq(i).attr('id_photolink'));
    //newSrc = pls.eq(i).find('img').attr('src').replace("_green.jpg", ".jpg");
    //pls.eq(i).find('img').attr('src', newSrc);
    if (parseInt(pls.eq(i).attr('id_photolink')) != n) {
      pls.eq(i).css('opacity', '0.3');
    } else {
      pls.eq(n).css('opacity', '1');
      console.log('highlighting ' + n);
    }
  });
  // highlight actual photolink
  //newSrc = pls.eq(n).find('img').attr('src').replace(".jpg", "_green.jpg");
  //pls.eq(n).find('img').attr('src', newSrc);
  //pls.eq(n).css({'width':'96px','height':'52px'});
}

/** tagViews functions
 */
function tagDefaultView() {
	console.log("fade in the tag");
$("#telll-tag-player-widget").fadeIn();
}

function tagNoneView() {
	console.log("fade out the tag");
$("#telll-tag-player-widget").fadeOut();
}

function showClickbox() {
  //console.log('Opening clickbox ...');
  $("#popup-clickbox").fadeIn().css("z-index",9999999);
}
function adaptMockPlayer() {
  reformatPkPlayer();
  $("div#movie-player").fadeIn();
  $("video#telll-movie").fadeIn();
  $("video#telll-movie").css("background", "black");
}

function adaptApp() {
  adaptMockPlayer();
}
