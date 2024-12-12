if (!window.themeListenerInitialized) {
    window.themeListenerInitialized = true;
  
    chrome.runtime.onMessage.addListener(function (
      request,
      sender,
      sendResponse
    ) {
      console.log('Message received:', request);
  
      try {
        if (request.theme === 'dark') {
          document.body.style.backgroundColor = '#0E131F';
          document.body.style.color = '#8B939C';
          sendResponse({ success: true, theme: 'dark' });
        } else if (request.theme === 'light') {
          document.body.style.backgroundColor = '#fff';
          document.body.style.color = '#333';
          sendResponse({ success: true, theme: 'light' });
        } else if (request.theme === 'summer') {
          document.body.style.backgroundColor = '#FF5B2E';
          document.body.style.color = '#FFCC99';
          sendResponse({ success: true, theme: 'summer' });
        } else if (request.theme === 'autumn') {
          document.body.style.backgroundColor = '#CB6D1A';
          document.body.style.color = '#F6A728';
          sendResponse({ success: true, theme: 'autumn' });
        } else if (request.theme === 'winter') {
          document.body.style.backgroundColor = '#4B88D8';
          document.body.style.color = '#F2E9F2';
          sendResponse({ success: true, theme: 'winter' });
        } else if (request.theme === 'spring') {
          document.body.style.backgroundColor = '#FFB19E';
          document.body.style.color = '#A3D6FF';
          sendResponse({ success: true, theme: 'spring' });
        }
      } catch (error) {
        console.error('Error applying theme:', error);
        sendResponse({ success: false, error: error.message });
      }
  
      return true; // Keep message channel open for async response
    });
    console.log('Theme listener initialized');
  }