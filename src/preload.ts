import { ipcRenderer, contextBridge } from 'electron';

ipcRenderer.on('file-opened', (_, content: string, filePath: string) => {
  console.log({ content, filePath });
});

contextBridge.exposeInMainWorld('api', {
  showOpenDialog: async () => {
    ipcRenderer.send('show-open-dialog');
  },
});
