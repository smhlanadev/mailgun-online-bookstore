import { EmailType } from "./email-type.enum";

export interface EmailData {
    emailTo: string;
    emailType: EmailType;
}