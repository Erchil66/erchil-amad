'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"apple-touch-icon.png": "67f4d58d34caeb80bcd68ec49affb6cc",
"assets/AssetManifest.bin": "487f0ce70fddbfd3c7fb586ce668f123",
"assets/AssetManifest.bin.json": "9f9bb13625658a9396dff16ccaca5658",
"assets/AssetManifest.json": "4735e6de85073b9e7725ff03ca2980f4",
"assets/assets/audio/tell_me.wav": "68d8498c1fee333877331d8d5a55376d",
"assets/assets/pdf/cv-erchil.pdf": "747a5b6170ec224038c2f42bed602aac",
"assets/assets/pdf/resume_erchil_amad.pdf": "8bc9ad0c5069f11f074718ce516f349e",
"assets/assets/png/bg.png": "716bef04b28d5d4ea0a9cb6d47c4a484",
"assets/assets/png/logo_chil.png": "10635a56e5d3f95ddacf54118d7abd3d",
"assets/assets/svg/a.svg": "21fafa8ef39e5528c013110adc8b8a20",
"assets/assets/svg/bg_frame_contact.svg": "18cdcd536408bfe4a8ec09cd3a5bbaee",
"assets/assets/svg/discord_icon.svg": "03d9ebf1ca5633549a8da6a26c3b873a",
"assets/assets/svg/github_icon.svg": "cb54f9857204dc9c16cdb32bdcf31d57",
"assets/assets/svg/linkedin_icon.svg": "200a70fa88793e868fd251821d08bbf1",
"assets/assets/svg/logo_chil_svg.svg": "2baf5c15d6247d6cef2efa5ce79645d0",
"assets/assets/svg/messenger_icon.svg": "8f7ccbb66770b93c5338711f65900478",
"assets/assets/svg/pause_icon.svg": "d44306f8b48913eed5aa947fd8d07786",
"assets/assets/svg/play_icon.svg": "c04ad066bba78a7eebf8dae537ba0ed9",
"assets/assets/svg/send.svg": "987f05377b42ba497f3dd1e2846d3e01",
"assets/assets/svg/wa_icon.svg": "9cb5091734d292c89c60a37b36e5bafc",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "33011dee14a856fa3faa7cba580fbfba",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.ico": "8feaab445dd3e57af335107e638f2ee8",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "611afa2675f865c72ebc537b857f9e2c",
"icons/apple-touch-icon.png": "67f4d58d34caeb80bcd68ec49affb6cc",
"icons/icon-192-maskable.png": "d0eedca5fe9e672a1c423f76e41f059e",
"icons/Icon-192.png": "bc3b2f7ae71d8a9df8e920c0c219afbf",
"icons/icon-512-maskable.png": "10ae254b942b822908b64d2ca998b59e",
"icons/Icon-512.png": "5f5fbb943ffd6f10df1bb560b7016b67",
"index.html": "0fba50b32b57a57c5ff43bf2a45332e7",
"/": "0fba50b32b57a57c5ff43bf2a45332e7",
"main.dart.js": "3744d0cdba9e337aa175beb30aeff38e",
"manifest.json": "01a5bcbe86c3ad10966dde5643686445",
"splash/img/dark-1x.png": "684ee42547841c204effcb26cbad099b",
"splash/img/dark-2x.png": "fea5827d0f341c75dafce89f53e0f903",
"splash/img/dark-3x.png": "832ad9188e4c92b8462936ed1b2fdb1d",
"splash/img/dark-4x.png": "4e037affe5e1afe7f9c272fb1e5f4eb9",
"splash/img/light-1x.png": "684ee42547841c204effcb26cbad099b",
"splash/img/light-2x.png": "fea5827d0f341c75dafce89f53e0f903",
"splash/img/light-3x.png": "832ad9188e4c92b8462936ed1b2fdb1d",
"splash/img/light-4x.png": "4e037affe5e1afe7f9c272fb1e5f4eb9",
"version.json": "89b9162edb3ca327fabedacd20b3e03b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
