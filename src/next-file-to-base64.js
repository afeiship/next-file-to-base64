(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.fileToBase64 = function (inFile) {
    const reader = new FileReader();
    reader.readAsDataURL(inFile);
    reader.onload = function(inEvent) {
      return new Promise(function(resolve){
        resolve(inEvent.target.result);
      });
    };
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.fileToBase64;
  }

}());
