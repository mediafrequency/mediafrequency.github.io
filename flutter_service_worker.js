'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6b610c3f3e565fa4e277fedf51ae5627",
"assets/AssetManifest.json": "23752c75c63c47d5cb71cfa91aec44e7",
"assets/assets/images/aeye.jpeg": "903d1990691e98b01dd1cc0acc8bb038",
"assets/assets/images/clients/client1.png": "01e86ef0e2fea2760ac9c5cc54779496",
"assets/assets/images/clients/client10.png": "2349c63ff04add3810dee6fc4767f0d7",
"assets/assets/images/clients/client11.png": "a18f43bbee0c62d3b5e45f5019a0ad26",
"assets/assets/images/clients/client12.png": "dc5b9bf5b985635ecd37057565559b98",
"assets/assets/images/clients/client13.png": "9249d843be13980937916a399c8e272c",
"assets/assets/images/clients/client14.png": "40f55c9f3ff503f57c616793dc495924",
"assets/assets/images/clients/client15.png": "c5c95d6f29bb4144c758632169f1f234",
"assets/assets/images/clients/client16.png": "182d0e4ee2c45384bb54d42aaadeefb7",
"assets/assets/images/clients/client17.png": "338c2437adb0d5da93021349281dcae3",
"assets/assets/images/clients/client18.png": "a9ece0865f8bd068cee981b146e83062",
"assets/assets/images/clients/client19.png": "42bf0ba586fdfdb076c054c7e5081bcd",
"assets/assets/images/clients/client2.png": "28f89a25952283cfad2639765093badf",
"assets/assets/images/clients/client20.png": "8a6107f170af993e00ed5d59715472f0",
"assets/assets/images/clients/client21.png": "aa0449db530c676a26d80456de03521c",
"assets/assets/images/clients/client3.png": "32d915dd010b0583a8c85c5ccabd9025",
"assets/assets/images/clients/client4.png": "8380776df075eeacf9f310386eae33b6",
"assets/assets/images/clients/client5.png": "f83319457860ad37da1c1d9301418c43",
"assets/assets/images/clients/client6.png": "6fe0e8c729d5f589d66cac5b57c60c76",
"assets/assets/images/clients/client7.png": "a294660a621042fedf3ad4123943dac6",
"assets/assets/images/clients/client8.png": "273b2cc74c99874a8fe61e382bd2172e",
"assets/assets/images/clients/client9.png": "c317f61624d2a79c13275aeee5d3c3c7",
"assets/assets/images/freq.jpg": "1df08f3dd6e950a0dcbb9cd5d29ada97",
"assets/assets/images/globalization3.png": "21dd0e821550bae18c267c0fdec50384",
"assets/assets/images/globalization4.png": "0431a38cc43fa955e0fd4fb0e68167d8",
"assets/assets/images/globalization5.png": "0612d98187a9b404a8f0f0fa0e5f125b",
"assets/assets/images/idea.png": "984d078c8d3d193d27fd8abe007d4f0c",
"assets/assets/images/laptop.jpeg": "33a133f836b7c94bab0fb09773e3efae",
"assets/assets/images/logo.png": "6f9e3b028ca6156a599c140b92129092",
"assets/assets/images/mobile-empty.jpg": "fe275011a84da5cfc1b4e72ddfb29938",
"assets/assets/images/ourstory.jpg": "fb08c46eb2b2921dccd7cda5a15e76d6",
"assets/assets/images/services/service-e.png": "bacef183d28551ca7dc6a80c8386f661",
"assets/assets/images/services/service-f.png": "4ffa3ddf7e08b03a189b60a46ddc1adf",
"assets/assets/images/services/service-g.png": "d4eabcfad1578790d0c28b34f00c83d4",
"assets/assets/images/services/service-h.png": "fdbe9e8cf03d86e0306491f6af4b16b7",
"assets/assets/images/services/service-i.png": "1bd173f1805a2fad5938cd3333abb0d6",
"assets/assets/images/services/service-j.png": "4ad9377dfcf39f60f502c5e49d6ec0ff",
"assets/assets/images/services/service-k.png": "50b0cf48711dd1e27a3f45adffcc5292",
"assets/assets/images/services/service-l.png": "28bccaff61582835a8162c5a1742335d",
"assets/assets/images/services/service-m.png": "079cb3ce28dda54cbabcb18c0a937c0e",
"assets/assets/images/services/service-n.png": "ade6daee8d195fe110d15385d7c691ed",
"assets/assets/images/services/service-o.png": "7f0c5ec7b012e202a31867d426a62ea2",
"assets/assets/images/services/service-p.png": "51b25228e10681857c1b02368a5fcb10",
"assets/assets/images/stars.png": "6494ab5b3760b5e2cc46f5566a245371",
"assets/assets/images/twinkling.png": "c89dd3bcd72f343693fe4e691f3982c8",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "98fdaea5d0d2172e50c32d351a65ff9a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon-32x32.png": "fb2f508ca3963af165ce1361d2e1aff0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "84d635db81fb8517d733bf06d756e1ca",
"/": "84d635db81fb8517d733bf06d756e1ca",
"main.dart.js": "17d40b7b743b006a2690d824d2fb7e80",
"manifest.json": "1e8530296f45a484399a11d4858e2aaa",
"version.json": "0b73a6fd77cf26a0a5b2d596e3b3f06c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
