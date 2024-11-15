sap.ui.define(
  ["sap/ui/thirdparty/jquery", "sap/ui/core/library"],
  function (jquery, library) {
    "use strict";
    sap.ui.getCore().initLibrary({
      name: "student10.com.sap.training.ux402.controls",
      version: "1.0.0",
      dependencies: ["sap.ui.core"],
      types: [],
      interfaces: [],
      controls: [
        "student10.com.sap.training.ux402.controls.PlaneInfo",
        "student10.com.sap.training.ux402.controls.HoverButton",
        "student10.com.sap.training.ux402.controls.PlaneInfoRenderer",
      ],
      elements: [],
      noLibraryCSS: true,
    });
    return student10.com.sap.training.ux402.controls;
  },
  /*bExport*/ false
);
