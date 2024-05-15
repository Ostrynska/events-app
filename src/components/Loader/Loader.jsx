import GridLoader from 'react-spinners/GridLoader';

import styles from './Loader.module.css';

function Loader() {
  return (
    <div className={styles.loader}>
      <GridLoader
        color="#7B61FF"
        speedMultiplier={0.9}
        loading="true"
        data-testid="loader"
        height="80"
        width="80"
        radius="12.5"
      />
    </div>
  );
}

export default Loader;
