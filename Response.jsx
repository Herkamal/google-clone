export default {
  kind: "customsearch#search",
  url: {
    type: "application/json",
    template:
      "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json",
  },
  queries: {
    request: [
      {
        title: "Google Custom Search - hello world",
        totalResults: "2810000000",
        searchTerms: "hello world",
        count: 10,
        startIndex: 1,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "854f852f914db4447",
      },
    ],
    nextPage: [
      {
        title: "Google Custom Search - hello world",
        totalResults: "2810000000",
        searchTerms: "hello world",
        count: 10,
        startIndex: 11,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "854f852f914db4447",
      },
    ],
  },
  context: {
    title: "google",
  },
  searchInformation: {
    searchTime: 0.185585,
    formattedSearchTime: "0.19",
    totalResults: "2810000000",
    formattedTotalResults: "2,810,000,000",
  },
  items: [
    {
      kind: "customsearch#result",
      title: '"Hello, World!" program - Wikipedia',
      htmlTitle: "&quot;<b>Hello</b>, <b>World</b>!&quot; program - Wikipedia",
      link: "https://en.wikipedia.org/wiki/%22Hello,_World!%22_program",
      displayLink: "en.wikipedia.org",
      snippet:
        'A "Hello, World!" program is generally a computer program that ignores any input, and outputs or displays a message similar to "Hello, World!".',
      htmlSnippet:
        "A &quot;<b>Hello</b>, <b>World</b>!&quot; program is generally a computer program that ignores any input, and outputs or displays a message similar to &quot;<b>Hello</b>, <b>World</b>!&quot;.",
      cacheId: "UInCiDfJyeUJ",
      formattedUrl: "https://en.wikipedia.org/wiki/%22Hello,_World!%22_program",
      htmlFormattedUrl:
        "https://en.wikipedia.org/wiki/%22<b>Hello</b>,_<b>World</b>!%22_program",
      pagemap: {
        metatags: [
          {
            referrer: "origin",
            "og:image":
              "https://upload.wikimedia.org/wikipedia/commons/2/21/Hello_World_Brian_Kernighan_1978.jpg",
            "theme-color": "#eaecf0",
            "og:image:width": "1200",
            "og:type": "website",
            viewport:
              "width=device-width, initial-scale=1.0, user-scalable=yes, minimum-scale=0.25, maximum-scale=5.0",
            "og:title": '"Hello, World!" program - Wikipedia',
            "og:image:height": "1315",
            "format-detection": "telephone=no",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Hello World",
      htmlTitle: "<b>Hello World</b>",
      link: "https://helloworld.raspberrypi.org/",
      displayLink: "helloworld.raspberrypi.org",
      snippet:
        "Hello World issue 21. How are you preparing young children for a digital world? This is the question this primary-teaching themed issue explores, ...",
      htmlSnippet:
        "<b>Hello World</b> issue 21. How are you preparing young children for a digital world? This is the question this primary-teaching themed issue explores,&nbsp;...",
      cacheId: "POS2s4YXPC0J",
      formattedUrl: "https://helloworld.raspberrypi.org/",
      htmlFormattedUrl: "https://<b>helloworld</b>.raspberrypi.org/",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR4BFDgXHEC2R-hxCPES9qrINsDJrXQBCMSxnbLAHJ_8wGNsqwdc1K_9_w",
            width: "225",
            height: "225",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://helloworld.raspberrypi.org/assets/helloworld/meta_image-1e940b77afe31f357ca27e518a38bec065ed86531f12dec73292828707b0ad62.png",
            "twitter:card": "summary_large_image",
            "twitter:title": "Hello World",
            "og:type": "website",
            "og:site_name": "Hello World",
            "og:title": "Hello World",
            "csrf-param": "authenticity_token",
            "og:description": "For Computing and Digital Making Educators",
            "twitter:creator": "@HelloWorld_Edu",
            "twitter:image":
              "https://helloworld.raspberrypi.org/assets/helloworld/meta_image-1e940b77afe31f357ca27e518a38bec065ed86531f12dec73292828707b0ad62.png",
            "twitter:site": "@HelloWorld_Edu",
            viewport: "width=device-width, initial-scale=1",
            "csrf-token":
              "DP5wVZyZ6pYh/LD0ZGeeFu4nrtKXn1HTLPT/Lm3aHLcUHgEYvCUZ8KgWUXB36/ewT8cSXH7LZMG+e2W/vva5HA==",
            "og:locale": "en_GB",
            "og:url": "https://helloworld.raspberrypi.org/",
          },
        ],
        cse_image: [
          {
            src: "https://helloworld.raspberrypi.org/assets/helloworld/meta_image-1e940b77afe31f357ca27e518a38bec065ed86531f12dec73292828707b0ad62.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Hello World | Code.org",
      htmlTitle: "<b>Hello World</b> | Code.org",
      link: "https://code.org/helloworld",
      displayLink: "code.org",
      snippet:
        'In Computer Science 101, the first program many students create is a simple one that outputs an iconic line of text: "Hello World!" Say hello to the world ...',
      htmlSnippet:
        "In Computer Science 101, the first program many students create is a simple one that outputs an iconic line of text: &quot;<b>Hello World</b>!&quot; Say hello to the world&nbsp;...",
      cacheId: "TWg46TeXY_8J",
      formattedUrl: "https://code.org/helloworld",
      htmlFormattedUrl: "https://code.org/<b>helloworld</b>",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT3ISD0H1ReEh2CCEWMdDQAeOtVTzO42YiWocPWa5Jnqq6z8_BYniiBtEk",
            width: "310",
            height: "163",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://code.org/images/social-media/helloworld-og-image-1200x630.png",
            "og:type": "article",
            "twitter:title": "Hello World!",
            "og:image:width": "1200",
            "twitter:card": "summary_large_image",
            "og:site_name": "Code.org",
            "og:title": "Hello World!",
            "og:image:height": "630",
            "og:description":
              "Choose from fun themes to code interactive characters in a world you create in this Hour of Code activity!",
            "article:publisher": "https://www.facebook.com/Code.org",
            "twitter:image:src":
              "https://code.org/images/social-media/helloworld-og-image-1200x630.png",
            "fb:app_id": "500177453358606",
            viewport:
              "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no",
            "twitter:description":
              "Choose from fun themes to code interactive characters in a world you create in this Hour of Code activity",
            "og:url": "https://code.org/helloworld",
          },
        ],
        cse_image: [
          {
            src: "https://code.org/images/social-media/helloworld-og-image-1200x630.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Hello World - GitHub Docs",
      htmlTitle: "<b>Hello World</b> - GitHub Docs",
      link: "https://docs.github.com/en/get-started/quickstart/hello-world",
      displayLink: "docs.github.com",
      snippet:
        "This tutorial teaches you GitHub essentials like repositories, branches, commits, and pull requests. You'll create your own Hello World repository and learn ...",
      htmlSnippet:
        "This tutorial teaches you GitHub essentials like repositories, branches, commits, and pull requests. You&#39;ll create your own <b>Hello World</b> repository and learn&nbsp;...",
      cacheId: "AZp1k-eTP4sJ",
      formattedUrl:
        "https://docs.github.com/en/get-started/quickstart/hello-world",
      htmlFormattedUrl:
        "https://docs.github.com/en/get-started/quickstart/<b>hello</b>-<b>world</b>",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCwTsxFVHqKiYpNvIA-GSY8M1EYwBczxJKHBwY_QpZi-vlCiuZisBYQKI",
            width: "225",
            height: "225",
          },
        ],
        metatags: [
          {
            "page-document-type": "article",
            "og:image":
              "https://github.githubassets.com/images/modules/open_graph/github-logo.png",
            "og:type": "article",
            "og:site_name": "GitHub Docs",
            "og:title": "Hello World - GitHub Docs",
            "path-article": "get-started/quickstart/hello-world",
            "path-version": "free-pro-team@latest",
            "path-product": "get-started",
            "next-head-count": "30",
            "path-language": "en",
            viewport: "width=device-width, initial-scale=1",
            "page-type": "quick_start",
            "og:url":
              "https://ghdocs-prod.azurewebsites.net/en/get-started/quickstart/hello-world",
            status: "200",
          },
        ],
        cse_image: [
          {
            src: "https://github.githubassets.com/images/modules/open_graph/github-logo.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title:
        "Hello World Modern Mercantile: Online Gift Shop in Philadelphia ...",
      htmlTitle:
        "<b>Hello World</b> Modern Mercantile: Online Gift Shop in Philadelphia ...",
      link: "https://shophelloworld.com/",
      displayLink: "shophelloworld.com",
      snippet:
        "Hello World is one of the best online gift stores in Philadelphia. Our gift store features unique items like jewelry, handbags, totes, accessories, ...",
      htmlSnippet:
        "<b>Hello World</b> is one of the best online gift stores in Philadelphia. Our gift store features unique items like jewelry, handbags, totes, accessories,&nbsp;...",
      cacheId: "nXxyhCa9L0sJ",
      formattedUrl: "https://shophelloworld.com/",
      htmlFormattedUrl: "https://shop<b>helloworld</b>.com/",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT2OfB2FjgVn8VGEKTT-1DEdCyQFGfKOXe5J5RTUevJPZfYc4dcsFZ5DbM",
            width: "260",
            height: "130",
          },
        ],
        organization: [
          {
            name: "Hello World Modern Mercantile",
            logo: "https://cdn.shopify.com/s/files/1/0043/9642/files/receiptlogo03_260x.png?v=1614333378",
            url: "https://shophelloworld.com/",
          },
        ],
        metatags: [
          {
            "theme-color": "#12ce8c",
            "og:type": "website",
            "twitter:card": "summary_large_image",
            "twitter:title":
              "Online Gift Shop in Philadelphia |Unique Gift Store - Hello World",
            "og:site_name": "Hello World Modern Mercantile",
            viewport: "width=device-width,initial-scale=1.0",
            "twitter:description":
              "Hello World is one of the best online gift stores in Philadelphia. Our gift store features unique items like jewelry, handbags, totes, accessories, baby gifts, candles and much more.",
            "shopify-digital-wallet": "/439642/digital_wallets/dialog",
            "og:title":
              "Online Gift Shop in Philadelphia |Unique Gift Store - Hello World",
            "shopify-checkout-api-token": "5725ca2823da741bd6feea4776d60b94",
            "og:url": "https://shophelloworld.com/",
            "og:description":
              "Hello World is one of the best online gift stores in Philadelphia. Our gift store features unique items like jewelry, handbags, totes, accessories, baby gifts, candles and much more.",
          },
        ],
        cse_image: [
          {
            src: "https://cdn.shopify.com/s/files/1/0043/9642/files/receiptlogo03_260x.png?v=1614333378",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Hello World (2019) - IMDb",
      htmlTitle: "<b>Hello World</b> (2019) - IMDb",
      link: "https://www.imdb.com/title/tt9418812/",
      displayLink: "www.imdb.com",
      snippet:
        "Hello World: Directed by Tomohiko Itô. With Haruka Fukuhara, Minami Hamabe, Takumi Kitamura, Minako Kotobuki. A man travels in time from the year 2027 to ...",
      htmlSnippet:
        "<b>Hello World</b>: Directed by Tomohiko Itô. With Haruka Fukuhara, Minami Hamabe, Takumi Kitamura, Minako Kotobuki. A man travels in time from the year 2027 to&nbsp;...",
      cacheId: "kwSES1KYF0EJ",
      formattedUrl: "https://www.imdb.com/title/tt9418812/",
      htmlFormattedUrl: "https://www.imdb.com/title/tt9418812/",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkWx0QW1C_XYpOEV4NMKxgfOyHkCHvAKyqYie2DitO7_1-FI8fKU2z4iZe",
            width: "189",
            height: "267",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://m.media-amazon.com/images/M/MV5BOGIwYjZlOTctZTNhOC00OTdiLWI5ZWItOTdiMWRjMjUwMDlhXkEyXkFqcGdeQXVyNDQxNjcxNQ@@._V1_FMjpg_UX1000_.jpg",
            "og:type": "video.movie",
            "og:image:width": "1000",
            "twitter:title": "Hello World (2019) - IMDb",
            "twitter:card": "summary_large_image",
            "imdb:subpagetype": "main",
            "og:site_name": "IMDb",
            "og:title": "Hello World (2019) - IMDb",
            "imdb:pageconst": "tt9418812",
            "og:image:height": "1413.9150943396226",
            "og:description":
              "Hello World: Directed by Tomohiko Itô. With Haruka Fukuhara, Minami Hamabe, Takumi Kitamura, Minako Kotobuki. A man travels in time from the year 2027 to relive his school years and to correct a bad decision.",
            "twitter:image":
              "https://m.media-amazon.com/images/M/MV5BOGIwYjZlOTctZTNhOC00OTdiLWI5ZWItOTdiMWRjMjUwMDlhXkEyXkFqcGdeQXVyNDQxNjcxNQ@@._V1_FMjpg_UX1000_.jpg",
            "next-head-count": "41",
            "twitter:image:alt":
              "Hello World: Directed by Tomohiko Itô. With Haruka Fukuhara, Minami Hamabe, Takumi Kitamura, Minako Kotobuki. A man travels in time from the year 2027 to relive his school years and to correct a bad decision.",
            "twitter:site": "@IMDb",
            "og:locale:alternate": "es_ES",
            viewport: "width=device-width",
            "twitter:description":
              "Hello World: Directed by Tomohiko Itô. With Haruka Fukuhara, Minami Hamabe, Takumi Kitamura, Minako Kotobuki. A man travels in time from the year 2027 to relive his school years and to correct a bad decision.",
            "og:locale": "en_US",
            "og:url": "https://www.imdb.com/title/tt9418812/",
            "imdb:pagetype": "title",
          },
        ],
        cse_image: [
          {
            src: "https://m.media-amazon.com/images/M/MV5BOGIwYjZlOTctZTNhOC00OTdiLWI5ZWItOTdiMWRjMjUwMDlhXkEyXkFqcGdeQXVyNDQxNjcxNQ@@._V1_FMjpg_UX1000_.jpg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Hello World - MyAnimeList.net",
      htmlTitle: "<b>Hello World</b> - MyAnimeList.net",
      link: "https://myanimelist.net/anime/38816/Hello_World",
      displayLink: "myanimelist.net",
      snippet:
        "Within the city live two classmates: Naomi Katagaki, a socially awkward and introverted boy; and Ruri Ichigyou, a girl with a cold personality who is often ...",
      htmlSnippet:
        "Within the city live two classmates: Naomi Katagaki, a socially awkward and introverted boy; and Ruri Ichigyou, a girl with a cold personality who is often&nbsp;...",
      cacheId: "_orX8tERFz4J",
      formattedUrl: "https://myanimelist.net/anime/38816/Hello_World",
      htmlFormattedUrl:
        "https://myanimelist.net/anime/38816/<b>Hello</b>_<b>World</b>",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSCi8ywbsQGBthEUSqlpwSXHkqM-PwvKXy-_WDZvA11LOXG-Ev60WmJYPs",
            width: "307",
            height: "164",
          },
        ],
        product: [
          {
            image: "https://cdn.myanimelist.net/images/anime/1147/112650.jpg",
            name: "Hello World",
            genre: "Drama",
            description:
              "The year is 2027, and the city of Kyoto has undergone tremendous technological advancement. Within the city live two classmates: Naomi Katagaki, a socially awkward and introverted boy; and...",
          },
        ],
        aggregaterating: [
          {
            ratingvalue: "7.50",
            ratingcount: "104097",
            worstrating: "1",
            bestrating: "10",
          },
        ],
        metatags: [
          {
            "smartbanner:button-url-apple":
              "https://myanimelist.page.link/?utm_campaign=overlay&link=https%3A%2F%2Fmyanimelist.net%2Fmal_app&apn=net.myanimelist.app&ibi=net.myanimelist&isi=1469330778&st=Download%20MyAnimeList%20App&utm_source=mal&ct=overlay&mt=8&pt=120201688",
            "og:image":
              "https://cdn.myanimelist.net/img/sp/icon/twitter-card.png",
            "smartbanner:price": "GET",
            "twitter:card": "summary",
            "theme-color": "#2E51A2",
            "fo-verify": "1e927243-8e02-48e3-b098-a7b78c5b4e36",
            "smartbanner:api": "true",
            "og:site_name": "MyAnimeList.net",
            "smartbanner:price-suffix-google": "- On Google Play",
            csrf_token: "6df20adf9691dbf49d839c16c467b1b4853f4889",
            "smartbanner:hide-ttl": "2592000000",
            "og:description":
              "The year is 2027, and the city of Kyoto has undergone tremendous technological advancement. Within the city live two classmates: Naomi Katagaki, a socially awkward and introverted boy; and Ruri Ichigyou, a girl with a cold personality who is often blunt with people. Despite sharing Ruri's love of reading, Naomi is afraid to approach her due to her unfriendly nature. One day, while out on a walk, Naomi witnesses a crimson aurora pierce through the sky for a brief moment before vanishing. Shortly after, he encounters a three-legged crow and a mysterious hooded man, who reveals himself to be Naomi from 10 years in the future, explaining that he has come to change an imminent tragic event that happens to Ruri soon after they start dating. Initially taking his words with a grain of salt, present-day Naomi follows his future self's instructions and starts getting closer to Ruri, determined to save her. Will he be able to change the future? [Written by MAL Rewrite]",
            "smartbanner:author":
              "Track your anime: anytime, anywhere<br><span class='star-fill'>★★★★</span>★",
            "smartbanner:icon-apple":
              "https://cdn.myanimelist.net/images/MalAppIcon_180px.png",
            "twitter:site": "@myanimelist",
            "smartbanner:exclude-user-agent-regex": "mal-*-app",
            "smartbanner:disable-positioning": "true",
            "og:type": "video.movie",
            "smartbanner:button": "VIEW",
            "smartbanner:button-url-google":
              "https://myanimelist.page.link/?utm_campaign=overlay&link=https%3A%2F%2Fmyanimelist.net%2Fmal_app&apn=net.myanimelist.app&ibi=net.myanimelist&isi=1469330778&st=Download%20MyAnimeList%20App&utm_source=mal&ct=overlay&mt=8&pt=120201688",
            "smartbanner:price-suffix-apple": "- On the App Store",
            "og:title": "Hello World",
            "smartbanner:enabled-platforms": "android,ios",
            "smartbanner:title": "MyAnimeList",
            "smartbanner:hide-path": "/",
            "smartbanner:icon-google":
              "https://cdn.myanimelist.net/images/MalAppIcon_180px.png",
            "smartbanner:custom-design-modifier": "ios",
            "twitter:image:src":
              "https://cdn.myanimelist.net/r/360x360/img/sp/icon/twitter-card.png?s=67b1f24f7f23ca2e7fbba646cded3def",
            "smartbanner:close-label": "Close",
            referrer: "default",
            "fb:app_id": "360769957454434",
            viewport:
              "width=device-width,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no,initial-scale=1.0,minimal-ui",
            "og:locale": "en_US",
            recaptcha_site_key: "6Ld_1aIZAAAAAF6bNdR67ICKIaeXLKlbhE7t2Qz4",
            "og:url": "https://myanimelist.net/anime/38816/Hello_World",
            "format-detection": "telephone=no",
          },
        ],
        cse_image: [
          {
            src: "https://cdn.myanimelist.net/img/sp/icon/twitter-card.png",
          },
        ],
        hproduct: [
          {
            fn: "Hello World",
            description:
              "The year is 2027, and the city of Kyoto has undergone tremendous technological advancement. Within the city live two classmates: Naomi Katagaki, a socially awkward and introverted boy; and...",
            photo: "https://cdn.myanimelist.net/images/anime/1147/112650.jpg",
          },
        ],
        listitem: [
          {
            item: "Top",
            name: "Top",
            position: "1",
          },
          {
            item: "Anime",
            name: "Anime",
            position: "2",
          },
          {
            item: "Hello World",
            name: "Hello World",
            position: "3",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: 'Express "Hello World" example',
      htmlTitle: "Express &quot;<b>Hello World</b>&quot; example",
      link: "https://expressjs.com/en/starter/hello-world.html",
      displayLink: "expressjs.com",
      snippet:
        "Hello world example. Embedded below is essentially the simplest Express app you can create. It is a single file app — not what you'd get if you use the ...",
      htmlSnippet:
        "<b>Hello world</b> example. Embedded below is essentially the simplest Express app you can create. It is a single file app — not what you&#39;d get if you use the&nbsp;...",
      cacheId: "Ag5WPLoY5PIJ",
      formattedUrl: "https://expressjs.com/en/starter/hello-world.html",
      htmlFormattedUrl:
        "https://expressjs.com/en/starter/<b>hello</b>-<b>world</b>.html",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQkDB2aWrpzUyql-VCFAdpHstna-_dqmQ845_hD8YjdljTeTUdoXGUFEYMo",
            width: "374",
            height: "135",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://expressjs.com/images/express-facebook-share.png",
            viewport: "width=device-width, initial-scale=1",
          },
        ],
        cse_image: [
          {
            src: "https://expressjs.com/images/express-facebook-share.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "hello-world - Official Image | Docker Hub",
      htmlTitle: "<b>hello</b>-<b>world</b> - Official Image | Docker Hub",
      link: "https://hub.docker.com/_/hello-world",
      displayLink: "hub.docker.com",
      snippet:
        "hello-world. Docker Official Image. •. 1B+. •. 2.0K. Hello World! (an example of minimal Dockerization). docker pull hello-world.",
      htmlSnippet:
        "<b>hello</b>-<b>world</b>. Docker Official Image. •. 1B+. •. 2.0K. <b>Hello World</b>! (an example of minimal Dockerization). docker pull <b>hello</b>-<b>world</b>.",
      cacheId: "tEhWFJYWINkJ",
      formattedUrl: "https://hub.docker.com/_/hello-world",
      htmlFormattedUrl: "https://hub.docker.com/_/<b>hello</b>-<b>world</b>",
      pagemap: {
        metatags: [
          {
            viewport:
              "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Hello World – Your partner in technology",
      htmlTitle: "<b>Hello World</b> – Your partner in technology",
      link: "https://helloworlddevs.com/",
      displayLink: "helloworlddevs.com",
      snippet:
        "Hello World isn't just a phenomenal agency with deep technical expertise. They also understand organizations and people—how our website fits into the larger ...",
      htmlSnippet:
        "<b>Hello World</b> isn&#39;t just a phenomenal agency with deep technical expertise. They also understand organizations and people—how our website fits into the larger&nbsp;...",
      cacheId: "A3bJ6Wne_XIJ",
      formattedUrl: "https://helloworlddevs.com/",
      htmlFormattedUrl: "https://<b>helloworld</b>devs.com/",
      pagemap: {
        metatags: [
          {
            viewport: "width=device-width, initial-scale=1.0",
            "msapplication-tileimage":
              "https://helloworlddevs.com/wp-content/uploads/2022/10/logo-right.png",
          },
        ],
      },
    },
  ],
};
