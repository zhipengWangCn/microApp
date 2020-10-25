
import { registerMicroApps} from 'qiankun';
registerMicroApps([
  { 
    name: 'branchApp', 
    entry: 'http://localhost:3000', 
    container: '#reactApp', 
    activeRule: '/react', 
  },
]);