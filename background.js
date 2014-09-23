chrome.webRequest.onBeforeSendHeaders.addListener(
    function(info) {
        // Replace the User-Agent header
        var headers = info.requestHeaders;

        headers.forEach(function(header, i) {
            if (header.name.toLowerCase() == 'user-agent') {
                header.value = 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2114.2 Safari/537.36';
            }
        });

        return {requestHeaders: headers};
    },
    // Request filter
    {
        // Modify the headers for these pages
        urls: [
            //"http://stackoverflow.com/*",
            //"http://127.0.0.1:6789/*"
            //"http://*/*"
            //"http://www.whatsmyuseragent.com/",
            //"http://show-ip.net/browserinfo/"
            "*://*.netflix.com/*"
        ],
        // In the main window and frames
        types: ["main_frame", "sub_frame"]
    },
    ["blocking", "requestHeaders"]
);
