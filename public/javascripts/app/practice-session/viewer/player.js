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
        width: 336,
        height: 180,
        playerVars: {
          autoplay: 2,
          controls: 0,
          modestbranding: 1,
          rel: 0,
          showInfo: 0
        }
      });
    }
  };

  return player;
});
