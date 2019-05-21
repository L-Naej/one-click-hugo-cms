
exports.handler = function(event, context, callback) {
  const PastebinAPI = require("pastebin-js");

  const pastebin = new PastebinAPI("729a38d1aae832c6b0397813a2ebf0bc");
  pastebin.createPaste("Lalalalololol", "Test de past private", "json", 2, "N")
    .then(function(data) {
      callback(null, {
        statusCode: 200,
        body: data
      });
    });
}