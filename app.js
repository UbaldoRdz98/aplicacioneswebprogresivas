if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
    .then(function(registration) {
        console.log('Service Worker registrado con alcance:', registration.scope);
    })
    .catch(function(error) {
        console.log('Fallo en el registro del Service Worker:', error);
    });
}
