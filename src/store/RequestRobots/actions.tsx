import { action } from 'typesafe-actions';
import { RequestRobotsTypes } from './types';

export const requestRobotsPending = () =>
  action(RequestRobotsTypes.REQUEST_ROBOTS_PENDING);

export const requestRobotsSuccess = (data: any) =>
  action(RequestRobotsTypes.REQUEST_ROBOTS_SUCCESS, data);
export const requestRobotsFailed = (error: string) =>
  action(RequestRobotsTypes.REQUEST_ROBOTS_FAILED, error);
