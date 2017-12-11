"use strict";function setOfCachedUrls(a){return a.keys().then(function(a){return a.map(function(a){return a.url})}).then(function(a){return new Set(a)})}var precacheConfig=[["/lab/amsf/404.html","1d9fac12e007f97dad4643d49b863b05"],["/lab/amsf/about/index.html","ec8eb1a54aaf4bb9d1d22cbb564de10b"],["/lab/amsf/apple-touch-icon.png","e2aaf5b4d4171c06f429ca27259576e8"],["/lab/amsf/assets/svg/amsf.svg","3b74ca6662af0cc5c48127bad1d2e906"],["/lab/amsf/blog-introduction.html","6e2cd2459ef24c234df80dcffe1437c3"],["/lab/amsf/blog/index.html","300035977a752f3c2e94698ca3bf39e7"],["/lab/amsf/configuration.html","297152e4fc8843da9e2c043e83c109e7"],["/lab/amsf/creating-themes.html","fff3586c9529b645ca0d123667328382"],["/lab/amsf/custom-color-scheme.html","4dfaea24256ac816f03fb3ab37d822cf"],["/lab/amsf/custom-css.html","7453293abcc205140c3d7125ed31647d"],["/lab/amsf/custom-heading-background.html","6159e7e123ccfd52a2605db70df8ee29"],["/lab/amsf/custom-heading-image.html","15501f2712b45554e845d699efbc6aad"],["/lab/amsf/custom-html-markups.html","d174c2edff7015e5d1c68992de91cd9a"],["/lab/amsf/customizing-styles.html","7fea1300c8495dc8a96aacfacc65c9a0"],["/lab/amsf/deployment-methods.html","1f1467d3d2bbdb3ac01b3a91cf33b2c4"],["/lab/amsf/external-link-post.html","c49a1a1d5756ce5dc344634e591ad28b"],["/lab/amsf/favicon.png","083879bebd729a090211c0aed330b47e"],["/lab/amsf/favicon.svg","1243ce6d48e0a7e0febe90fa60b3d37e"],["/lab/amsf/getting-started.html","92c05d0af16cd0b3a7d29765d01c25e7"],["/lab/amsf/github-pages-setup.html","281a85054bea595a238e0d59e48b788c"],["/lab/amsf/index.html","cccfcb977cb15c339340e9cc13392f50"],["/lab/amsf/jekyll-theme-compatibility.html","c5fa2217071f5cd4954c1660ad92a192"],["/lab/amsf/logo.png","17e4dc558556df9e4b44bbe6397ebbfc"],["/lab/amsf/markdown-features-test.html","c7a925b517e532f80d29574a781003ee"],["/lab/amsf/markup-example.html","0a9a19867d9948dd6a7090af2fff9bda"],["/lab/amsf/mask-icon.svg","f410e111ad3dc3eced7d2353d098af33"],["/lab/amsf/multiple-themes-support.html","8d1aed6905385923d2f1b666e4957dd4"],["/lab/amsf/news/index.html","5f6f296f14aac7992d651efa3942d587"],["/lab/amsf/notes-introducton.html","aac8b67bdb4137f5768340cf4bc7c804"],["/lab/amsf/notes/index.html","ee4894185fabbc5784fae539343e8e9d"],["/lab/amsf/open-graph.html","e3231443fd4990993c1dc85a5e8bbb83"],["/lab/amsf/steam-games-on-chromeos.html","31320d7658a2fe17a780b88bb7f14ca1"],["/lab/amsf/svg-post-title.html","4055b2e46b6f1fea98079377788da63c"],["/lab/amsf/syntax-highlighting.html","4bee78588c290da6952c547c0fdeab17"],["/lab/amsf/theme-curtana.html","366a33d626247d52a89ffbbe27537308"],["/lab/amsf/themes.html","c56a8154fd395ae1fb7ca4834a38700d"],["/lab/amsf/upgrading-guide-v1.1.0.html","e7274c7edb5216ba6d45ca5238150270"],["/lab/amsf/welcome.html","c5adcedfc9f8371f111de549c35b42b7"]],cacheName="sw-precache-v3-almace-scaffolding-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(a,b){var c=new URL(a);return"/"===c.pathname.slice(-1)&&(c.pathname+=b),c.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(b){return new Response(b,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(a,b,c,d){var e=new URL(a);return d&&e.pathname.match(d)||(e.search+=(e.search?"&":"")+encodeURIComponent(b)+"="+encodeURIComponent(c)),e.toString()},isPathWhitelisted=function(a,b){if(0===a.length)return!0;var c=new URL(b).pathname;return a.some(function(a){return c.match(a)})},stripIgnoredUrlParameters=function(a,b){var c=new URL(a);return c.hash="",c.search=c.search.slice(1).split("&").map(function(a){return a.split("=")}).filter(function(a){return b.every(function(b){return!b.test(a[0])})}).map(function(a){return a.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(a){var b=a[0],c=a[1],d=new URL(b,self.location),e=createCacheKey(d,hashParamName,c,!1);return[d.toString(),e]}));self.addEventListener("install",function(a){a.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(b){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!b.has(c)){var d=new Request(c,{credentials:"same-origin"});return fetch(d).then(function(b){if(!b.ok)throw new Error("Request for "+c+" returned a response with status "+b.status);return cleanResponse(b).then(function(b){return a.put(c,b)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(a){var b=new Set(urlsToCacheKeys.values());a.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(c){return Promise.all(c.map(function(c){if(!b.has(c.url))return a.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var b,c=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching);b=urlsToCacheKeys.has(c);b||(c=addDirectoryIndex(c,"index.html"),b=urlsToCacheKeys.has(c));b&&a.respondWith(caches.open(cacheName).then(function(a){return a.match(urlsToCacheKeys.get(c)).then(function(a){if(a)return a;throw Error("The cached response that was expected is missing.")})}).catch(function(b){return fetch(a.request)}))}});