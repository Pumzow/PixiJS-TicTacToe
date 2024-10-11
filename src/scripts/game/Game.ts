import { App } from "../system/App";
import { Scene } from "../system/Scene";
import { GameObject, instantiate } from "../system/Core";
import { Sprite, Ticker } from "pixi.js";

export class Game extends Scene {
    private bg!: Sprite;
    private gameobjects: GameObject[] = [];

    create(): void {
        this.gameobjects = [];

        this.createBackground();
    }

    update(s: Ticker): void {
        super.update(s);

        for (let index = 0; index < this.gameobjects.length; index++) {
            this.gameobjects[index].update();
        }
    }

    createBackground(): void {
        this.bg = App.sprite("bg") as Sprite;
        this.bg.width = window.innerWidth;
        this.bg.height = window.innerHeight;
        this.container.addChild(this.bg);
    }
}