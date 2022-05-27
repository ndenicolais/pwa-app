// install event
self.addEventListener('install', evt => {
    console.log('Service Worker installato');
  });
  
  // activate event
  self.addEventListener('activate', evt => {
    console.log('Service Worker attivato');
  });
  
  // fetch event
  self.addEventListener('fetch', evt => {
    // console.log('fetch event', evt);
  });