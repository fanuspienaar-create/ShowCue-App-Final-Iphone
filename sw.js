const CACHE='oam-studio-v7';
const CORE=['./','./index.html','./manifest.webmanifest','./assets/oam-logo.png','./assets/oam-icon.png','./assets/icon-192.png','./assets/icon-512.png','./assets/icon-1024.png','./assets/apple-touch-icon.png','./assets/oam-favicon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET') return;
 e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).then(r=>{
   if(r.ok && new URL(e.request.url).origin===location.origin){const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy))}
   return r;
 }).catch(()=>cached||caches.match('./index.html'))));
});
