#!/usr/bin/perl

use strict;
use warnings;
require v5.10.1;

use CGI;
use LWP::Simple;

my $q = CGI->new;
print $q->header(
  -type => 'text/plain',
  -content_location => 'telllupload.json',
  -access_control_allow_origin => '*',
);
my $root = '/var/www/html';
my $result = "{error:'unknown error'}";
my $content_types = ['image/png','image/gif','image/jpeg'];
my $file = $q->upload('imagefile');
my $fh = $q->param('imagefile');
my $un = $q->param('username');
my $type = $q->uploadInfo( $fh )->{'Content-Type'}; 
my $tmpf = $q->tmpFileName( $fh );
my $url = '/movies/'.$un."/".$fh; 
$result = "{\"url\":\"$url\",\"type\":\"$type\"}";
my $buffer;
if ($type ~~ $content_types) {
   if( open ( my $out_file,'>>',$root.$url) ) {
       while ( my $bytesread = $file->read($buffer,1024) ) {
           print $out_file $buffer;
       } 
       print $result;
   } else {
       print "{\"error\":\"Cant save file - $! $url\"}";
   }
} else {
    print "{\"error\":\"File type not permited\"}";
}

__END__

my $url = $q->param('url');;
my $content = get $url;
die "Couldn't get $url" unless defined $content;
my $base = '<head><base href="'.$url.'">';
print $base.$content.'<small>by monsenhor</small>';
