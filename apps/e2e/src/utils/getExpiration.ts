import { nowInSeconds, toBigInt } from '@nadohq/utils';

export function getExpiration(secondsInFuture = 1000) {
  return toBigInt(nowInSeconds() + secondsInFuture);
}
