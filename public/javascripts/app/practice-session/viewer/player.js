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
        width: 186,
        height: 30,
        playerVars: {
          autoplay: 1,
          controls: 0,
          modestbranding: 0,
          rel: 0,
          showInfo: 0
        }
      });
    }
  };

  return player;
});
