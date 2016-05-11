// Telll webapp tests
var telll = new telllSDK.Telll();
QUnit.config.reorder = false
QUnit.module( "Basic tests" );
console.log("Loading Basic Telll test ...");
QUnit.test( "Telll class", function( assert ) {
  assert.ok( telll.VERSION == "0.16.0", "telll has the correct version: " + telll.VERSION );
  assert.ok( telll.conf.host, "telll has a host server in conf: " + telll.conf.host);
});

telll.login(null, function () {
QUnit.test( "Login", function( assert ) {
  // TODO test login states
  assert.ok( telll.loginView , "Login went with state: " + telll.loginView.state);
  assert.ok( telll.credentials.authKey , "user have access: " + telll.credentials.authKey);
});

console.log("Loading simple Clickbox tests ...");
var clickbox = telll.showClickbox();

QUnit.test( "Clickbox start", function( assert ) {
  var done = assert.async();
  assert.expect(3);
  assert.ok( telll.clickboxView , "Clickbox went with state: " + telll.clickboxView.state);
 clickbox.on("loaded",function(){
      assert.ok(clickbox.photolinks,"Photolinks loaded.");
  });
  clickbox.on("detached",function(){
      assert.ok(clickbox.photolinks,"Clickbox  detacheed.");
  });
  clickbox.on("show",function(){
      assert.ok(clickbox.photolinks,"Clickbox showed.");
      done();
  });
  clickbox.once("created",function(){
      console.log(clickbox.t.cws);
      assert.ok(clickbox.t.cws,"Created a photolink wait");
      //done();
  });

});
// detach clickbox 
QUnit.test( "detach clickbox - basic", function( assert ) {
  // sending some to clickbox after one second
  var done = assert.async();
  assert.expect(0);
  setTimeout(function(){
      //clickbox.detach();
      done();
  }, 50);
});

//////////////////////////////////////////////////////

QUnit.module( "Complex tests" );

//telll.login(null, function () {
var clickbox = telll.showClickbox();


QUnit.test( "Clickbox receive and show photolink", function( assert ) {
  var done = assert.async();
  //assert.expect(5);

  assert.ok(true,"Waiting events ...");
  done();
  clickbox.once("image",function(){
      assert.ok(clickbox.photolinks," Clickbox poped image.");
      //done();
  });
  clickbox.once("list",function(){
      assert.ok(clickbox.photolinks," Clickbox loaded list on screen.");
      //done();
  });
  clickbox.once("got",function(){
      assert.ok(clickbox.photolinks,"Clickbox got photolink");
      clearTimeout(handle)
      //done();
  });

    // ends if after 2 second its not done
  var handle = setTimeout(function(){
     //assert.expect(1);
     console.log("clickbox stoped at "+clickbox.state);
     assert.ok(null,"clickbox stoped at "+clickbox.state);
     done();
  }, 2000);
});




QUnit.test( "send photolink", function( assert ) {
  var done = assert.async();
  assert.expect(1);
  // ends if after 5 seconds its not sent
  var handle = setTimeout(function(){
     telllDialog("photolink not sent ...");
     assert.ok(null,"error: Sent photolink");
     done();
  }, 5000);
 
  // sending some to clickbox after one second
  setTimeout(function(){
    var photolinkId = 0;
    var title = "The honorable Mock Title";
    var thumb = "http://52.20.194.143/movies/telll/big_buck_bunny.jpg";
    var url = "https://peach.blender.org";
    var description = escape("The honorable Mock Description '✓ à la mode' \ / ~ : } { =\"\'}");
    var Plot = escape("The honorable Mock Description2 \ / ~ : } { =\"\'} '✓ à la mode'");
    var ret = telll.cws.cmd.click_trackmotion({
        api_key: "1234",
        auth_key: telll.credentials.authKey,
        trackmotion: 0,
        movie_id: 0,
        // mock to use demo clickbox
	//extra_data:'{"photolinkbb":'+0+', "photolink":'+0 +'}'

        extra_data: escape('{"photolink":'    + photolinkId + 
                          ', "title":"'       + title + '"' + 
                          ', "thumb":"'       + thumb + '"' + 
                          ', "link":"'        + url + '"' + 
                          ', "description":"' + btoa(description) + '"' + 
                          ', "imdbPlot":"'    + btoa(Plot) + '"' + 
                          //', "movie":'        + myAdFw.movie.id + 
                          '}' ) 

    }, function (resp) {
        if (resp.error) {
            telllDialog("Error: " + resp.error, 3000);
        } else {
            assert.ok(resp,"Sent photolink");
            console.log("Response:",resp);
            telllDialog("Photolink sent!", 2000);
            clearTimeout(handle);
            done();
        }
    });
 }, 1000);
});

// detach clickbox in 7 seconds
QUnit.test( "detach clickbox", function( assert ) {
  // sending some to clickbox after one second
  var done = assert.async();
  assert.expect(0);
  setTimeout(function(){
      clickbox.detach();
      done();
  }, 7000);
});



/////////////////////////////////// Login
});




