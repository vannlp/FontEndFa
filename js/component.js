function componentHeader(app) {
  app.component("headerComponent", {
    templateUrl: "./components/header.html",
    bindings: {
      hero: "=",
    },
  });
}

function componentNav(app) {
  app.component("navComponent", {
    templateUrl: "./components/nav.html",
    bindings: {
      nav: "=",
    },
  });
}

function component(app) {
  componentHeader(app);
  componentNav(app);
}

export default component;
