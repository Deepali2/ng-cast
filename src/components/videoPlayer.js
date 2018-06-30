angular.module('video-player')

  .component('videoPlayer', {
    bindings: {
      video: '<'      
           
    }, 
    
    controller: function() {
      this.getIframeSrc = function() {
        return 'https://www.youtube.com/embed/' + this.video.id.videoId;
        
      };
    },
  
    templateUrl: 'src/templates/videoPlayer.html'
  });
  
  