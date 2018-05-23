(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var NxQueue = nx.Queue || require('next-queue');
  var DONE = 'done';
  var ARRAY = [];

  nx.fileToBase64 = function (inFile) {
    const reader = new FileReader();
    reader.readAsDataURL(inFile);
    return new Promise(function (resolve) {
      reader.onload = function (inEvent) {
        resolve(inEvent.target.result);
      };
    });
  };


  nx.filesToBase64 = function (inFiles) {
    var list = nx.map(inFiles, function (_, file) {
      return function (next) {
        nx.fileToBase64(file).then(function (inBase64) {
          next(inBase64);
        });
      };
    });

    if (list.length > 0) {
      var queue = new NxQueue(list);
      return new Promise(function (resolve) {
        queue.start().then(function (response) {
          var status = response.status;
          var data = response.data;
          if (status === DONE) {
            resolve(data);
          }
        });
      });
    }
    return {
      then: function(resolve){
        resolve(ARRAY);
      }
    };
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      fileToBase64: nx.fileToBase64,
      filesToBase64: nx.filesToBase64
    };
  }

}());
