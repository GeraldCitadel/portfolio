import classes from './ResumeTitle.module.css'

const ResumeTitle = ({ title, children }) => {
  return (
    <div className={classes.header}>
                <h1>{title}<hr /></h1>
                <div className={classes.children}>{children}</div>
            </div>
  )
}

export default ResumeTitle