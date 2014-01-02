define(['text!./setup.html'], function (template) {

        var view = Backbone.View.extend({
                // Properties

                template: _.template(template),

                // Backbone
                initialize: function () {
                },

                // Bootstrap

                bootstrap: function () {
                        return this.render();
                },

                // Rendering

                render: function () {
                        this.$el.html(this.template());
                        return this;
                },

                // UI Events

                // Backbone Events

                // Methods
        });

        return view;

});