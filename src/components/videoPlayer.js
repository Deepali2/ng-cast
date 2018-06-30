angular.module('video-player')

  .component('videoPlayer', {
    bindings: {
      video: '<',
      onClick: '<'    
    }, 
    // controller: function() {
    //   this.getIframeSrc = function() {
    //     return 'https://www.youtube.com/embed/' + this.video.id.videoId;        
    //   };          
    // },
  

    //{{$ctrl.getIframeSrc()}}
    templateUrl: 'src/templates/videoPlayer.html'
  });
  
  