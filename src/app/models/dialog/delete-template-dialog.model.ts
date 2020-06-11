import { ConfirmDataDialog } from './confirm-data-dialog.model';

export class DeleteTemplateDialog implements ConfirmDataDialog {
  dialogTitle = 'Usuwanie';
  boldContent = 'trwale usunąć';
  boldWarn = true;
  buttonText = 'Tak, usuń';
}
