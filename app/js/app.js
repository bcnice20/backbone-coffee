(function() {
  var ContentView, Main, SideView, TopView,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  window.app = {};

  app.models = {};

  app.collections = {};

  app.views = {};

  app.routers = {};

  TopView = (function(_super) {

    __extends(TopView, _super);

    function TopView() {
      this.render = __bind(this.render, this);
      TopView.__super__.constructor.apply(this, arguments);
    }

    TopView.prototype.initialize = function() {
      return this.templ = _.template($('#top-view').html());
    };

    TopView.prototype.el = $('#top');

    TopView.prototype.render = function() {
      return this.el.html(this.templ);
    };

    return TopView;

  })(Backbone.View);

  ContentView = (function(_super) {

    __extends(ContentView, _super);

    function ContentView() {
      this.render = __bind(this.render, this);
      ContentView.__super__.constructor.apply(this, arguments);
    }

    ContentView.prototype.initialize = function() {
      return this.templ = _.template($('#content-view').html());
    };

    ContentView.prototype.el = $('#content');

    ContentView.prototype.render = function() {
      return this.el.html(this.templ);
    };

    return ContentView;

  })(Backbone.View);

  SideView = (function(_super) {

    __extends(SideView, _super);

    function SideView() {
      this.render = __bind(this.render, this);
      SideView.__super__.constructor.apply(this, arguments);
    }

    SideView.prototype.initialize = function() {
      return this.templ = _.template($('#side-view').html());
    };

    SideView.prototype.el = $('#sidebar');

    SideView.prototype.render = function() {
      return this.el.html(this.templ);
    };

    return SideView;

  })(Backbone.View);

  Main = (function(_super) {

    __extends(Main, _super);

    function Main() {
      Main.__super__.constructor.apply(this, arguments);
    }

    Main.prototype.routes = {
      "": "home"
    };

    Main.prototype.home = function() {
      app.views.top.render();
      app.views.content.render();
      return app.views.sidebar.render();
    };

    return Main;

  })(Backbone.Router);

  $(document).ready(function() {
    app.views.sidebar = new SideView();
    app.views.top = new TopView();
    app.views.content = new ContentView();
    app.routers.main = new Main();
    return Backbone.history.start();
  });

}).call(this);
