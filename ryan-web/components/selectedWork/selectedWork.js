import styles from './selectedWork.module.scss'

const SelectedWork = (props) => {
  return (
    <div className={styles.workContainer}>

      <div className="row">
        <div className="col-lg-12">
          <hr className={styles.customizeHr} />
          <span className={styles.title}>Selected Work</span>
        </div>
      </div>


    </div>
  )
}

const SelectedWorkSingle = (work) => {
  return (
    <div>
      
    </div>
  );
}

export default SelectedWork
