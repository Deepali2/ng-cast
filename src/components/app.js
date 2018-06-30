angular.module('video-player')

  .component('app', {   
 
    controller: function() {
      this.videos = window.exampleVideoData; 
      this.currentVideo = window.exampleVideoData[0];
      console.log(window.exampleVideoData) ;   
        
    },    
    templateUrl: 'src/templates/app.html'
  });
