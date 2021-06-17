'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "c73f57a771f98f41ea0cbfd364899fee",
".git/config": "6081564e052d0bc0f28f514f6996e15a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "841dfcc3127f5f64a8869cd63d9c0c35",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0e52252eb53f8e75504dda3376a8d5fe",
".git/logs/refs/heads/master": "0e52252eb53f8e75504dda3376a8d5fe",
".git/logs/refs/remotes/origin/master": "81297d0f2cd9edb020854c522a1a5e12",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/30/7a236bbeec0abaf14e726f276b8f410af50564": "a563a51f553bb5ba286cc8a51666f33f",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/36/4a9694bf82e3e16089025b97177b1c3d99c92c": "ca82b0f0ff4a5ecbfec15180da54e44c",
".git/objects/39/b6c762b6e513ac4d15de279c8e8c339ee1f1ad": "ce23608b9042b3e22b57df9615cbf2d8",
".git/objects/43/46e2d9e671bf7a5a3287a3ddacf5f915a35d4f": "41b3d0d418188d18de1ec7daf79f5299",
".git/objects/49/133379e7f803c60e4360a97bb3b2fcc041475c": "baa6f01df91de3b5ac0ab28b72385653",
".git/objects/4c/57a4c8755373a911bfc4296483ed3f137dca6a": "adb5cff767672600c9b821d24845bf97",
".git/objects/4c/58ed08dab732cbe9800affb231e930344129ee": "b76ded7d99110bf8f0a355f478b710b0",
".git/objects/54/c067ec0912f72edbde015e2cd1ff9273ad0413": "b18f27bea899e016b7b7b941c30aa3c4",
".git/objects/55/4c4fdb76ccbf32666c0bc7ad042c03e278db99": "a8d590021245ec46c07eabb8d0476977",
".git/objects/55/e8bfe1c7a3c0073a04413b130e22b712c4f6de": "820b9a285e2a642819280953a5b19c4c",
".git/objects/5b/fbe5a79b6273fb38ea02b36ca1739793a616df": "6ecd037e91951f17acee0f140f2dd5c2",
".git/objects/69/fd0233efa6e6b49e887b76ccb62bcb0561d355": "9a94215f96917a02b500b209b2ddab33",
".git/objects/76/8cb22d6fab4d46f975e2f7afbbe57755695c83": "95be067641504cec69f7c2a5e3bc290e",
".git/objects/78/a5bb3de5bff31623413a2107cf3636230ec878": "198edc8c9ca0df2330b8fa3bfc8159f9",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7e/39078d1e9983395cb406d9db03aefae3a54c27": "ab70186b9f9c41e4b8e77a8af5169a62",
".git/objects/81/4b4962fda13945423743cb084322ece311c878": "68134679be3a220f0a6402bfc836bb74",
".git/objects/82/b14cd23bf6884ccfac06476aeb50457693fc43": "a4a8dcd368f94e44412f056a9d545e24",
".git/objects/84/d3e5134bf0df01a04109c331bde9ecf650e785": "f9080f28294b520bbad50939ac18df6f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/35c45e0f54917f69130525915f5ea81893b8a5": "2a22fb3412f991600e3c39d76ebf65fb",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/93/2df4ae2c3cb34a716e21b478590eecaa2ae295": "e299ba2e68d97d0f661cc8ddccf9787a",
".git/objects/96/498660b077e91b7d89ecd6fa46342de8f49794": "99eaef657fd70484906273e8d8443533",
".git/objects/97/001a02542951d886700a6aae56fb16bc721129": "6f696714abea541484b2c779ca11687f",
".git/objects/9a/62fd3b73557f00debd11797a7b29ae23a0078a": "422f5b10c53418312ca27deb5f6339ef",
".git/objects/9f/4c0d210fcd183eb43bbc7910ebd9de4067c718": "577b129b339fcf11eab2e7dd3115731a",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/af/92d41e20672fe6b34ef657f27db755a878a3ec": "6d86b9f983b8afc4dd9b31fc6a69ce62",
".git/objects/b0/423e7fdcbb573da47c9672f8b83ff83236d2f7": "060c51d87a8666792c34d57abbaf66b3",
".git/objects/b2/698794a1abe0a41aa59cab4b6df757adb8633c": "31d459cec30c5a50914e7a629441abb7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/72e88fc5cbbd10adecdbc44fa90d45026aaacf": "1b8a4f695fa1ba490e69feaffe8c24d3",
".git/objects/c2/a728121cc94290e0e8dbde82b1e5125d5465a6": "f2989bf1405fb660305820683b8ee53c",
".git/objects/d3/b9ca1f361ad37bc2bbfc1e9deee33936d4d78b": "8e42b7c0a25110fd9c9641813853a9e9",
".git/objects/dd/43db65edcbfd810943d4270e20d3703447c26d": "b41f2c4cbaf5f3425cc1445d4e1e098e",
".git/objects/dd/c60488b6442118b72a3e81bb7efb612a7d32f2": "460525d93ebc55ebc3de0a85dfaef2d6",
".git/objects/e1/cb28bbb1d87f34bf24480ecd1ee65119647a2f": "51fd966e57fe745485fda657b7d3eddb",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/147cd7ae40d5915f5b18ba7b77717431e705f8": "5019e0b0626246f41ae3032e99cbc9c0",
".git/objects/f1/7d5a5014e4ae9c7d9d5f8de26fec398f65e44c": "e8f04124372d550cb6c2b42e572f972f",
".git/refs/heads/master": "61d0d690386461c2f049bd7d351ef0b6",
".git/refs/remotes/origin/master": "61d0d690386461c2f049bd7d351ef0b6",
"assets/Animation/orman.png": "e8f3d1e4025569b36950d82caf5cd1ec",
"assets/AssetManifest.json": "f8418da837c54c1637e064de0b8ac6df",
"assets/assets/aksam.jpg": "773b61489aabcc1bc13e9bdc39cece13",
"assets/assets/anasayfa.jpg": "2d9587506663072a12bf156ec70c345d",
"assets/assets/apple-693971_1280.jpg": "e701e234efcd51e7dee688e8a34e9a3f",
"assets/assets/bulutlu.jpg": "92015c69a32737bc53611449b24ad680",
"assets/assets/cherries.jpg": "ab0102dab4cdd6425bddc7a82a6b011d",
"assets/assets/elmaS.jpg": "f65739f2790f9875efb2f4084127c6fc",
"assets/assets/gunduz.jpg": "420e2cd536d5fcda3b608c48daf996f4",
"assets/assets/kirazS.jpg": "7e020baa917b85f56455828eef54c8cb",
"assets/assets/lemons.jpg": "b256b794236bc046a297cc316a2671e6",
"assets/assets/limonS.jpg": "801fd57b6f6ab3d467e3da885415a085",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "e182439f83ea79a2a2f9fbafeba5d21a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "bfbb79cd529904bcf41b7afd8e893ed0",
"/": "bfbb79cd529904bcf41b7afd8e893ed0",
"main.dart.js": "d5a73e80920d6e3fcfbb3ff7fe7e937f",
"manifest.json": "5970c5bb626ce0463373a2ac40af0099",
"version.json": "ccc20bdb9ccbd904fe4ba1424501d5c4"
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
