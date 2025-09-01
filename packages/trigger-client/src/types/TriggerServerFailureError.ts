import { EngineServerExecuteFailureResult } from '@nadohq/engine-client';
import { TriggerServerQueryFailureResponse } from './serverQueryTypes';

export class TriggerServerFailureError extends Error {
  constructor(
    readonly responseData:
      | TriggerServerQueryFailureResponse
      | EngineServerExecuteFailureResult,
  ) {
    super(`${responseData.error_code}: ${responseData.error}`);
  }
}
