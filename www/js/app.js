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
    /*$("body").mousemove(function(){
	handleMouse({x:event.pageX,y:event.pageY}, function(classe){
	   console.log("Mouse in: "+ classe);
	});
        //console.log(event.pageX + ", " + event.pageY);
    });*/
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
      closeClickbox();
    });
    //open video player
    console.log("Opening movie ...");
    showMovie(function( movie, player ) {
      console.log("Callback from showMovie ...");
      //console.log(myAdFw.movie);
      //console.log(movie);
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
     //console.log("Atual player:", player);
     //console.log("ThePlayer:", thePlayer);
     //console.log("MOCK:", myAdFw.moviePlayerView);
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
  console.log("Begin showMovie ...");
  myAdFw.showMoviesList(function(m) {
    console.log("Movies list: running callback");
    //console.log("Movie selected: " + m.getTitle());
    //console.log(m);
    myAdFw.showMockPlayer(function(mp) {
      console.log("MockPlayer: running callback ...");
      myPlayer = mp;
      console.log(mp);

      //////////////////////////////////////////////////////////
      // instance the tagplayer
      console.log("The store for TagPlayer ...",myAdFw.store);  
      myAdFw.showTagPlayer( myAdFw.moviePlayerView, function(tp){
        console.log("Tag Player callback ...");  
        //console.log(tp);
        tp.on("tag", function(){
            console.log("TagPlayer emited tag: ", tp.actualPhotolink);
            // offset from higlited photolink and the actual
            var offset = tp.actualPhotolink - highlightedPhotolink;
            scrollPhotolinksPanel(offset);
        })
      }); /////////////////////////////////////////////////////

      console.log("Showing movie app popup!");
      moviePopupId = telllPopup($('#movie-player'), "Playing " + m.title);
      console.log("Showing movie in popup id: " + moviePopupId);
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
      $(".tpp-slide").on('mouseleave', function(e) {
        $(".tpp-slide-panel").stop().slideUp();
      });
      $(".tpp-slide").on('mouseenter', function(e) {
        $(".tpp-slide-panel").stop().slideDown();
      });

      ///////////////////////////////////////
      /** the photolinks list and panel
       ************************/
      console.log("Call the PhotolinksList and create panel");
      console.log("The telll.movie: TagP", myAdFw.movie);
      var list = myAdFw.showPhotolinksList();
      //setTimeout(function () {
      console.log(list);
      //console.log("The telll.movie: B ", myAdFw.movie);
      list.once("open", function(pl) {
        console.log("The telll.movie: ", myAdFw.movie);
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
      console.log("Running player listeners: ", prjkPlayer);
      if (prjkPlayer) {
        console.log("call launchPrjkPlayer");
        launchPrjkPlayer( m, function (prjk){
	  console.log("PRJK callback ...");
          if (cb) cb(myAdFw.movie, prjk);
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
  console.log("Ending showMovie");
}
/**
* @param movie {iData}
* @param cb {function} its called after all setup tasks
*/
function launchPrjkPlayer(movie, cb) {
	console.log("Launching PRJK");
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
    console.log("PPlayer running callback...");
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
    // read state and reformat logo
    console.log("Calling tagPlayerView.handleState", myAdFw.tagPlayerView);
    myAdFw.tagPlayerView.handleState(function(classe, i){
       console.log("Returning callback from tagPlayerView.handleState");
         setTimeout(function(){
       if (! $(".logo-86x86").hasClass(classe[i])){
           $.each(classe, function(tc){
               $(".logo-86x86").removeClass(classe[tc])
           }); 
           $(".logo-86x86").removeAttr("style");
           $(".logo-86x86").addClass(classe[i])
       }
         }, 600);
    });
   // Integrate PRJK controls with panel
    //$('.ppcontrols').appendTo($("#telll-controls"));
    //$('.ppcontrols').removeClass("active");
    //$('.ppcontrols').addClass("inactive");
     //player.setDebug(true);
    //console.log("moviePlayer emit loaded!!");
    //myAdFw.moviePlayerView.emit("loaded", movie);
    if (cb) cb(movie, player);
  });
  //////////////////////////////////////
  // Video behaviors
  // show labels when mouse over
  var mouseDownListener = function() {
    console.log("Toggle play/stop");//sync MockPlayer
	  if (myPlayer.state == "playing") {
             myAdFw.moviePlayerView.stop();
          }
          else {
             myAdFw.moviePlayerView.play();
          }
  };
  var mouseEnterListener = function() {
    //tagDefaultView();

    //console.log("mouse over pk");
  };
  // hide labels 5 seconds after mouse out
  var mouseLeaveListener = function() {
      //tagNoneView();
  };
  // state listener callback
  var stateListener = function(state) {
    //console.log(state);
    switch (state) {
      case 'PLAYING':
         // hide tags
         tagNoneView();
         $('.ppcontrols').appendTo($(".ct-slide"));
         //$('.ppcontrols').appendTo($("#telll-controls"));
         //$('.ppcontrols').append($("#photolinks-list-widget"));
      break;
      case 'PAUSED':
	myAdFw.moviePlayerView.emit("pause",myAdFw.moviePlayerView.time);//sync MockPlayer
	myAdFw.moviePlayerView.state = "pause";//sync MockPlayer
        //$('.tag').detach();
/*
	for (i = 0; i < animT.length; i++) {
          clearTimeout(animT[i]);
        }
        for (i = 0; i < trackms.length; i++) {
          trackms[i].stopped = 1;
        }
	*/
        break;
      case 'STOPPED':
	myAdFw.moviePlayerView.emit("stop",myAdFw.moviePlayerView.time);//sync MockPlayer
	myAdFw.moviePlayerView.state = "stop";//sync MockPlayer
	highlightPhotolink (0);
        //$('.tag').detach();
/*        for (i = 0; i < animT.length; i++) {
          clearTimeout(animT[i]);
        }
        for (i = 0; i < trackms.length; i++) {
          trackms[i].stopped = 1;
        }
	*/
        break;
      case 'COMPLETED':
	myAdFw.moviePlayerView.emit("ended",myAdFw.moviePlayerView.time);//sync MockPlayer
	myAdFw.moviePlayerView.state = "ended";//sync MockPlayer
        showClickbox();
        $("div.telll-popup").detach();
        $("div#photolinks-list-widget").detach();
        $("div#telll-tag-player-widget").detach();
        $("div.popup-overlay").detach();
        break;
    }
  };

  // time listener callback
  // triggered whenever playhead position changes (e.g. during playback)
  var timeListener = function(value) {
    var moviePosition = value;
          //console.log('timelistener ..', myAdFw.tagPlayerView);	  
          //myAdFw.tagPlayerView.handleTag(value);
          //console.log('timelistener ..');	  
	  myAdFw.moviePlayerView.emit("timeupdate",value);//sync MockPlayer
          myAdFw.moviePlayerView.time = value;
          //myAdFw.tagPlayerView.handleTag(value);
	  // do PRJK stuff
    //$('#status').val(value);
    actualPhotolink = myAdFw.tagPlayerView.actualPhotolink || actualPhotolink;
    //console.log("scrollP", myAdFw.tagPlayerView);
    //console.log("scrollP: "+actualPhotolink+" - "+highlightedPhotolink);
    //scrollPhotolinksPanel(actualPhotolink - highlightedPhotolink);

    /*
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
          //trackms[i].stopped = 0;
          actualPhotolink = trackms[i].photolink;
          //console.log('Photolink n: ');
          //console.log(trackms[i].photolink);
          //console.log('Actual ph: ');
          //console.log(actualPhotolink);
          // scroll photolink panel to here
          scrollPhotolinksPanel(actualPhotolink - highlightedPhotolink);
          //playTrackm(i); // animate tag
          //flashBalls(); // the warn element
        }
      } else {
        //trackms[i].stopped = 1;
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
      telllDialog("Showing tag :)", 2000);
      //sendPhotolink(actualPhotolink);
  },400);


  /** projekktor toolbar change
   * Adapt the panel (photolinksListWidget)
   */
  $('.ppcontrols').on('cssClassChanged', function() {
   console.log("ppcontrols changed ...");
    //   setTimeOut(function(){
    myAdFw.tagPlayerView.handleState(function(classe, i){
       console.log("ppcontrols returned from handleState");
       //if (! $(".logo-86x86").hasClass(classe[i])){
           // remove any style from logo
           $.each(classe, function(tc){
               $(".logo-86x86").removeClass(classe[tc])
           }); 
           $(".logo-86x86").removeAttr("style");
           $(".logo-86x86").addClass(classe[i]);
           /*$(".logo-86x86").mouseover(function(){
                $(".ct-slide-panel").show();
                $("#photolinks-list-widget").removeClass("inactive");
                $("#photolinks-list-widget").addClass("active");
           });*/
           $(".logo-86x86").on('mouseenter', function(){telllDialog("Click on logo!!!",2000)});
           $(".logo-86x86").on('mousemove', function(e){
                $(".ct-slide-panel").show();
                $("#photolinks-list-widget").removeClass("inactive");
                $("#photolinks-list-widget").addClass("active");
            $('.logo-86x86').css({
               left: e.pageX - 15,
               top: e.pageY - 15
               });
           });
           if ($('.ppcontrols').hasClass('inactive')) {
             console.log('Controls inactive');
             $("#telll-controls").css({
               "height": '65px'
             });
           } else {
             console.log('Controls active');
             $("#telll-controls").css({
               "height": '65px',
               "bottom" : "38px"
             });
           }
       //}
    });
    //   }, 200);
  });
/*  $("div.ct-slide").on("mouseover", function(){
    $('.ppcontrols').clearQueue();
    $('.ppcontrols').removeClass("inactive");
    $('.ppcontrols').addClass("active");
  }); 
*/
  console.log("Ended PRJK");
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
  phListSize = parseInt($("#panel").width()/($(".frame-icon").width()+parseInt($('.frame-icon').css("margin-left"))))  ;
  if ( phListSize > myPhotolinks.length) phListSize = myPhotolinks.length;
  //center the panel in frame
  var iconWidth = $('.frame-icon').width()+parseInt($('.frame-icon').css("margin-left"));
  var iconsWidth = 0;
  $('.frame-icon').each(function(index) {
	      iconsWidth += parseInt($(this).width(), 10);
  });
  var offset = ($("#panel").width() - iconWidth * phListSize)/2;
  console.log("setPanelWidth: "+$("#panel").width()+" - "+ iconWidth+" * "+phListSize+" = "+offset);
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
  $("#photolinks-list-widget").css({
    "bottom": '0px',
    "left": '0px'
  });
  // trigger the closing popup from movie player and detach panel and tagplayer also
  $("#"+moviePopupId+" button.close").on("click", function() {
    $("#photolinks-list-widget").detach();
    $("div#telll-tag-player-widget").detach();
  });
  // create a sliding control
  $("#telll-controls").wrapAll("<div class='ct-slide'><div class='ct-slide-panel'></div></div>");
  $(".ct-slide").css({
    height: '160px',
    width: '100%',
    'z-index': 'inherit',
    position: 'absolute',
    bottom: '0px'
  }).on("mouseover", function(){$(".ct-slide-panel").show()});
   $("#telll-controls").css({
     "height": '65px'
   });

  $("#photolinks-list-widget").removeClass("active");
  $("#photolinks-list-widget").addClass("inactive");
  $(".ct-slide-panel").slideUp("slow");
  /*// close/open the panel
  $(".ct-slide-panel").stop().slideToggle(20, function(){
      $("#photolinks-list-widget").addClass("inactive");
      $("#photolinks-list-widget").removeClass("active");
  });*/
  $(".ct-slide").on('mouseenter', function(e) {
    $(".ct-slide-panel").slideDown(function(){
        $("#photolinks-list-widget").addClass("active");
        $("#photolinks-list-widget").removeClass("inactive");
     });
  });
  $(".ct-slide").on('mouseleave', function(e) {
    $(".ct-slide-panel").slideUp(function(){
        $("#photolinks-list-widget").addClass("inactive");
        $("#photolinks-list-widget").removeClass("active");
     });
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

/*
function highlightPhotolink(n) {
  pls = $("#panel").find('.frame-icon img');
  //console.log('---> ' + n);
  //console.log(pls.eq(n));
  pls.each(function(i) {
    //console.log(pls.eq(i).attr('id_photolink'));
    //newSrc = pls.eq(i).find('img').attr('src').replace("_green.jpg", ".jpg");
    //pls.eq(i).find('img').attr('src', newSrc);
    if (parseInt(pls.eq(i).attr('id_photolink')) != n) {
      pls.eq(i).css('opacity', '0.1');
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
*/
function scrollPhotolinksPanel(n) {
  //console.log("Scrolled by:");
  //console.log(n);
  highlightedPhotolink += n;
  //console.log("Highlighted Photolink:");
  //console.log(highlightedPhotolink);
  var pls = $("#panel").find('.frame-icon img');
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
  //console.log("scroll pls:", pls);
  pls.each(function(i) {
  //console.log("scroll pls", i);
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
    //console.log('Panel scrolled by: ' + of);
  });
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
  var pls = $("#panel").find('.frame-icon img');
  console.log('---> ' + n);
  console.log(pls.eq(n));
  pls.each(function(i) {
    //console.log(pls.eq(i).attr('id_photolink'));
    //newSrc = pls.eq(i).find('img').attr('src').replace("_green.jpg", ".jpg");
    //pls.eq(i).find('img').attr('src', newSrc);
    if (parseInt(pls.eq(i).attr('id_photolink')) != n) {
      pls.eq(i).css('opacity', '0.1');
    } else {
      pls.eq(n).css('opacity', '1');
      console.log('highlighting ' + n);
      console.log("Olha");
      //throw("Olha");
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
	myAdFw.tagPlayerView.viewMode("default");
//console.log("fade in the tag");
//$("#telll-tag-player-widget").fadeIn();
}

function tagNoneView() {
	myAdFw.tagPlayerView.viewMode("none");
//console.log("fade out the tag");
//$("#telll-tag-player-widget").fadeOut();
}
function closeClickbox() {
      $("#popup-clickbox").fadeOut("slow");
}

function showClickbox() {
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
