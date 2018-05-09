export const NODE = 'NODE';
export const ELECTRON_RENDERER = 'ELECTRON_RENDERER';
export const LOST = 'LOST';

function isNode() {
  return (typeof module !== 'undefined' && !!module.exports);
}

function isElectronRenderer() {
  return (typeof process !== 'undefined' && typeof process.versions !== 'undefined' && typeof process.versions.electron !== 'undefined' && process.type === 'renderer');
}

function whereAmI() {
  if (isNode()) {
    console.log('You are in Node');
    return NODE;
  } else if (isElectronRenderer()) {
    console.log('You are in an Electron Renderer');
    return ELECTRON_RENDERER;
  } else {
    console.log('You are lost');
    return LOST;
  }
}
