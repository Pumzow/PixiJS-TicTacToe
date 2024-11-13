import * as PIXI from 'pixi.js';
import { gsap } from 'gsap';
import { PixiPlugin } from 'gsap/PixiPlugin';
import { Loader } from './Loader';
import { ScenesManager } from './ScenesManager';
import { EventEmitter } from 'events';
import { Input } from './Input';

interface Config {
    [key: string]: any;
}

class GameApplication extends EventEmitter {
    app!: PIXI.Application;
    scenes!: ScenesManager;
    loader!: Loader;
    assets: { [key: string]: PIXI.Texture } = {};
    config!: Config;

    async run(config: Config): Promise<void> {
        gsap.registerPlugin(PixiPlugin);
        PixiPlugin.registerPIXI(PIXI);
        Input.initialize();

        this.config = config;
        this.app = new PIXI.Application();

        await this.app.init({
            width: 960,
            height: 960,
        });
        
        this.app.renderer.background.color = 0x000000;
    
        document.body.appendChild(this.app.renderer.canvas);
    
        this.scenes = new ScenesManager();
        this.app.stage.interactive = true;
        this.app.stage.addChild(this.scenes.container);
    
        this.loader = new Loader();
        const assets = await this.loader.preload();
        this.start(assets);
    }
    

    sprite(key: string): PIXI.Sprite {
        return new PIXI.Sprite(this.assets[key]);
    }

    start(assets: { [key: string]: PIXI.Texture }): void {
        this.assets = assets;
        this.scenes.start('Game');
    }
}

export const App = new GameApplication();
