import { SetMetadata } from '@nestjs/common';
import { OnEventMetadata } from '@nestjs/event-emitter';

export const OnLeaveState = (
  graphName: string = '*',
  state: string = '*',
  async: boolean = false,
): MethodDecorator =>
  SetMetadata('EVENT_LISTENER_METADATA', {
    event: `state-machine.${graphName}.leave.${state}`,
    options: { async },
  } as OnEventMetadata);
