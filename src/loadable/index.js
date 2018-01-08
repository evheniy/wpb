import Loadable from 'react-loadable';
import loading from '../loader';

export default path => Loadable({
  loader: () => path,
  loading,
});
