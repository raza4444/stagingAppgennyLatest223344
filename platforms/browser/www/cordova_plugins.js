cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/heyzap-cordova/www/ads/HeyzapAds.js",
        "id": "heyzap-cordova.ads.HeyzapAds",
        "pluginId": "heyzap-cordova",
        "merges": [
            "HeyzapAds"
        ]
    },
    {
        "file": "plugins/heyzap-cordova/www/ads/InterstitialAd.js",
        "id": "heyzap-cordova.ads.InterstitialAd",
        "pluginId": "heyzap-cordova"
    },
    {
        "file": "plugins/heyzap-cordova/www/ads/VideoAd.js",
        "id": "heyzap-cordova.ads.VideoAd",
        "pluginId": "heyzap-cordova"
    },
    {
        "file": "plugins/heyzap-cordova/www/ads/IncentivizedAd.js",
        "id": "heyzap-cordova.ads.IncentivizedAd",
        "pluginId": "heyzap-cordova"
    },
    {
        "file": "plugins/heyzap-cordova/www/ads/BannerAd.js",
        "id": "heyzap-cordova.ads.BannerAd",
        "pluginId": "heyzap-cordova"
    },
    {
        "file": "plugins/heyzap-cordova/www/Common.js",
        "id": "heyzap-cordova.Common",
        "pluginId": "heyzap-cordova"
    },
    {
        "file": "plugins/heyzap-cordova/www/Promise.js",
        "id": "heyzap-cordova.Promise",
        "pluginId": "heyzap-cordova"
    },
    {
        "file": "plugins/heyzap-cordova/www/vendor/es6-promise.min.js",
        "id": "heyzap-cordova.vendor.PromisePolyfill",
        "pluginId": "heyzap-cordova"
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "heyzap-cordova": "1.5.1",
    "cordova-plugin-whitelist": "1.3.4"
}
// BOTTOM OF METADATA
});