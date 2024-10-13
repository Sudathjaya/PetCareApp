import env from 'react-native-config';
import dev from '../../environments/dev.env';


const envConfig = {
  DEV: dev,
}[env.ENVIRONMENT];

export default envConfig;


