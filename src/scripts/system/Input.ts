export enum Keycode {
    // Letters
    A = "KeyA",
    B = "KeyB",
    C = "KeyC",
    D = "KeyD",
    E = "KeyE",
    F = "KeyF",
    G = "KeyG",
    H = "KeyH",
    I = "KeyI",
    J = "KeyJ",
    K = "KeyK",
    L = "KeyL",
    M = "KeyM",
    N = "KeyN",
    O = "KeyO",
    P = "KeyP",
    Q = "KeyQ",
    R = "KeyR",
    S = "KeyS",
    T = "KeyT",
    U = "KeyU",
    V = "KeyV",
    W = "KeyW",
    X = "KeyX",
    Y = "KeyY",
    Z = "KeyZ",

    // Numbers (both top row and numpad)
    Digit0 = "Digit0",
    Digit1 = "Digit1",
    Digit2 = "Digit2",
    Digit3 = "Digit3",
    Digit4 = "Digit4",
    Digit5 = "Digit5",
    Digit6 = "Digit6",
    Digit7 = "Digit7",
    Digit8 = "Digit8",
    Digit9 = "Digit9",

    Numpad0 = "Numpad0",
    Numpad1 = "Numpad1",
    Numpad2 = "Numpad2",
    Numpad3 = "Numpad3",
    Numpad4 = "Numpad4",
    Numpad5 = "Numpad5",
    Numpad6 = "Numpad6",
    Numpad7 = "Numpad7",
    Numpad8 = "Numpad8",
    Numpad9 = "Numpad9",

    // Function keys
    F1 = "F1",
    F2 = "F2",
    F3 = "F3",
    F4 = "F4",
    F5 = "F5",
    F6 = "F6",
    F7 = "F7",
    F8 = "F8",
    F9 = "F9",
    F10 = "F10",
    F11 = "F11",
    F12 = "F12",

    // Symbols
    Backquote = "Backquote",       // ` ~
    Minus = "Minus",               // - _
    Equal = "Equal",               // = +
    BracketLeft = "BracketLeft",   // [ {
    BracketRight = "BracketRight", // ] }
    Backslash = "Backslash",       // \ |
    Semicolon = "Semicolon",       // ; :
    Quote = "Quote",               // ' "
    Comma = "Comma",               // , <
    Period = "Period",             // . >
    Slash = "Slash",               // / ?

    // Control keys
    Escape = "Escape",
    Tab = "Tab",
    CapsLock = "CapsLock",
    ShiftLeft = "ShiftLeft",
    ShiftRight = "ShiftRight",
    ControlLeft = "ControlLeft",
    ControlRight = "ControlRight",
    AltLeft = "AltLeft",
    AltRight = "AltRight",
    MetaLeft = "MetaLeft",   // Windows key on Windows or Command key on Mac
    MetaRight = "MetaRight", // Right Command key on Mac or Windows key on Windows
    Space = "Space",
    Enter = "Enter",
    Backspace = "Backspace",
    Delete = "Delete",
    Insert = "Insert",
    PageUp = "PageUp",
    PageDown = "PageDown",
    Home = "Home",
    End = "End",

    // Arrow keys
    ArrowUp = "ArrowUp",
    ArrowDown = "ArrowDown",
    ArrowLeft = "ArrowLeft",
    ArrowRight = "ArrowRight",

    // Numpad control
    NumpadAdd = "NumpadAdd",           // +
    NumpadSubtract = "NumpadSubtract", // -
    NumpadMultiply = "NumpadMultiply", // *
    NumpadDivide = "NumpadDivide",     // /
    NumpadDecimal = "NumpadDecimal",   // .
    NumpadEnter = "NumpadEnter",       // Enter key on numpad

    // Lock keys
    NumLock = "NumLock",
    ScrollLock = "ScrollLock",

    // Special keys
    PrintScreen = "PrintScreen",
    Pause = "Pause",
    ContextMenu = "ContextMenu",
}

export class Input {
    private static keys: { [key: string]: boolean } = {};
    private static previousKeys: { [key: string]: boolean } = {};

    public static initialize(): void {
        window.addEventListener('keydown', (event) => {
            Input.keys[event.code] = true;
        });

        window.addEventListener('keyup', (event) => {
            Input.keys[event.code] = false;
        });

        console.log("Input initialized.");
    }

    public static update(): void {
        Input.previousKeys = { ...Input.keys };
    }

    public static KeyHeld(keyCode: string): boolean {
        return !!Input.keys[keyCode];
    }

    public static KeyPressed(keyCode: string): boolean {
        return !!Input.keys[keyCode] && !Input.previousKeys[keyCode];
    }

    public static KeyReleased(keyCode: string): boolean {
        return !Input.keys[keyCode] && !!Input.previousKeys[keyCode];
    }
}
