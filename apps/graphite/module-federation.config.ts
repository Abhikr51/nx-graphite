import {ModuleFederationConfig, SharedLibraryConfig} from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'graphite',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

/**
* Nx requires a default export of the config to allow correct resolution of the module federation graph.
**/
export default config;
