window.app = {}
app.models = {}
app.collections = {}
app.views = {}
app.routers = {}

class TopView extends Backbone.View
  initialize: ->
    @templ = _.template($('#top-view').html())

  el: $('#top')

  render: =>
    @el.html @templ

class ContentView extends Backbone.View
  initialize: ->
    @templ = _.template($('#content-view').html())

  el: $('#content')

  render: =>
    @el.html @templ


class SideView extends Backbone.View
  initialize: ->
    @templ = _.template($('#side-view').html())

  el: $('#sidebar')

  render: =>
    @el.html @templ

class Main extends Backbone.Router
  routes:
    "":"home"

  home: ->
    app.views.top.render()
    app.views.content.render()
    app.views.sidebar.render()

$(document).ready ->
  app.views.sidebar = new SideView()
  app.views.top = new TopView()
  app.views.content = new ContentView()
  app.routers.main = new Main()

  Backbone.history.start()


