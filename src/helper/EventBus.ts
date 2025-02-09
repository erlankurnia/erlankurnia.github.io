export enum EventBusEnum {
    ShowModal = "show-modal",
    HideModal = "hide-modal",
}

export type EventBusCallback = (...args: any[]) => void;

class EventBus {
    private bus: Map<string, EventBusCallback[]>;

    constructor() {
        this.bus = new Map();
    }

    $on(event: string, callback: EventBusCallback) {
        if (!this.bus.has(event)) {
            this.bus.set(event, []);
        }
        this.bus.get(event)?.push(callback);
    }

    $emit(event: string, ...args: any[]) {
        if (this.bus.has(event)) {
            this.bus.get(event)?.forEach(callback => callback(...args));
        }
    }

    $off(event: string, callback: EventBusCallback) {
        if (this.bus.has(event)) {
            this.bus.set(
                event,
                this.bus.get(event)?.filter(cb => cb !== callback) || []
            );
        }
    }
}

const eventBus = new EventBus();
export default eventBus;
