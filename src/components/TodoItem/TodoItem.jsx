import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from '../../context'

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid gray',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    }
}

function TodoItem({todo, idx, onChange}) {
    const {removeTodo} = useContext(Context)
    const classes = []
    todo.completed && classes.push('done')
    return (
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input style={styles.input} type="checkbox" checked={todo.completed} onChange={onChange}/>
                <strong>{++idx + '.'} </strong> 
                {todo.title}
            </span>
            <button className="rm" onClick={removeTodo.bind(null, todo.id)}>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    idx: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default TodoItem
