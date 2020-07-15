/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","df1ed14ae023a293ed676b4c33b67ef3"],["/Creator-said/index.html","04425e68b7bd236e5eb3ec92b94717f4"],["/about/index.html","ccf5cc90eccb3b0b36ffd02e5b0a7be3"],["/archives/2020/04/index.html","e2b266602da2e0cdbe8a92dee00e1a4c"],["/archives/2020/05/index.html","5dc1c3ea7f40361a828215bff349bdec"],["/archives/2020/06/index.html","318998d847e54dd41defa0d7262aea74"],["/archives/2020/07/index.html","382025dd0d17d76dc20532001bcac417"],["/archives/2020/index.html","e784b2cd24f40c33edfcb33a7c2da07a"],["/archives/2020/page/2/index.html","fe15cd13ccaa18fb014cf8454a2c34d8"],["/archives/2020/page/3/index.html","7071fe1b113bba57e8d33402a4941093"],["/archives/index.html","4922e311d5684996d3e79bf449ad6338"],["/archives/page/2/index.html","4922e311d5684996d3e79bf449ad6338"],["/archives/page/3/index.html","4922e311d5684996d3e79bf449ad6338"],["/books/index.html","637ab89090b948ad5932fc3637e5d007"],["/books/zjdl/20-1/index.html","66aad699fef48b62b2d636ad23ca15a0"],["/books/zjdl/index.html","ec7b37a34aa09152d681451fe737be09"],["/categories/C-C/C/index.html","cf24d58cfaf414def86def8db3f963a8"],["/categories/C-C/CString/index.html","10d1b57eec474de0234a766c34a63385"],["/categories/C-C/MFC/ClistCtrl/index.html","04a670493099a5704f6a4edffb6d381d"],["/categories/C-C/MFC/index.html","c77099e95b16fa3120229730c3d64406"],["/categories/C-C/index.html","eba7af5794b11310bcd89ef57da60bb7"],["/categories/Git/index.html","30c83f84949064f5065a7cb2baa00df1"],["/categories/Hexo/index.html","aa54970c209abc4ea9207d66fcb592c7"],["/categories/Visual-Studio/index.html","f81beb37fac1a3c68cd9515cf47cee6c"],["/categories/index.html","8e91a0cb19caa21b9247d88ef983225d"],["/categories/杂文/index.html","70a05413ab45da991ac36a1ac7f87796"],["/css/style.css","2c8cf5a3d3a838ee2d9372ea5f3d6dc4"],["/donation/index.html","5c3e3e57264cb35f6789696ace4107ac"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","3c42099347a97685724e9beb0bd3f5c8"],["/go.html","54edbe4525f8ab0fd7b66e1e9a2bb69a"],["/history/index.html","24cc958a84eec0e977b05be447e6dddc"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","a0ac0ca38c22752e604faf06416a05db"],["/js/app.js","4bda9732dace5f29688d6002791829cb"],["/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/love/index.html","22df4c67ccb14f8327f8e251087085bd"],["/messages/index.html","b17daecd2b857109dc95a2943142217c"],["/page/2/index.html","d4795fbe6f223733853497545dbf459d"],["/page/3/index.html","eb0549c55607888c3e8f4c6d9e585de4"],["/photo/201702/images/index.html","9c4a663d6d631390b8d8c3b1600a6dfd"],["/photo/201702/images/v2/index.html","278bc4dd845a659fc4dd0401e3e22556"],["/photo/201702/images/v3/index.html","1fcffe65bbd9b2e54e0bfad94c212d9c"],["/photo/201702/index.html","390e57a4a86b59fe03f1c8e336c91f74"],["/photo/201702/video/index.html","da86feac6b8e950c3757fcc2e4c5e65a"],["/photo/index.html","540cb9fa82fcd7bbe9508ac7ac4486d5"],["/photo/pixiv/index.html","bad4bbca7543921628b3afa765d6610c"],["/photo/pixiv/v2/index.html","9b9f5b0e64f1ad30c958b5fd611e78ee"],["/photo/wallpaper/index.html","aa871cde9d173773421fa3821e7977cf"],["/photo/wallpaper/v2/index.html","a7e28390f8c95d502ff57c2f36a5ab83"],["/photo/wallpaper/v3/index.html","a2fc5c8fdd2db640636ea6a2ba2b0234"],["/posts/1c6207a/index.html","b6b7075d7187638ba5b1b4f2ec62f49b"],["/posts/1f0729d0/index.html","9ce2c97170e8c9ff2af89bfd6a991fe7"],["/posts/267dfe7a/index.html","cdb7355fe317c58c5ac5b63d3ba3c539"],["/posts/32c8ba21/index.html","1be60c34fedce861c3c3071ccfb62037"],["/posts/454fe87a/index.html","3eae436a43c3be006c5e26597b0a45d2"],["/posts/467014d7/index.html","9f9b3738512f2abda813af6eb5322e22"],["/posts/5b2f25a9/index.html","679866f31d751f35e868b1eae8a1ff42"],["/posts/5f073d29/index.html","2c024548d225a9e103022ef43e1e332c"],["/posts/5fe8cd16/index.html","95ebedb9d4ec6b989892062b698bbde9"],["/posts/65082d4c/index.html","bf38d169bb2792ee524c20a7b42b337a"],["/posts/85033c71/index.html","e0253a64eeddfe73d00282c20ec9b02e"],["/posts/986192a4/index.html","d5431f6e7ca6f8b0ad0aff78194d0f0b"],["/posts/a5b8d333/index.html","373ebd8f60a84bbe39e3d32308510e74"],["/posts/caff8000/index.html","023f040ad67fca5d170acf585ca19f94"],["/posts/d2f6d1d9/index.html","06258ff1b72e0de19468acc7b6edfc58"],["/posts/d4fe038d/index.html","caa0c8523dc2c43ed157dd73148f3233"],["/posts/da1d5c8b/index.html","fb61cedce7eb695f6f6519bdbe4e7b23"],["/say-go/index.html","f2560e7238e8178bbfd0d4af4ceb1c52"],["/sw-register.js","9d302c4a2d0950cfd0b5594a693afc69"],["/tags/C-C/index.html","4a9d42274c268b46c73a9304f3cdac31"],["/tags/CString/index.html","6fe21f10d185271c70bd8b1372e0102f"],["/tags/ClistCtrl/index.html","4b79a8d0961ca7e7fb3e70a1445ad9e7"],["/tags/Cloud-Studio/index.html","8c038b64a849fb2923c482ed064a59b1"],["/tags/Coding/index.html","01d468e3ff2224294e1f24bca6e78936"],["/tags/Git常用命令/index.html","dee969e56ef98feb6201f4e629e0b963"],["/tags/Hexo/index.html","aae88361c43ef670aea2f550e71e1a34"],["/tags/LeanCloud/index.html","328c35ab956116e669bd9083f1f5e945"],["/tags/MFC/index.html","f2e956a5feb21a267624f31e98a12921"],["/tags/Visual-Studio/index.html","f0dcf29cd0b736389f6c4b6e37dadfee"],["/tags/index.html","ceb65cce40721055f556233071ff3856"],["/tags/杂文/index.html","706a0f86037501bd43de8a547371157a"],["/tags/自述/index.html","14cafa586baaab7582baa65f89694b6e"],["/wiki/index.html","08e15d29c2a1320f5f6bac4e3f9aa3a5"],["/wiki/papro/index.html","1e85b067e069d36f370a18650ed158c0"],["/wiki/papro/issues/index.html","6bcf5e8679b29228011b41b51a7b7743"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
