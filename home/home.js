// TRACKS PICK SIMULATION

    function shuffle(array) {
      var m = array.length, t, i;

      // While there remain elements to shuffle…
      while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }

      return array;
    }

    function range(start, end) {
        var array = [];
        for (var i = start; i <= end; i++) {
            array.push(i);
        }
        return array;
    }

    var track_id = range(1,100);

    var rand_tracks = shuffle(track_id).slice(0,24);

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

// TRACKS PICK SIMULATION


//create the grind
obj = JSON.parse(tracks);

html='';

for (var i=0; i<24 ; i++){
    html += '<div class="element"><img id="track" class="col-md-2 img-thumbnail" alt="" src="'+ obj.tracks[i].cover +'"></div>';
      
};

$('.grind').append(html); 


$(document).ready(function(){

	//Rotate the refresh icon once 
	$('.new-songs').click(function(){
    	var interval = null;
    	var counter = 0;
    	var $this = $('.refresh');
    	clearInterval(interval);
 
   		interval = setInterval(function(){
        	if (counter != -360) {
            	counter -= 5;
           	 	$this.css({
            	    MozTransform: 'rotate(-' + -counter + 'deg)',
                	WebkitTransform: 'rotate(' + -counter + 'deg)',
                	transform: 'rotate(' + -counter + 'deg)'
            	});
        	}
    	}, 10);
       
        // TRACKS PICK SIMULATION
        var track_id = range(1,100);
        var rand_tracks = shuffle(track_id).slice(0,24);

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
        // TRACKS PICK SIMULATION

        // Replace with new tracks
        obj = JSON.parse(tracks);

        html='<div class="row grind">';

        for (var i=0; i<24 ; i++){
            html += '<div class="element"><img id="track" class="col-md-2 img-thumbnail" alt="" src="'+ obj.tracks[i].cover +'"></div>';
              
        };
        html += '</div>'
        $('.grind').replaceWith(html); 
	});	

});

                               
          
