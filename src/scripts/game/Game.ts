import { App } from "../system/App";
import { Scene } from "../system/Scene";
import { Graphics, Text, Ticker } from "pixi.js";
import { Input } from "../system/Input";
import { InteractionManager } from '@pixi/interaction';
import { extensions } from '@pixi/core';
import { Playground } from "./Playground";
import { GameObject } from "../system/Core";
import { Player } from "./Player";

extensions.add(InteractionManager);
export class Game extends Scene {
    private map!: GameObject
    private playground!: Playground;
    private players!: Player[];
    private symbols!: Text[];
    private endMessage!: Text;
    private currentPlayer: number;
    private gameEnded: boolean;
    private cellSize!: number;

    constructor() {
        super();
        this.currentPlayer = 0;
        this.gameEnded = false;
        this.symbols = [];
    }

    start(): void {
        super.start();
        this.InitializePlayers();
        this.InitializeBackground();
        this.InitializeGrid();
        this.container.interactive = true;
        this.container.on('pointerdown', (event) => {
            if (this.gameEnded) return;
            const offsetX = (App.app.screen.width - this.cellSize * 3) / 2;
            const offsetY = (App.app.screen.height - this.cellSize * 3) / 2;
            
            const clickX = event.data.global.x - offsetX;
            const clickY = event.data.global.y - offsetY;

            if (clickX < 0 || clickY < 0 || clickX > this.cellSize * 3 || clickY > this.cellSize * 3) return;

            const x = Math.floor(clickX / this.cellSize);
            const y = Math.floor(clickY / this.cellSize);

            if (this.playground.isCellFree(x, y)) {
                const symbol = this.playground.drawSymbol(x, y, this.players[this.currentPlayer]!.symbol);
                this.symbols.push(symbol);
                this.container.addChild(symbol);

                const winner = this.playground.checkWinner();

                if (winner) {
                    this.gameEnded = true;
                    const message = winner === 'Draw' ? 'It\'s a Draw!' : `${winner} Wins!`;
                    this.showEndMessage(message);
                } else {
                    this.currentPlayer = this.currentPlayer === 0 ? 1 : 0;
                }
            }
        });

    }

    update(s: Ticker): void {
        super.update(s);
        Input.update();
    }

    InitializePlayers() {
        this.players = [];
        this.players.push(new Player("X"));
        this.players.push(new Player("O"));
    }

    InitializeBackground() {
        const background = new Graphics().rect(0,0,App.app.screen.width,App.app.screen.height).fill(0x000000);
        this.container.addChild(background);
    }

    InitializeGrid(): void {
        if(this.map) 
        {
            console.log("Map already exists.");
            
            return;
        }
        this.cellSize = Math.min(App.app.screen.width, App.app.screen.height) / 3;
        this.map = new GameObject("Map");
        this.playground = this.map.addComponent(Playground);
        this.container.addChild(this.playground.drawCells(this.cellSize));
        console.log("Create map.");
    }

    //TODO [IP]: Export this into a class for handling messages
    showEndMessage(message: string): void {
        const endMessage = new Text({
            text: message,
            style: {
                fontFamily: 'Arial',
                fontSize: 50,
                fill: 0xff0000,
                align: 'center'
            }
        });
        endMessage.anchor.set(0.5);
        endMessage.x = App.app.screen.width / 2;
        endMessage.y = App.app.screen.height / 2;
        this.container.addChild(endMessage);

        this.endMessage = endMessage;

        console.log(message);
        console.log("Restarting in 3 seconds");

        setTimeout(() => {
            this.resetGame();
        }, 3000);
    }

    resetGame(): void {
        this.currentPlayer = 0;
        this.gameEnded = false;
        this.container.removeChild(this.endMessage);
        for (let i = 0; i < this.symbols.length; i++) {
            this.container.removeChild(this.symbols[i]);
        }
        this.playground.reset();
    }
}
