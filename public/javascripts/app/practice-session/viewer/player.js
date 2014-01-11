define([], function() {
  var player = {
    playVideo: function(container, videoId) {
      if (typeof(YT) == 'undefined' || typeof(YT.Player) == 'undefined') {
        window.onYouTubeIframeAPIReady = function() {
          player.loadPlayer(container, videoId);
        };

        $.getScript('//www.youtube.com/iframe_api');
      } else {
        player.loadPlayer(container, videoId);
      }
    },

    loadPlayer: function(container, videoId) {
      new YT.Player(container, {
        videoId: videoId,
        width: 306,
        height: 150,
        playerVars: {
          autoplay: 0,
          controls: 0,
          modestbranding: 2,
          rel: 0,
          showInfo: 0
        }
      });
    }
  };

  return player;
});
