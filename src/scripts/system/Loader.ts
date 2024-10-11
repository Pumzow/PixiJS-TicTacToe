import { Assets } from 'pixi.js';

interface Asset {
    alias: string;
    src: string;
}

export class Loader {
    getAssetsFromFolder(): Asset[] {
        const assets: Asset[] = [];

        const req = (require as any).context("../../sprites", true, /\.(png|jpe?g)$/);

        req.keys().forEach((name: string) => {
            assets.push({
                alias: name.split('/').reverse()[0].replace(".png", ""),
                src: (req(name) as { default: string }).default
            });
        });

        return assets;
    }

    preload(): Promise<any> {
        return Assets.load(this.getAssetsFromFolder());
    }
}