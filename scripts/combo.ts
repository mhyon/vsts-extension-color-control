import Controls = require("VSS/Controls");
import Combos = require("VSS/Controls/Combos");
import TreeView = require("VSS/Controls/TreeView");

var combocon = $(".sample-container");

var treeOptions: Combos.IComboOptions = {
  type: TreeView.SearchComboTreeBehaviorName,
  width: "400px",
  sepChar: ">",
  source: [
    {
      text: "wit",
      children: [{ text: "platform", children: [{ text: "client" }, { text: "server" }] }, { text: "te" }]
    }, {
      text: "vc"
    }, {
      text: "webaccess", children: [{ text: "platform" }, { text: "agile" }, { text: "requirements" }]
    }, {
      text: "etm"
    }, {
      text: "build"
    }
  ],
  change: function () {
    commandArea.prepend($("<div />").text(this.getText()));
  }
};

$("<label />").text("Area Path:").appendTo(combocon);
Controls.create(Combos.Combo, combocon, treeOptions);
var commandArea = $("<div style='margin:10px' />").appendTo(combocon);