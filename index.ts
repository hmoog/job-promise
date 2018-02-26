import { EventEmitter } from 'eventemitter3';

export enum ExecutionState {
    NEW,
    RUNNING,
    DONE,
    FAILED
}

export class JobPromise<T> extends EventEmitter {
}