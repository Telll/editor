#!/usr/bin/perl

# clickbox.pl
# example implementation for photolink display and behaviors 
# using CGI.pm

# load photolink from tws
# fill content with photolink data

use strict;
use warnings;

use CGI;
use LWP::Simple;
my $q = CGI->new;
my $id = $q->param('id');
my $image;
my $description;
my $title;
#my $content = get $url;
print $q->header;
my $header = $q->start_html(
    -title=>'telll photolink',
    -author=>'filipo@kobkob.org',
    -base=>'true',
    -target=>'_blank',
    -meta=>{'keywords'=>'telll photolink',
	    'copyright'=>'copyright 2015 Monsenhor'},
    -style=>{'src'=>'/css/main.css'},
    -script=>[{-type=>'JAVASCRIPT', -src=>'/js/telllSDK.js'},
    {-type=>'JAVASCRIPT', -src=>'/js/photolink.js'}],
);

my $dtd      = '<!DOCTYPE html>';   # HTML5 DTD
$header =~  s{<!DOCTYPE.*?>}{$dtd}s; 
print $header;
print "<p>Show photolink $id</p>";
while (<DATA>){print $_;}

print $q->end_html;


__DATA__

<style>
#telll-top-controls{
position: absolute;
top:0px;
width:100%;
height: 30px;
background-color:rgba(254,254,254,0.7);
z-index: 800000;
}

#telll-photolink{
width:100%;
height:100%;
position:fixed;
background: #000;
overflow:auto;
top: 0px;
left: 0px;
}
#photolink-image {
height:100%;
margin: auto;
position:absolute;
top: 0px;
}
#photolink-image img.main {
width:100%;
height:100%;
}
.ttc-element {
width:26px;
margin-left: 5px;
margin-top: 2px;
}
.social-nw {
float: left;
position: relative;
left: 10%;
}
#telll-bottom-controls{
position: absolute;
bottom:0px;
height: 120px;
width:100%;
background-color:rgba(254,254,254,0.7);
z-index: 800000;
}

</style>
<div id="telll-photolink">

<div id="photolink-image">
 <a href="http://www.ford.com/cars/taurus/">
 <img class="main" src="/img/photolinks/photolinks_ocean_13.10.jpg" border="0">
 </a>
</div>   

<div id="telll-top-controls">
<div class="social-nw">
<img src="/img/social/youtube.png" class="ttc-element" onclick="alert('Share on Youtube!');">
<img src="/img/social/linkedin.png" class="ttc-element" onclick="alert('Share on LinkedIn!');">
<img src="/img/social/facebook.png" class="ttc-element" onclick="alert('Share on Facebook!');">
<img src="/img/social/email-blue.png" class="ttc-element" onclick="alert('Share by e-mail!');">
</div> <!-- social-nw -->
</div> <!-- top-controls -->
</div> <!-- telll-photolink -->
<h1>Opening Photolinks! ...</h1>
<p>To be done</p>
<small>by monsenhor</small>
