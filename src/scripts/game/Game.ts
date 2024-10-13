import { App } from "../system/App";
import { Scene } from "../system/Scene";
import { instantiate } from "../system/Core";
import { Sprite, Ticker } from "pixi.js";
import { Input } from "../system/Input";

export class Game extends Scene {
    private bg!: Sprite;

    start(): void {
        super.start();

        this.createBackground();  
    }

    update(s: Ticker): void {
        super.update(s);

        Input.update();
    }

    createBackground(): void {
        this.bg = App.sprite("bg") as Sprite;
        this.bg.width = window.innerWidth;
        this.bg.height = window.innerHeight;
        this.container.addChild(this.bg);
    }
}