import * as PIXI from "pixi.js";
import { App } from "./App";
import { GameObject } from "./Core";

export class Scene {
    container: PIXI.Container;
    protected gameobjects: GameObject[] = [];

    constructor() {
        this.container = new PIXI.Container();
        this.container.interactive = true;
        this.gameobjects = [];
        this.start();
        App.app.ticker.add((delta) => this.update(delta));
    }

    start(): void { }

    update(delta: PIXI.Ticker): void {
        this.updateGameObjects()
    }

    destroy(): void { }

    remove(): void {
        App.app.ticker.remove(this.update);
        this.destroy();
    }

    updateGameObjects(): void{
        for (let index = 0; index < this.gameobjects.length; index++) {
            this.gameobjects[index].update();
        }
    }
}
