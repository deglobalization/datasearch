'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "c2ed5e75f1bbb436b9a0b9271044f79c",
".git/config": "db96e6cd3900370efb7949b01f46fd91",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "f326552b7c44e7b9e5b1deadcb8d18ab",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "53e1f43a08c878bce72ef85e8fa3d801",
".git/logs/refs/heads/master": "53e1f43a08c878bce72ef85e8fa3d801",
".git/logs/refs/remotes/origin/master": "f2eeeb0398fcb35045a270356f239ed0",
".git/objects/5c/43a23ec272f0fd77f41bed3051efa159fb20fc": "a499001e4d80f832d084dc75abce7449",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/a3/4db8359da9192c3754301c40469c2e65367458": "45d7c582bdc542b9e95ad36a8609cbd2",
".git/objects/aa/4a39f7fb9360823a478bf1fc3bf45502561da7": "77faa610fb04bf3a090bc7ca4be7e809",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/d2/374ae651267706f9c0e987958f15eea5397917": "eda8be54860788ce32b38b16a1ed0e9f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/refs/heads/master": "d079dd031d353f31fd349d92382103fe",
".git/refs/remotes/origin/master": "d079dd031d353f31fd349d92382103fe",
"assets/AssetManifest.json": "dec4e6896f2dc1d2a883c6d1e29063bb",
"assets/assets/call.png": "c5bf6a4576a6d00007d7ec980afc1c84",
"assets/assets/clock.png": "ccbe98c982f78ef192b05985647047b6",
"assets/assets/doctor_pic.png": "f73ac141a379d4b6a965638a1a8e8bdc",
"assets/assets/doctor_pic2.png": "487c7f49145f27c290d06bffa730c309",
"assets/assets/email.png": "614fa64806da7e3a66711aca94f073cf",
"assets/assets/icons/add_to_cart.svg": "0eb1a5e481ee24dba9de843a9dacdde1",
"assets/assets/icons/back.svg": "1b13e0b59c27ec75d6f5051e5d66e8d9",
"assets/assets/icons/bag_1.svg": "63e5245b06f0a2341dba8d0d9f81014b",
"assets/assets/icons/cart.svg": "fd320d807686c8432b2e449a583296b1",
"assets/assets/icons/cart_with_item.svg": "cd650a3a6c295fc1f59c130b56a68169",
"assets/assets/icons/chat.svg": "d95b2e01e56f9f12d803848205435f19",
"assets/assets/icons/heart.svg": "1c996a5addb1570d53d2093a229b8ac8",
"assets/assets/icons/notification.svg": "8985abcb7a55124e6b08aff92eed4a7c",
"assets/assets/icons/search.svg": "654e22ab2ad459d56cff69b1e077c53f",
"assets/assets/icons/shopping-bag.svg": "1cc7453dcdc4892fd28095ef42c7d794",
"assets/assets/images/amosartan.jpg": "d8c53eacb5f24b7025944021cee6937c",
"assets/assets/images/amosartan_bg.png": "1c0ab640e06b2075eed82996034b66c3",
"assets/assets/images/bag_1.png": "e9506b6861af2660221107684bbebd97",
"assets/assets/images/bag_2.png": "1d5fd0aaf3e6cbf6b8fa23aed72b0523",
"assets/assets/images/bag_3.png": "d069787fd88889b6d9c0d3b7a054e0bd",
"assets/assets/images/bag_4.png": "0d85b194c8a5c71c60f84d899de86c31",
"assets/assets/images/bag_5.png": "3144272695836710191b7f953cc6fb7e",
"assets/assets/images/bag_6.png": "c51f90dc78a7bc817fd14f20d6567d94",
"assets/assets/images/HanmiPharms.jpg": "e79e4bdaaaea3bc840956a3b8735a9e4",
"assets/assets/images/HanmiPharms_01.jpg": "9d952a28dfa25ebd5e815d08913a99fa",
"assets/assets/images/Item_1.png": "7cd88c0c89538723a03692ecd8cafbc5",
"assets/assets/images/Item_2.png": "bfb1c99d4de3967170667108f0ca0ad8",
"assets/assets/images/Item_3.png": "d11bc83958f80761052faa7b905e753d",
"assets/assets/img1.png": "e3b9055a0a623c240256e1192ea93703",
"assets/assets/img2.png": "b66f6c9d33fb1b4e59bf08c52692bbd9",
"assets/assets/img3.png": "9a52e32ed4d984a8cddb023551459dd7",
"assets/assets/imgs/1.jpg": "d9f6499cdbe014ee72f1df9ff58459c7",
"assets/assets/imgs/2.jpg": "92cb0ae8a636124adb519d80d88b3eb4",
"assets/assets/imgs/3.jpg": "24a3dcaf43754e489c14c85c3525a1bb",
"assets/assets/imgs/4.jpg": "e7cfead2687e2ca9d62db5dc0161c976",
"assets/assets/imgs/album-1.jpg": "802e3329afff5628153c0502df5f24da",
"assets/assets/imgs/album-2.jpg": "fa279e9c71102587a30f2ecfef01d964",
"assets/assets/imgs/album-3.jpg": "2566c179884cbc12499a74d3992c443c",
"assets/assets/imgs/album-4.jpg": "97a59a678f9dbc46d11edecb1c8af062",
"assets/assets/imgs/album-5.jpg": "fe71b959d7c6aa96be5a592aebc9a110",
"assets/assets/imgs/album-6.jpg": "f01d9acfa8e512fbf48e34eea8982cca",
"assets/assets/imgs/android.png": "df28076d139457a08855843e15857450",
"assets/assets/imgs/bg-profile.png": "3de87c0a2a7a76d9cf7ec6a62a5d0e3b",
"assets/assets/imgs/creative-tim.png": "f7cb2d390498c2969b2b1050f3e024ce",
"assets/assets/imgs/invision-white-slim.png": "300494e9857b8d865ead79a62b09dd88",
"assets/assets/imgs/ios.png": "8995562214c7d018450e9cc2ab382ed0",
"assets/assets/imgs/now-logo.png": "06e0fc6563685a66896afba4a3b71b2a",
"assets/assets/imgs/onboarding-bg.png": "c0c3a93765b3bcf0af6729626b68529f",
"assets/assets/imgs/onboarding-free.png": "2c9d2f3141311e9ee3481a500b6cc1d4",
"assets/assets/imgs/profile-img.jpg": "e9d91bef345f57137d1f7f83f99cb6ca",
"assets/assets/imgs/profile.jpg": "343a34c6d16cf928d2343426592684ac",
"assets/assets/imgs/register-bg.png": "412a3a0fa0bda81c8763b2d22a1fc84e",
"assets/assets/imgs/terry-1.jpg": "d9f6499cdbe014ee72f1df9ff58459c7",
"assets/assets/imgs/terry.png": "e52db2f32153b7e0ee23ac83086d133b",
"assets/assets/list.png": "53953c9607536b70af16326615fa2e9e",
"assets/assets/map.png": "9f5bc7f4f6e93ccd6ba1d7bd5740f30a",
"assets/assets/mappin.png": "adeb405012e47821664fbaf11278f603",
"assets/assets/products_detail.json": "b47ac69af8a9eab7fb8c8d722c376737",
"assets/assets/rosuzet.csv": "af9b1f6f026f3ff1da69e786b9129ecd",
"assets/assets/scope.png": "6e287b5f7f96bdf7fd9ccd5daa55d495",
"assets/assets/service.json": "a24204ce7183f1cb8561040abfc52545",
"assets/assets/test.json": "204fc8d61c28fee75ab1f97fc63ca244",
"assets/assets/video_call.png": "2d136c9440ab0404ebbd62bdae18cbd6",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "b94f125b7a08c6788dca1fb301f4430e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4d814db6f15afb8f38471c60c0a33eb3",
"/": "4d814db6f15afb8f38471c60c0a33eb3",
"main.dart.js": "8c62ce02075e5fdcd385cb6751322ba5",
"manifest.json": "38096d1681323e9e1e1307176d4dd0c2",
"version.json": "5c82cdc8e818976911caa6a7e856dd9b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
