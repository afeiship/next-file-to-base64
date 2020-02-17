/*!
 * name: @feizheng/next-file-to-base64
 * description: File to base64 based on FileReader for next.
 * url: https://github.com/afeiship/next-file-to-base64
 * version: 1.0.0
 * date: 2020-02-17 18:42:34
 * license: MIT
 */

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

//# sourceMappingURL=next-file-to-base64.js.map
