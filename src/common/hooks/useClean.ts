import { useLocation } from 'react-router-dom';

export default function useClean() {
  return useLocation().search.includes('clean');
}
