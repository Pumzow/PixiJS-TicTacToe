import { Graphics, Text } from "pixi.js";
import { PixiBehaviour } from "../system/Core";
import { GraphicsRenderer } from "../system/GraphicsRenderer";

export class Playground extends PixiBehaviour{
    public graphicsRenderer!: GraphicsRenderer;
    private board!: string[][];
    private cellSize!: number;

    start(): void{
        super.start();
        this.board = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
        this.graphicsRenderer = this.gameObject.addComponent(GraphicsRenderer);
    }

    public isCellFree(x: number, y: number): boolean{
        this.board[y][x] === '';
        return true;
    }

    public drawSymbol(x: number, y: number, player: string): Text {
        this.board[y][x] = player;
        const symbol = new Text({
            text: player,
            style: {
                fontFamily: 'Arial',
                fontSize: this.cellSize * 0.8,
                fill: 0xFFFFFF,
                align: 'center'
            }
        });
        symbol.anchor.set(0.5);
        symbol.x = x * this.cellSize + this.cellSize / 2;
        symbol.y = y * this.cellSize + this.cellSize / 2;

        return symbol;
    }

    public drawCells(size: number): Graphics
    {
        this.cellSize = size;
        for (let i = 1; i < 3; i++) {
            // Vertical lines
            this.graphicsRenderer?.graphics.moveTo(i * this.cellSize, 0);
            this.graphicsRenderer?.graphics.lineTo(i * this.cellSize, this.cellSize * 3);
            // Horizontal lines
            this.graphicsRenderer?.graphics.moveTo(0, i * this.cellSize);
            this.graphicsRenderer?.graphics.lineTo(this.cellSize * 3, i * this.cellSize);
        }
        this.graphicsRenderer?.graphics.stroke({ width: 4, color: 0xFFFFFF });
        
        return this.graphicsRenderer!.graphics;
    }

    public checkWinner(): string | null {
        const lines = [
            // Rows
            [this.board[0][0], this.board[0][1], this.board[0][2]],
            [this.board[1][0], this.board[1][1], this.board[1][2]],
            [this.board[2][0], this.board[2][1], this.board[2][2]],
            // Columns
            [this.board[0][0], this.board[1][0], this.board[2][0]],
            [this.board[0][1], this.board[1][1], this.board[2][1]],
            [this.board[0][2], this.board[1][2], this.board[2][2]],
            // Diagonals
            [this.board[0][0], this.board[1][1], this.board[2][2]],
            [this.board[0][2], this.board[1][1], this.board[2][0]]
        ];

        for (const line of lines) {
            if (line[0] && line[0] === line[1] && line[1] === line[2]) {
                return line[0];
            }
        }
        return this.board.flat().every(cell => cell !== '') ? 'Draw' : null;
    }

    public reset(){
        this.board = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
    }
}