"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("file-system");
var documents = fs.knownFolders.currentApp();
var AppServices = (function () {
    function AppServices() {
    }
    AppServices.readJSONWords = function () {
        var jsonFile = documents.getFile("./list/english-words.json");
        return new Promise(function (resolve, reject) {
            jsonFile.readText().then(function (content) {
                var data = JSON.parse(content);
                resolve(data);
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    return AppServices;
}());
exports.AppServices = AppServices;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwc2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHBzZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGdDQUFrQztBQUNsQyxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBRTdDO0lBQUE7SUFhQSxDQUFDO0lBWmlCLHlCQUFhLEdBQTNCO1FBQ0ksSUFBSSxRQUFRLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQzlELE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBUyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ3ZDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxPQUFlO2dCQUNyQyxJQUFJLElBQUksR0FBa0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDOUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsVUFBQyxHQUFHO2dCQUNQLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNoQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQyxBQWJELElBYUM7QUFiWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZzIGZyb20gXCJmaWxlLXN5c3RlbVwiO1xubGV0IGRvY3VtZW50cyA9IGZzLmtub3duRm9sZGVycy5jdXJyZW50QXBwKCk7XG5cbmV4cG9ydCBjbGFzcyBBcHBTZXJ2aWNlcyB7XG4gICAgcHVibGljIHN0YXRpYyByZWFkSlNPTldvcmRzKCk6IFByb21pc2U8T2JqZWN0PiB7XG4gICAgICAgIGxldCBqc29uRmlsZSA9IGRvY3VtZW50cy5nZXRGaWxlKFwiLi9saXN0L2VuZ2xpc2gtd29yZHMuanNvblwiKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPE9iamVjdD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAganNvbkZpbGUucmVhZFRleHQoKS50aGVuKChjb250ZW50OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IDxBcnJheTxPYmplY3Q+PkpTT04ucGFyc2UoY29udGVudCk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==