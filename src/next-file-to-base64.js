(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.fileToBase64 = function(inFile) {
    var reader = new FileReader();
    reader.readAsDataURL(inFile);
    return new Promise(function(resolve, reject) {
      reader.onload = function(inEvent) {
        resolve(inEvent.target.result);
      };
      reader.onerror = function(inError) {
        reject(inError);
      };
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.fileToBase64;
  }
})();
