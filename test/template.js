module.exports = function (locals) {  var Hoge = "Hoge" in locals ? locals.Hoge : jade_globals_Hoge;
  var items = "items" in locals ? locals.items : jade_globals_items;
  return function() {
    var tags = [];
    tags.push(React.createElement("nav", {}, React.createElement("h1", {}, "Title")));
    tags.push(React.createElement("div", {
      className: "container"
    }, React.createElement(Hoge, {}), React.createElement("p", {}, "text"), React.createElement("ul", {}, function() {
      var tags = [];
      var $$obj = items;
      if ("number" == typeof $$obj.length) for (var $index = 0, $$l = $$obj.length; $$l > $index; $index++) {
        {
          $$obj[$index];
        }
        tags.push(React.createElement("li", {}, "i"));
      } else {
        var $$l = 0;
        for (var $index in $$obj) {
          $$l++;
          {
            $$obj[$index];
          }
          tags.push(React.createElement("li", {}, "i"));
        }
      }
      return tags;
    }.call(this))));
    if (1 === tags.length) return tags.pop();
    tags.unshift("div", null);
    return React.createElement.apply(React, tags);
  }.call(this);
}
