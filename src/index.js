(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var fileToProcess = function (file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    return new Promise(function (resolve, reject) {
      reader.onload = function (inEvent) {
        resolve(inEvent.target.result);
      };
      reader.onerror = function (inError) {
        reject(inError);
      };
    });
  };

  nx.fileToBase64 = function (inTarget) {
    var files = 'length' in inTarget ? nx.slice(inTarget) : [inTarget];
    return Promise.all(files.map(fileToProcess));
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.fileToBase64;
  }
})();
