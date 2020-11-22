/*!
 * name: @jswork/next-file-to-base64
 * description: File to base64 based on FileReader for next.
 * homepage: https://github.com/afeiship/next-file-to-base64
 * version: 1.0.0
 * date: 2020-11-22 16:52:45
 * license: MIT
 */

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
