export class Component {
    gameObject: GameObject;
    transform: Transform;

    constructor(gameObject: GameObject) {
        this.gameObject = gameObject;
        this.transform = this.gameObject.transform;
    }
}

export class Transform extends Component {
    position: Vector3;
    rotation: Vector3;
    scale: Vector3;

    constructor(gameObject: GameObject) {
        super(gameObject);
        this.position = new Vector3(0, 0, 0);
        this.rotation = new Vector3(0, 0, 0);
        this.scale = new Vector3(1, 1, 1);
    }
}

export function instantiate(name: string): GameObject {
    return new GameObject(name);
}

export class Vector3 {
    constructor(public x: number, public y: number, public z: number) {}

    add(other: Vector3): Vector3 {
        return new Vector3(this.x + other.x, this.y + other.y, this.z + other.z);
    }

    subtract(other: Vector3): Vector3 {
        return new Vector3(this.x - other.x, this.y - other.y, this.z - other.z);
    }

    scale(scalar: number): Vector3 {
        return new Vector3(this.x * scalar, this.y * scalar, this.z * scalar);
    }
}

export class PixiBehaviour extends Component {
    constructor(gameObject: GameObject) {
        super(gameObject);
        this.start();
    }

    start(): void {}
    update(): void {}
    onDestroy(): void {}
}

export class GameObject {
    private components: Component[] = [];
    public name: string;
    public transform: Transform;

    constructor(name: string) {
        this.name = name;
        this.transform = this.addComponent(Transform);
    }

    addComponent<T extends Component>(ComponentType: { new(gameObject: GameObject): T }): T {
        const component = new ComponentType(this);
        this.components.push(component);
        return component;
    }

    getComponent<T extends Component>(ComponentType: { new(gameObject: GameObject): T }): T | undefined {
        return this.components.find(c => c instanceof ComponentType) as T;
    }

    update(): void {
        this.components.forEach(component => {
            if (component instanceof PixiBehaviour) {
                component.update();
            }
        });
    }
}