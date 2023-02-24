import { CapacitorConfig } from '@capacitor/cli';

const appName: string = 'ionic-angular-sqlite-starter';

const config: CapacitorConfig = {
  appId: 'com.jeep.app.ionic.angular.sqlite',
  appName: appName,
  webDir: 'www',
  bundledWebRuntime: false,
  //  hideLogs: true,
  plugins: {
    CapacitorSQLite: {
      iosDatabaseLocation: 'Library/CapacitorDatabase',
      iosIsEncryption: true,
      iosKeychainPrefix: appName,
      iosBiometric: {
        biometricAuth: false,
        biometricTitle : "Biometric login for capacitor sqlite"
      },
      androidIsEncryption: true,
      androidBiometric: {
        biometricAuth : false,
        biometricTitle : "Biometric login for capacitor sqlite",
        biometricSubTitle : "Log in using your biometric"
      },
      electronWindowsLocation: "C:\\ProgramData\\CapacitorDatabases",
      electronMacLocation: "/Volumes/Development_Lacie/Development/CapacitorDatabases",
      electronLinuxLocation: "Databases"
    }
  }
};
export default config;
