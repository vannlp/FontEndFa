

function router(app) {
  console.log(123);
  app.config(function ($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "./page/home.html",
        controller : "homeController"
      })
      .when("/about", {
        templateUrl: "./page/about.html",
        controller : "aboutController"
      })
      .when("/news", {
        templateUrl: "./page/news.html",
      }).when("/gioi-thieu", {
        templateUrl: "./page/gioi_thieu.html",
      });
  });
}

export default router;
