import { NativeModules } from 'react-native';

const FirebasePerformance = NativeModules.Firebase;
FirebasePerformance.config();

export default FirebasePerformance;
