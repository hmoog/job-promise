import { EventEmitter } from 'eventemitter3';
export declare enum ExecutionState {
    NEW = 0,
    RUNNING = 1,
    DONE = 2,
    FAILED = 3,
}
export declare class JobPromise<T> extends EventEmitter {
}
