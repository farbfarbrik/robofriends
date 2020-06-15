import { Robot } from '../../robot-model';

export enum RequestRobotsTypes {
  REQUEST_ROBOTS_PENDING = '@@requestRobots/REQUEST_ROBOTS_PENDING',
  REQUEST_ROBOTS_SUCCESS = '@@requestRobots/REQUEST_ROBOTS_SUCCESS',
  REQUEST_ROBOTS_FAILED = '@@requestRobots/REQUEST_ROBOTS_FAILED',
}

export interface RequestRobotsState {
  readonly robots: Robot[];
  readonly isPending: boolean;
  readonly error: string;
}
