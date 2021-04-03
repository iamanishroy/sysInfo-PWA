if (!self.define) {
  const e = (e) => {
      "require" !== e && (e += ".js");
      let s = Promise.resolve();
      return (
        r[e] ||
          (s = new Promise(async (s) => {
            if ("document" in self) {
              const r = document.createElement("script");
              (r.src = e), document.head.appendChild(r), (r.onload = s);
            } else importScripts(e), s();
          })),
        s.then(() => {
          if (!r[e]) throw new Error(`Module ${e} didn’t register its module`);
          return r[e];
        })
      );
    },
    s = (s, r) => {
      Promise.all(s.map(e)).then((e) => r(1 === e.length ? e[0] : e));
    },
    r = { require: Promise.resolve(s) };
  self.define = (s, i, c) => {
    r[s] ||
      (r[s] = Promise.resolve().then(() => {
        let r = {};
        const t = { uri: location.origin + s.slice(1) };
        return Promise.all(
          i.map((s) => {
            switch (s) {
              case "exports":
                return r;
              case "module":
                return t;
              default:
                return e(s);
            }
          })
        ).then((e) => {
          const s = c(...e);
          return r.default || (r.default = s), r;
        });
      }));
  };
}
define("./serviceWorker.js", ["./workbox-f8171896"], function (e) {
  "use strict";
  self.addEventListener("message", (e) => {
    e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
  }),
    e.precacheAndRoute(
      [
        { url: "diagnose.html", revision: "41a14c2aa7beb9e5345b1987f0812b35" },
        { url: "index.html", revision: "4c7b2618e3e4bf7c8739e4fbd7277d37" },
        { url: "manifest.json", revision: "89d395edcedd100b314097edc38125d7" },
        {
          url: "script/chart.min.js",
          revision: "cc0dd28a602549e7df6bc87557c6731b",
        },
        {
          url: "script/clock.js",
          revision: "5ee64ee3920f93291fb58eaff15fe2b6",
        },
        {
          url: "script/script.js",
          revision: "3826b8872e689ef68d7b31aafb0bef36",
        },
        { url: "state.html", revision: "df46bde322459cb4bbcf8c4194b4541d" },
        {
          url: "styles/header.css",
          revision: "780336e3032edad6221a4a4e2f740941",
        },
        {
          url: "styles/main.css",
          revision: "d21e1c0087efba87a3642e937e9c2dab",
        },
        {
          url: "styles/systemInfo/cpu.css",
          revision: "a9e34550f877bd7dcf727e506a8486ea",
        },
        {
          url: "styles/systemInfo/memory.css",
          revision: "d221860dc15f41ca3db5e964d300eabd",
        },
        {
          url: "styles/systemInfo/memoryAndStorage.css",
          revision: "20dd57fe5e4d07f8d7b09a1a67ac3c51",
        },
        {
          url: "styles/systemInfo/storage.css",
          revision: "a232eb1d94c41972860dd3b39bb4213d",
        },
        {
          url: "styles/systemInfo/systemInfo.css",
          revision: "5acfbfb3ebff6975f0ca50dcf3bed87c",
        },
      ],
      {}
    ),
    e.registerRoute(
      /\.(?:png|jpg|jpeg|svg)$/,
      new e.CacheFirst({
        cacheName: "images",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 10, purgeOnQuotaError: !0 }),
        ],
      }),
      "GET"
    );
});
//# sourceMappingURL=serviceWorker.js.map

