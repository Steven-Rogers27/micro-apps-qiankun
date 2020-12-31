import {
  registerMicroApps,
  addGlobalUncaughtErrorHandler,
  start,
} from 'qiankun';
import apps from './apps';

registerMicroApps(apps, {
  beforeLoad: (app) => {
    console.log('before load ', app.name);
    return Promise.resolve();
  },
  beforeMount: (app) => {
    console.log('before mount ', app.name);
    return Promise.resolve();
  },
  afterMount: (app) => {
    console.log('after mount ', app.name);
    return Promise.resolve();
  },
  beforeUnmount: (app) => {
    console.log('before unmount ', app.name);
    return Promise.resolve();
  },
  afterUnmount: (app) => {
    console.log('after unmount ', app.name);
    return Promise.resolve();
  },
});

addGlobalUncaughtErrorHandler(event => {
  console.error(event);
});

export default start;
