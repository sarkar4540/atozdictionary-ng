import * as fs from "file-system";
let documents = fs.knownFolders.currentApp();

export class AppServices {
    public static readJSONWords(): Promise<Object> {
        let jsonFile = documents.getFile("./list/english-words.json");
        return new Promise<Object>((resolve, reject) => {
            jsonFile.readText().then((content: string) => {
                let data = <Array<Object>>JSON.parse(content);
                resolve(data);
            })
            .catch((err) => {
                reject(err);
            });
        });
    }
}
