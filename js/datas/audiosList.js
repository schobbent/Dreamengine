﻿/**
* @ContributorsList
* @Inateno / http://inateno.com / http://dreamirl.com
*
***
* audioList
this is the audioList will be available in the project.
Please declare in the same way than this example.
To load audio as default just set "preload" to true.
**/

define( [ 'DE.CONFIG' ],
function( CONFIG )
{
  var audioList = [
    // MUSICS
    //[ "game_music", "audio/Game_Music", [ 'ogg', 'mp3' ], { "preload": true, "loop": true, "isMusic": true } ]
    
    // FX
    //[ "game_fx", "audio/Game_FX", [ 'ogg', 'mp3' ], { "preload": true, "loop": false, "isMusic": false } ]
  ];
  CONFIG.debug.log( "audioList loaded", 3 );
  return audioList;
} );