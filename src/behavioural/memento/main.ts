import { ImageEditor } from './image-editor';
import { ImageEditorBackupManager } from './image-editor-backup-manager';

try {
  const imageEfitor = new ImageEditor('/media/foto.jpg');
  const backupManager = new ImageEditorBackupManager(imageEfitor);
  console.log(imageEfitor);
  backupManager.backup();

  imageEfitor.convertFromateTo('gif');
  backupManager.backup();

  imageEfitor.convertFromateTo('jpg');
  backupManager.backup();

  imageEfitor.convertFromateTo('png');

  backupManager.showMementos();

  console.log(imageEfitor);

  backupManager.restore();
  console.log(imageEfitor);

  backupManager.restore();
  console.log(imageEfitor);

  backupManager.restore();
  console.log(imageEfitor);

  backupManager.restore();
  console.log(imageEfitor);
} catch (error) {
  console.log(error.message);
  console.log(error.resolveError);
}
