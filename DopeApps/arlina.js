!function () {
    function f() {
        // Create the popup content 
        var a = document.createElement("div");
        a.id = "arlinablock";
        a.innerHTML = '<div class="inner"><div class="header"><h2>Ad Blocker Detected</h2></div><div class="isi"><div class="content"><div class="fixblock"><p>Please support us by disabling your ad blocker</p><div class="1 active"><ol><li>Click on the AdBlock icon in your browser<br><img src="data:image/png;base64..."></li></ol></div></div></div></div>';
        
        // Prevent scrolling on both body and html when AdBlock is detected
        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";
        document.body.style.position = "fixed"; // This helps prevent mobile bounce effects
        document.documentElement.style.position = "fixed";
        
        // Add the popup to the page
        document.body.append(a);

        // Handle button clicks for different adblocker instructions
        var b = a.querySelectorAll("button");
        var d = a.querySelectorAll(".fixblock > div");
        for (a = 0; a < b.length; a++) {
            b[a].addEventListener("click", function(a) {
                a.preventDefault();
                var btnClass = this.getAttribute("class").split(" ")[0];
                for (var c = 0; c < d.length; c++) {
                    d[c].classList.remove("active");
                    b[c].classList.remove("active"); 
                }
                b[btnClass - 1].classList.add("active");
                d[btnClass - 1].classList.add("active");
            });
        }
    }

    // Create and inject the ad script
    var b = document.createElement("script");
    b.type = "text/javascript";
    b.async = true;
    b.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    
    // If the ad script fails to load (blocked), trigger the anti-adblock measures
    b.onerror = function () {
        f();
        window.adblock = true;
    };
    
    // Insert the ad script into the page
    var e = document.getElementsByTagName("script")[0];
    e.parentNode.insertBefore(b, e);
}();
