import * as PIXI from "pixi.js";
import { App } from "./App";

export class ScenesManager {
    container: PIXI.Container;
    scene: any;

    constructor() {
        this.container = new PIXI.Container();
        this.container.interactive = true;
        this.scene = null;
    }

    start(sceneName: string): void {
        if (this.scene) {
            this.scene.remove();
        }

        const SceneClass = App.config.scenes[sceneName];
        if (SceneClass) {
            this.scene = new SceneClass();
            this.container.addChild(this.scene.container);
        } else {
            console.error(`Scene ${sceneName} not found in App.config.scenes`);
        }
    }
}
