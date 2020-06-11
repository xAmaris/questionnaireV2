import { ConfirmDataDialog } from './confirm-data-dialog.model';

export class SendSurveyDialog implements ConfirmDataDialog {
  dialogTitle = 'Wysyłanie';
  boldContent = 'wysłać';
  boldWarn = false;
  buttonText = 'Wyślij';
}
