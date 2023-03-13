import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { MemberRepository, MessageEntity, MessageRepository, SubscriberEntity, SubscriberRepository } from '@novu/dal';

import { ANALYTICS_SERVICE } from '../../../shared/shared.module';
import { AnalyticsService } from '@novu/application-generic';
import { CacheKeyPrefixEnum } from '../../../shared/services/cache';
import { ChannelTypeEnum } from '@novu/shared';
import { FindNotificationMessagesCommand } from './find-notification-messages';
import { InvalidateCache } from '../../../shared/interceptors';
import { QueueService } from '../../../shared/services/queue';

@Injectable()
export class FindNotificationMessages {
  constructor(private messageRepository: MessageRepository, private subscriberRepository: SubscriberRepository) {}

  @InvalidateCache([CacheKeyPrefixEnum.MESSAGE_COUNT, CacheKeyPrefixEnum.FEED])
  async execute(command: FindNotificationMessagesCommand): Promise<MessageEntity[] | null> {
    const subscriber = await this.subscriberRepository.findBySubscriberId(command.environmentId, command.subscriberId);
    if (!subscriber) throw new NotFoundException(`Subscriber ${command.subscriberId} not found`);

    const messages = await this.messageRepository.findMessagesByNotificationId({
      _environmentId: command.environmentId,
      _notificationId: command.notificationId,
    });

    return messages;
  }
}
