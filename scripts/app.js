$(function () {
  var PlacesView = Backbone.View.extend({
    el: $("#world-app"),

    showHim: true,
    showHer: true,
    showUs: true,
    showAll: true,

    me: ["GB", "FR", "IN", "DE", "AE", "US", "BE", "IT", "SI", "ES", "GR", "EG", "CY"],
    her: ["GB", "FR", "IE", "US", "BE", "IT", "SI", "ES", "GR", "EG", "AE"],
    us: ["GB", "FR", "US", "BE", "IT", "SI", "ES", "GR", "EG"],
    all: ["GB", "FR", "ES", "AE", "US"],

    R: Raphael("the-map", 1000, 700),

    meLook: {
      fill: "#337ab7",
      stroke: "#fff",
      "stroke-opacity": "1",
      "stroke-linejoin": "round",
      "stroke-width": "0.75",
      "stroke-dasharray": "none",
    },

    herLook: {
      fill: "#a94442",
      stroke: "#fff",
      "stroke-opacity": "1",
      "stroke-linejoin": "round",
      "stroke-miterlimit": "4",
      "stroke-width": "0.75",
      "stroke-dasharray": "none",
    },

    usLook: {
      fill: "#6f5499",
      stroke: "#fff",
      "stroke-opacity": "1",
      "stroke-linejoin": "round",
      "stroke-miterlimit": "4",
      "stroke-width": "0.75",
      "stroke-dasharray": "none",
    },

    allLook: {
      fill: "#5cb85c",
      stroke: "#fff",
      "stroke-opacity": "1",
      "stroke-linejoin": "round",
      "stroke-miterlimit": "4",
      "stroke-width": "0.75",
      "stroke-dasharray": "none",
    },

    none: {
      fill: "grey",
      stroke: "#fff",
      "stroke-opacity": "1",
      "stroke-linejoin": "round",
      "stroke-miterlimit": "4",
      "stroke-width": "0.75",
      "stroke-dasharray": "none",
    },

    events: {
      "click .legend": "toggle",
    },

    initialize: function () {
      this.render();
    },

    render: function () {
      for (var country in world) {
        if (this.all.indexOf(country) >= 0 && this.showAll === true) {
          this.R.path(world[country]).attr(this.allLook);
        } else if (this.us.indexOf(country) >= 0 && this.showUs === true) {
          this.R.path(world[country]).attr(this.usLook);
        } else if (this.her.indexOf(country) >= 0 && this.showHer === true) {
          this.R.path(world[country]).attr(this.herLook);
        } else if (this.me.indexOf(country) >= 0 && this.showHim === true) {
          this.R.path(world[country]).attr(this.meLook);
        } else {
          this.R.path(world[country]).attr(this.none);
        }
      }
    },

    toggle: function (event) {
      let persona = $(event.currentTarget).data("who");

      if (["Him", "Her", "Us", "All"].indexOf(persona) === -1) {
        return;
      }

      if (this["show" + persona] === true) {
        this["show" + persona] = false;
      } else {
        this["show" + persona] = true;
      }

      $(event.currentTarget).toggleClass("on");

      this.render();
    },
  });

  var App = new PlacesView();
});
