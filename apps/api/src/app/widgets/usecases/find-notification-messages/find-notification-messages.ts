import { EnvironmentWithSubscriber } from '../../../shared/commands/project.command';
import { IsString } from 'class-validator';

export class FindNotificationMessagesCommand extends EnvironmentWithSubscriber {
  @IsString()
  notificationId: string;
}
