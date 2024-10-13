import { Sprite } from "pixi.js";
import { PixiBehaviour } from "./Core";

export class GraphicsRenderer extends PixiBehaviour{
    public sprite!: Sprite;

    update(): void {
        super.update();

        if(this.sprite)
        {
            this.sprite.position.set(this.transform.position.x, this.transform.position.y);
        }
    }
}