import classes from './styles/Error.module.css'

const Error = ({children}) => {
    return(
        <div className={classes.Error}>
            <div className={classes.text}>City not Found,possible you may not delete spaces</div>
            {children}
        </div>
    )
}

export default Error;