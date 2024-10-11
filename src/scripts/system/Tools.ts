export class Tools {
    static massiveRequire(req: { keys: () => string[], (key: string): any }): Array<{ key: string, data: any }> {
        const files: Array<{ key: string, data: any }> = [];

        req.keys().forEach(key => {
            files.push({
                key, data: req(key)
            });
        });

        return files;
    }
}
