import { Graphics, Sprite } from "pixi.js";
import { PixiBehaviour } from "./Core";

export class GraphicsRenderer extends PixiBehaviour{
    public sprite!: Sprite;
    public graphics!: Graphics;

    start(): void{
        super.start();

        this.graphics = new Graphics();
    }

    update(): void {
        super.update();

        if(this.sprite)
        {
            this.sprite.position.set(this.transform.position.x, this.transform.position.y);
        }
    }
}