// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts


const { BrowserWindow,contextBridge, ipcRenderer,ipcMain,Menu,MenuItem} = require('electron')
const { Titlebar, Color } = require('custom-electron-titlebar');
const path = require('path');

window.addEventListener('DOMContentLoaded', () => {
  let titlebar = new Titlebar({
    backgroundColor: Color.fromHex("#101010"),
    //itemBackgroundColor: Color.fromHex("#ffffff"),
    svgColor: Color.WHITE,
    //menuPosition: 'bottom',
    //menu: null // = do not automatically use Menu.applicationMenu
    menuTransparent: 80,
    
  })
  
  titlebar._windowIcon.parentNode.removeEventListener("selectionchange",()=>(null as any))

  const mytitlebar = titlebar._windowControlIcons 
  titlebar._titlebar = null

  mytitlebar.close.addEventListener("click",   ()=> ipcRenderer.invoke('close'))
  mytitlebar.minimize.addEventListener("click",()=> ipcRenderer.invoke('minimize'))
  mytitlebar.maximize.addEventListener("click",()=> ipcRenderer.invoke('maximize'))

})

contextBridge.exposeInMainWorld(
  'electron',
  {
    doThing: (title:string) => ipcRenderer.send('set-title', title)
  }
)


contextBridge.exposeInMainWorld(
  'createWindow',
  {
    doThing: (title:string) => ipcRenderer.invoke('createWindow')
  }
)

contextBridge.exposeInMainWorld('darkMode', {
    toggle: () => ipcRenderer.invoke('dark-mode:toggle'),
    system: () => ipcRenderer.invoke('dark-mode:system')
})





