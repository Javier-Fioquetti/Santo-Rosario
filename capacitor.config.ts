import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'rosario.app',
  appName: 'rosario-2',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
