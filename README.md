# PixiJS Template
This repository serves as a startup template for PixiJS projects. It is structured in a similar way to Unity Engine projects, making it easy for developers to organize scenes, assets, and scripts. With this template, you can quickly set up your PixiJS game or application and start building right away.
## Features
- **Scene-based structure**: Organize your project in a familiar way, with a focus on separating scenes and game logic, similar to Unity's project layout.
- **Modular game system**: The project separates core game functionality, input handling, and graphics rendering for better maintainability.
- **Custom loader**: A built-in asset loader for handling game resources.
- **TypeScript**: Full support for TypeScript to enhance development productivity.
- **Webpack**: Pre-configured Webpack setup for both development and production environments.
## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Pumzow/PixiJS-Template.git
   ```
2. Navigate to the project folder:
   ```bash
   cd pixi-template
   ```
3. Install the necessary packages:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bask
    npm start
   ```
## Project Structure
  ```plaintext
    pixijs-template/
    ├── src/
    │   ├── scripts/
    │   │   ├── game/
    │   │   │   └── ...                 # Game logic and initialization files (e.g., character classes, gameplay mechanics)
    │   │   ├── system/
    │   │   │   ├── App.ts              # Main application setup (e.g., creating the PixiJS app and configuring it)
    │   │   │   ├── Core.ts             # Core functionalities of the game (e.g., game loop, core events)
    │   │   │   ├── GraphicsRenderer.ts # Handles graphics rendering (e.g., drawing shapes, sprites, score display)
    │   │   │   ├── Input.ts            # Input handling (e.g., keyboard or mouse controls)
    │   │   │   ├── Loader.ts           # Custom asset loader class
    │   │   │   ├── Scene.ts            # Base class for game scenes (e.g., menu, level, game over)
    │   │   │   ├── ScenesManager.ts    # Manages different game scenes (e.g., transitions between scenes)
    │   │   │   ├── Tools.ts            # Utility functions for the game (e.g., math functions, helper methods)
    │   │   └── index.ts                # Entry point to bootstrap and start the game
    │   ├── sprites/                    
    │   │   └── ...                     # Sprites and image assets used in the game
    ├── webpack/
    │   ├── base.js                     # Base Webpack configuration shared between development and production
    │   └── prod.js                     # Production-specific Webpack configuration (e.g., optimizations)
    ├── index.html                      # Main HTML file to load the application and include the game canvas
    └── tsconfig.json                   # TypeScript configuration file
  ```
## Usage
1. **Main Entry Point**: The game is bootstrapped from `src/scripts/index.ts`. This file initializes the game by setting up the main application through the App.ts class, which manages the PixiJS application and loads resources.
2. **Game Logic**: Game-specific logic and gameplay mechanics are organized within the `src/scripts/game/` folder. Add your custom logic, character classes, or gameplay mechanics here.
3. **System Components**: The `src/scripts/system/` folder contains the core components:
   - **App.ts**: Initializes the PixiJS app and handles setup.
   - **Core.ts**: Manages the core game loop and events.
   - **GraphicsRenderer.ts**: Handles rendering of graphical elements like sprites and shapes.
   - **Input.ts**: Handles input detection, such as keyboard and mouse controls.
   - **Loader.ts**: Manages loading of game assets.
   - **Scene.ts**: Base class for different game scenes (e.g., menus, levels).
   - **ScenesManager.ts**: Manages transitions between different scenes in the game.
   - **Tools.ts**: Contains utility functions used across the game.
4. **Assets**: Sprites and other image assets are placed in the `src/sprites/` folder. These can be loaded and managed using the custom Loader.ts class.
5. **Build Configuration**: The Webpack configuration is located in the `webpack/` folder. The base configuration is shared between development and production, with optimizations defined in prod.js for production builds.
## License
**MIT**

**Free, Hell Yeah!**
