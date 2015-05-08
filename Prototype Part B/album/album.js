// Make an Array form start to end of size(end-start+1)
function range(start, end) {
    var array = [];
    for (var i = start; i <= end; i++) {
        array.push(i);
    }
    return array;
};
   // Simulates 24 tracks
    var rand_tracks = range(1,24);
    
    //Test for the grind
    var tracks = '{"tracks":[' +
    '{"cover":"common/'+ rand_tracks[0]+'.jpg"},' +
    '{"cover":"common/'+ rand_tracks[1]+'.jpg"},' +
    '{"cover":"common/'+ rand_tracks[2]+'.jpg"},' +
    '{"cover":"common/'+ rand_tracks[3]+'.jpg"},' +
    '{"cover":"common/'+ rand_tracks[4]+'.jpg"},' +
    '{"cover":"common/'+ rand_tracks[5]+'.jpg"},' +
    '{"cover":"common/'+ rand_tracks[6]+'.jpg"},' +
    '{"cover":"common/'+ rand_tracks[7]+'.jpg"},' +
    '{"cover":"common/'+ rand_tracks[8]+'.jpg"},' +
    '{"cover":"common/'+ rand_tracks[9]+'.jpg"},' +
    '{"cover":"common/'+ rand_tracks[10]+'.jpg"},' +
    '{"cover":"common/'+ rand_tracks[11]+'.jpg"},' +
    '{"cover":"common/'+ rand_tracks[12]+'.jpg"},' +
    '{"cover":"common/'+ rand_tracks[13]+'.jpg"},' +
    '{"cover":"common/'+ rand_tracks[14]+'.jpg"},' +
    '{"cover":"common/'+ rand_tracks[15]+'.jpg"},' +
    '{"cover":"common/'+ rand_tracks[16]+'.jpg"},' +
    '{"cover":"common/'+ rand_tracks[17]+'.jpg"},' +
    '{"cover":"common/'+ rand_tracks[18]+'.jpg"},' +
    '{"cover":"common/'+ rand_tracks[19]+'.jpg"},' +
    '{"cover":"common/'+ rand_tracks[20]+'.jpg"},' +
    '{"cover":"common/'+ rand_tracks[21]+'.jpg"},' +
    '{"cover":"common/'+ rand_tracks[22]+'.jpg"},' +
    '{"cover":"common/'+ rand_tracks[23]+'.jpg"}]}';


obj = JSON.parse(tracks);
html='';
// Create each individual track: index used to provide example, will be replaced with the actual info.
for (var i=0; i<24 ; i++){
  //Create the logic and html for each track similar to this
  html += '<div class="element"><img id="track" class="col-md-2 img-thumbnail" alt="" src="../'+ obj.tracks[i].cover +'"></div>';      
};
// Put all racks in place
$('.album-tracks').append(html); 