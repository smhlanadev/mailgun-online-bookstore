import { EmailType } from "../services/notification.service";

export interface EmailData {
    emailTo: string;
    emailType: EmailType;
}