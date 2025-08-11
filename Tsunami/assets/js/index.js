function initializeApp() {
const isInWebView = navigator.userAgent.includes('wv');
if (!isInWebView) {
    window.location = "https://cutt.ly/srF06bOM";
    document.body.style.display = 'none';
}
else {
    document.getElementById("framework").style.display = 'block';
}
}

function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}

function scrollBottom() {
    window.scrollTo(99999, 99999);
}
if (document.addEventListener) document.addEventListener("DOMContentLoaded", scrollBottom, false)
else if (window.attachEvent) window.attachEvent("onload", scrollBottom);
var loader = document.getElementById('loader');
window.addEventListener("load", function() {
    setTimeout(function() {
        loader.style.display = 'none';
    }, 0);
});

function downloadJSAtOnload() {
    var e = document.createElement("script");
    e.src = "https://cdn.jsdelivr.net/gh/Arlina-Design/quasar@master/arlinablock.js", document.body.appendChild(e)}
window.addEventListener ? window.addEventListener("load", downloadJSAtOnload, !1) : window.attachEvent ? window.attachEvent("onload", downloadJSAtOnload) : window.onload = downloadJSAtOnload;

window['__wavt'] = 'AOuZoY47VO9Uam26XibQb5GnmKa0CwaFjg:1682224959445';
_WidgetManager._Init('//www.blogger.com/rearrange?blogID\x3d8405036071399704402', '//tsunami-bomber.blogspot.com/', '8405036071399704402');
_WidgetManager._SetDataContext([{
    'name': 'blog',
    'data': {
        'blogId': '8405036071399704402',
        'title': 'Tsunami',
        'url': 'https://tsunami-bomber.blogspot.com/',
        'canonicalUrl': 'https://tsunami-bomber.blogspot.com/',
        'homepageUrl': 'https://tsunami-bomber.blogspot.com/',
        'searchUrl': 'https://tsunami-bomber.blogspot.com/search',
        'canonicalHomepageUrl': 'https://tsunami-bomber.blogspot.com/',
        'blogspotFaviconUrl': 'https://tsunami-bomber.blogspot.com/favicon.ico',
        'bloggerUrl': 'https://www.blogger.com',
        'hasCustomDomain': false,
        'httpsEnabled': true,
        'enabledCommentProfileImages': true,
        'gPlusViewType': 'FILTERED_POSTMOD',
        'adultContent': false,
        'analyticsAccountNumber': '',
        'encoding': 'UTF-8',
        'locale': 'en',
        'localeUnderscoreDelimited': 'en',
        'languageDirection': 'ltr',
        'isPrivate': true,
        'isMobile': false,
        'isMobileRequest': true,
        'mobileClass': '',
        'isPrivateBlog': false,
        'isDynamicViewsAvailable': true,
        'feedLinks': '\x3clink rel\x3d\x22alternate\x22 type\x3d\x22application/atom+xml\x22 title\x3d\x22Tsunami - Atom\x22 href\x3d\x22https://tsunami-bomber.blogspot.com/feeds/posts/default\x22 /\x3e\n\x3clink rel\x3d\x22alternate\x22 type\x3d\x22application/rss+xml\x22 title\x3d\x22Tsunami - RSS\x22 href\x3d\x22https://tsunami-bomber.blogspot.com/feeds/posts/default?alt\x3drss\x22 /\x3e\n\x3clink rel\x3d\x22service.post\x22 type\x3d\x22application/atom+xml\x22 title\x3d\x22Tsunami - Atom\x22 href\x3d\x22https://www.blogger.com/feeds/8405036071399704402/posts/default\x22 /\x3e\n',
        'meTag': '',
        'adsenseClientId': 'ca-pub-5705447777471986',
        'adsenseHostId': 'ca-host-pub-1556223355139109',
        'adsenseHasAds': true,
        'adsenseAutoAds': true,
        'boqCommentIframeForm': true,
        'loginRedirectParam': '',
        'view': '',
        'dynamicViewsCommentsSrc': '//www.blogblog.com/dynamicviews/4224c15c4e7c9321/js/comments.js',
        'dynamicViewsScriptSrc': '//www.blogblog.com/dynamicviews/3e558ec43739abac',
        'plusOneApiSrc': 'https://apis.google.com/js/platform.js',
        'disableGComments': true,
        'sharing': {
            'platforms': [{
                'name': 'Get link',
                'key': 'link',
                'shareMessage': 'Get link',
                'target': ''
            }, {
                'name': 'Facebook',
                'key': 'facebook',
                'shareMessage': 'Share to Facebook',
                'target': 'facebook'
            }, {
                'name': 'BlogThis!',
                'key': 'blogThis',
                'shareMessage': 'BlogThis!',
                'target': 'blog'
            }, {
                'name': 'Twitter',
                'key': 'twitter',
                'shareMessage': 'Share to Twitter',
                'target': 'twitter'
            }, {
                'name': 'Pinterest',
                'key': 'pinterest',
                'shareMessage': 'Share to Pinterest',
                'target': 'pinterest'
            }, {
                'name': 'Email',
                'key': 'email',
                'shareMessage': 'Email',
                'target': 'email'
            }],
            'disableGooglePlus': true,
            'googlePlusShareButtonWidth': 0,
            'googlePlusBootstrap': '\x3cscript type\x3d\x22text/javascript\x22\x3ewindow.___gcfg \x3d {\x27lang\x27: \x27en\x27};\x3c/script\x3e'
        },
        'hasCustomJumpLinkMessage': true,
        'jumpLinkMessage': '\u200e',
        'pageType': 'index',
        'pageName': '',
        'pageTitle': 'Tsunami',
        'metaDescription': 'Tsunami SMS, Call and Email service'
    }
}, {
    'name': 'features',
    'data': {}
}, {
    'name': 'messages',
    'data': {
        'edit': 'Edit',
        'linkCopiedToClipboard': 'Link copied to clipboard!',
        'ok': 'Ok',
        'postLink': 'Post Link'
    }
}, {
    'name': 'template',
    'data': {
        'name': 'custom',
        'localizedName': 'Custom',
        'isResponsive': false,
        'isAlternateRendering': false,
        'isCustom': true
    }
}, {
    'name': 'view',
    'data': {
        'classic': {
            'name': 'classic',
            'url': '?view\x3dclassic'
        },
        'flipcard': {
            'name': 'flipcard',
            'url': '?view\x3dflipcard'
        },
        'magazine': {
            'name': 'magazine',
            'url': '?view\x3dmagazine'
        },
        'mosaic': {
            'name': 'mosaic',
            'url': '?view\x3dmosaic'
        },
        'sidebar': {
            'name': 'sidebar',
            'url': '?view\x3dsidebar'
        },
        'snapshot': {
            'name': 'snapshot',
            'url': '?view\x3dsnapshot'
        },
        'timeslide': {
            'name': 'timeslide',
            'url': '?view\x3dtimeslide'
        },
        'isMobile': false,
        'title': 'Tsunami',
        'description': 'Tsunami SMS, Call and Email service',
        'url': 'https://tsunami-bomber.blogspot.com/',
        'type': 'feed',
        'isSingleItem': false,
        'isMultipleItems': true,
        'isError': false,
        'isPage': false,
        'isPost': false,
        'isHomepage': true,
        'isArchive': false,
        'isLabelSearch': false
    }
}]);