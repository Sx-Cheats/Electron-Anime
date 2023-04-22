/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/latest/tutorial/process-model
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 
* ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import { BrowserRouter, Routes, Route} from "react-router-dom";
import * as React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { store } from './redux/__reduxkernel__';
import './styles/main.css';
import SearchAppBar from './views/Header';
import { Home} from './views/Home';
import DetailAnime from "./views/DetailAnime";


const root = createRoot(document.getElementById('app') as HTMLElement); // createRoot(container!) if you use TypeScript

root.render( <React.StrictMode>
  <Provider store={store}>
  
  <BrowserRouter basename="/main_window">
  
  <SearchAppBar />
      <Routes>
      <Route  path="/" element={<Home />} > </Route>
      <Route  path="Animes/:id" element={<DetailAnime />}></Route>
      </Routes>
  </BrowserRouter>
  </Provider>
  </React.StrictMode>);