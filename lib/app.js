import Marionette from 'backbone.marionette';
import {unescape, template} from 'underscore';

var View = Marionette.ItemView.extend({
	template: template("<h1><%=title%></h1>"),
	templateHelpers() {
		return {
			title: unescape('Curly, Larry &amp; Moe')
		}
	}
})

var Application = Marionette.Application.extend({
    initialize() {
		this.addRegions({
			"main": "body"
		})
	},
    onStart() {
        this.main.show(new View());
    }
});

var app = new Application();
app.start();