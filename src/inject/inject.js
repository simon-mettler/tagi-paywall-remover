chrome.extension.sendMessage({}, function(response) {

  var readyStateCheckInterval = setInterval(function() {

    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);
    
      var content = document.getElementsByTagName('body')[0];

      if (content.classList.contains('h-disable-scroll')) {

        content.classList.remove('h-disable-scroll');
        content.classList.remove('o-tamedia-wrapper');

        var overlay = document.querySelector('.o-tamedia-wrapper');
        var target = document.querySelector('#article');
        var div = document.createElement('div');

        overlay.style.display = 'none'; 
        div.innerHTML = 'Paywall removed!';
        div.style.background = 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)';
        div.style.color = 'white';
        div.style.borderRadius = '5px';
        div.style.padding = '50px';
        div.style.margin = '25px 0';
        div.style.textAlign = 'center';
        div.style.fontFamily = 'sans-serif';
        div.style.width = '100%';
        target.parentNode.insertBefore( div, target );

        console.log('=============== Paywall removed! ===============');

      } else {
    
        console.log('=============== No Paywall to remove...===============')

      }

    }
    
  }, 10);
  
});