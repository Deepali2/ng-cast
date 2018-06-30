angular.module('video-player')

  .component('app', {   
 
    controller: function() {
      this.videos = window.exampleVideoData; 
      this.currentVideo = window.exampleVideoData[0];
      // console.log(window.exampleVideoData) ;   
      
      this.onClick = function(video) {
        // debugg er;
        this.currentVideo = video;
      };
    

      // this.getIframeSrc = function() {
      //   return 'https://www.youtube.com/embed/' + this.video.id.videoId;        
      // };  
    },  
    templateUrl: 'src/templates/app.html'
  });
