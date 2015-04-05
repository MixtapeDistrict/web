
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
	});	

});


//Test for the grind
var tracks = '{"tracks":[' +
'{"cover":"common/1.jpg"},' +
'{"cover":"common/2.jpg"},' +
'{"cover":"common/3.jpg"},' +
'{"cover":"common/4.jpg"},' +
'{"cover":"common/5.jpg"},' +
'{"cover":"common/6.jpg"},' +
'{"cover":"common/7.jpg"},' +
'{"cover":"common/8.jpg"},' +
'{"cover":"common/9.jpg"},' +
'{"cover":"common/10.jpg"},' +
'{"cover":"common/11.jpg"},' +
'{"cover":"common/12.jpg"},' +
'{"cover":"common/13.jpg"},' +
'{"cover":"common/14.jpg"},' +
'{"cover":"common/15.jpg"},' +
'{"cover":"common/16.jpg"},' +
'{"cover":"common/17.jpg"},' +
'{"cover":"common/18.jpg"},' +
'{"cover":"common/19.jpg"},' +
'{"cover":"common/20.jpg"},' +
'{"cover":"common/21.jpg"},' +
'{"cover":"common/22.jpg"},' +
'{"cover":"common/23.jpg"},' +
'{"cover":"common/24.jpg"}]}';


//create the grind
obj = JSON.parse(tracks);

html='';

for (var i=0; i<24 ; i++){
    html += '<div class="element"><img id="track" class="col-md-2 img-thumbnail" alt="" src="'+ obj.tracks[i].cover +'"></div>';
      
};

$('.grind').append(html);
