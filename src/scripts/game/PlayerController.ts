import { PixiBehaviour } from "../system/Core";
import { Input, Keycode } from "../system/Input";

export class PlayerController extends PixiBehaviour{
    update(): void {
        if(Input.KeyDown(Keycode.A)){
            console.log("Player has pressed the 'A' key!");
            
        }
    }
}