System.config({
  "baseURL": "./",
  "defaultJSExtensions": true,
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  }
});

System.config({
  "map": {
    "babel": "npm:babel-core@5.6.20",
    "babel-runtime": "npm:babel-runtime@5.6.20",
    "backbone": "npm:backbone@1.2.1",
    "backbone.marionette": "npm:backbone.marionette@2.4.2",
    "core-js": "npm:core-js@0.9.18",
    "jquery": "github:components/jquery@2.1.4",
    "underscore": "npm:underscore@1.8.3",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:babel-runtime@5.6.20": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:backbone.babysitter@0.1.8": {
      "backbone": "npm:backbone@1.2.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "underscore": "npm:underscore@1.8.3"
    },
    "npm:backbone.marionette@2.4.2": {
      "backbone": "npm:backbone@1.2.1",
      "backbone.babysitter": "npm:backbone.babysitter@0.1.8",
      "backbone.wreqr": "npm:backbone.wreqr@1.3.3",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "underscore": "npm:underscore@1.8.3"
    },
    "npm:backbone.wreqr@1.3.3": {
      "backbone": "npm:backbone@1.2.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "underscore": "npm:underscore@1.8.3"
    },
    "npm:backbone@1.2.1": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "underscore": "npm:underscore@1.8.3"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    }
  }
});

