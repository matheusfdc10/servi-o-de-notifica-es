import { Notification } from "../../../../application/entities/notification";
import { Notification as RowNotification } from '@prisma/client'
import { Content } from "../../../../../src/application/entities/content";

export class PrismaNotificationMapper {
    static toPrisma(notification: Notification) {
        return {
            id: notification.id,
            category: notification.category,
            content: notification.content.value,
            recipientId: notification.recipientId,
            readAt: notification.readAt,
            canceledAt: notification.canceledAt,
            createdAt: notification.createdAt
        }
    }

    static toDomain(raw: RowNotification): Notification {
        return new Notification(
            {
                category: raw.category,
                content: new Content(raw.content),
                recipientId: raw.recipientId,
                readAt: raw.readAt,
                canceledAt: raw.canceledAt,
                createdAt: raw.createdAt,
            },
            raw.id,
        );
    }
}