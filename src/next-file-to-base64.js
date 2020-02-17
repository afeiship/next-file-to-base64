(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var fileToProcess = function(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    return new Promise(function(resolve, reject) {
      reader.onload = function(inEvent) {
        resolve(inEvent.target.result);
      };
      reader.onerror = function(inError) {
        reject(inError);
      };
    });
  };

  nx.fileToBase64 = function(inTarget) {
    var files = Array.isArray(inTarget) ? inTarget : [inTarget];
    return Promise.all(files.map(fileToProcess));
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.fileToBase64;
  }
})();
