// install event
self.addEventListener('install', evt => {
    console.log('Service Worker installed');
  });
  
  // activate event
  self.addEventListener('activate', evt => {
    console.log('Service Worker actived');
  });
  
  // fetch event
  self.addEventListener('fetch', evt => {
    // console.log('fetch event', evt);
  });