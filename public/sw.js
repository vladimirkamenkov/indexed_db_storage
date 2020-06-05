importScripts('https://unpkg.com/idb@5.0.4/build/iife/with-async-ittr-min.js');

const VERSION_IDB = 1;

const writeToIDB = async (data, clientId) => {
    const db = await idb.openDB('calendar', VERSION_IDB, {
        upgrade(db) {
            db.createObjectStore('items', { autoIncrement: true });
        }
    });
    await db.put('items', data);

    const client = await clients.get(clientId);

    if (client) {
        client.postMessage({
            message: 'Message added',
            exceptions: []
        });
    }
};


self.addEventListener( 'install', () => {
    self.skipWaiting();
});

self.addEventListener( 'message', ( { data, source } ) => {
    writeToIDB(data, source.id);
});

self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then((names) => {
            for (let name of names){
                caches.delete(name);
            }
        })
    );
});