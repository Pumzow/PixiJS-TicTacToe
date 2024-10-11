import * as PIXI from "pixi.js";
import { App } from "./App";

export class Scene {
    container: PIXI.Container;

    constructor() {
        this.container = new PIXI.Container();
        this.container.interactive = true;
        this.create();

        App.app.ticker.add((deltaTime) => this.update(deltaTime));
    }

    create(): void {}

    update(s: PIXI.Ticker): void {}

    destroy(): void {}

    remove(): void {
        App.app.ticker.remove((deltaTime) => this.update(deltaTime));
        this.destroy();
    }
}
