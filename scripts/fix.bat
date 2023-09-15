@echo off
echo 'Fixing ToastAndroid issues'
REM Fix ViewPropTypes issues
ECHO export const ToastAndroid = { style: null };>>"node_modules/react-native-web/dist/index.js"