import { FindNotificationMessages } from './find-notification-messages/find-notification-messages.usecase';
import { GetFeedCount } from './get-feed-count/get-feed-count.usecase';
import { GetNotificationsFeed } from './get-notifications-feed/get-notifications-feed.usecase';
import { GetOrganizationData } from './get-organization-data/get-organization-data.usecase';
import { GetWidgetSettings } from './get-widget-settings/get-widget-settings.usecase';
import { InitializeSession } from './initialize-session/initialize-session.usecase';
import { MarkAllMessageAsSeen } from './mark-all-message-as-seen/mark-all-message-as-seen.usecase';
import { MarkMessageAs } from './mark-message-as/mark-message-as.usecase';
import { RemoveMessage } from './remove-message/remove-message.usecase';
import { UpdateMessageActions } from './mark-action-as-done/update-message-actions.usecase';

export const USE_CASES = [
  GetOrganizationData,
  UpdateMessageActions,
  MarkMessageAs,
  GetFeedCount,
  GetNotificationsFeed,
  InitializeSession,
  GetWidgetSettings,
  MarkAllMessageAsSeen,
  RemoveMessage,
  FindNotificationMessages,
  //
];
