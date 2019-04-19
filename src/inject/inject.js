chrome.extension.sendMessage({}, function(response) {

  var readyStateCheckInterval = setInterval(function() {

    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);
    
      var content = document.getElementsByTagName('body')[0];

      if (content.classList.contains('modal-open')) {

        content.classList.remove('modal-open');

        var overlay = document.querySelector('#overlay_wrap');
        var target = document.querySelector('#topNav');
        var div = document.createElement('div');

        overlay.style.display = 'none'; 
        div.innerHTML = 'Paywall removed!';
        div.style.background = '#25a4c4';
        div.style.color = 'white';
        div.style.borderRadius = '5px';
        div.style.padding = '20px';
        div.style.margin = '25px 0 25px 0';
        div.style.textAlign = 'center';
        div.style.fontFamily = 'sans-serif';
        div.style.width = '100%';
        target.parentNode.insertBefore( div, target );

        console.log('Paywall removed!');

      } else {
    
        console.log('No Paywall to remove...')

      }

    }
    
  }, 10);
  
});