// Loading data into tws
var telll = new telllSDK.Telll();

//QUnit.config.autostart = false;
QUnit.config.reorder = false
telll.login(null, function () {

QUnit.test( "Loading data", function( assert ) {
  var done = assert.async();
    	assert.ok( telll.loginView , "Login went with state: " + telll.loginView.state);
  assert.ok( telll.credentials.authKey , "user have access: " + telll.credentials.authKey);

  /** List photolinks 
   *
   */
  var mid = 0;
  telll.getPhotolinksOfMovie(mid, function(jsdata){
      console.log(jsdata);
      assert.ok (!jsdata.error, "The photolinks list: "); 
  });
  
  /** Modify User (self)
  var user = [
       { name: 'username', value: 'telll'},
       { name: 'password', value: '12345'}, 
       { name: 'email',    value: 'telll@telll.me' },
  ];
  var userId;
  telll.saveUser(user, function(jsdata){
      console.log(jsdata);
      userId = jsdata.id;
      assert.ok (jsdata.created, "User created! id: "+userId); 
  }); 
*/
/** Create Movie
  var movie = [
       { name: 'title',       value: 'testes'},
       { name: 'description', value: 'none'}, 
       { name: 'url',       value: '/movies/none' }
  ];
  var movieId;
  // TODO this method saves only self data
  // please create better options!!!
  telll.saveMovie(movie, function(jsdata){
      console.log(jsdata);
      movieId = jsdata.id;
      assert.ok (jsdata.created, "Movie created! id: "+movieId); 
      movie.push( {name: 'id', value: movieId} );
  //telll.deleteMovie(movie, function(jsdata){
      //console.log(jsdata);
      //assert.ok (jsdata.id, "Movie deleted! id: "+movieId);
      done(); 
  }); //});
  */
});

});

