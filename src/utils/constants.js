import {Dimensions} from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';


export const HEIGHT = Dimensions.get('window').height;
export const WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('screen').height;
export const CARD_COLOR = '#FF5733';

//change with your own url when running
export const BACKEND_URL = "http://18.61.20.118:5000/api"
// export const BACKEND_URL = "https://f9be-175-157-9-175.ngrok.io/api"