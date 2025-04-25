import { EmailType } from "./email-type.enum";

export interface NotificationInput {
    emailTo: string;
    emailType: EmailType;
    name: string;
    bookTitle?: string;
    bookAuthor?: string;
}