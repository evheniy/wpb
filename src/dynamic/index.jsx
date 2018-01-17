import Loadable from 'react-loadable';

export default (path, loading) => Loadable({
  loader: () => path,
  loading,
});
