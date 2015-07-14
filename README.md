Shimming Marionette
===================

As the app stands, Marionette needs no shimming using version 2.4.2.

But if you change the version of marionette in `package.json` to 2.4.1, then:

	jspm install
	
And change the jspm config file being used, in `index.html`, to `config.shim.js`, the app will no longer run.

	