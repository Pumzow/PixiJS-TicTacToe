import { Game } from "./Game";
import { Tools } from "../system/Tools";

interface ConfigType {
    loader: Array<{ key: string, data: any }>;
    scenes: { [key: string]: typeof Game };
}

export const Config: ConfigType = {
    loader: Tools.massiveRequire((require as any)["context"]('./../../sprites/', true, /\.(mp3|png|jpe?g)$/)),
    scenes: {
        "Game": Game
    }
};
