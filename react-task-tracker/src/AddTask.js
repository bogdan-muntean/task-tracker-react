import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmitFunction = (e) => {
        e.preventDefault()

        if(!text){
            alert('Please add a task')
            return
        }

        onAdd({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className="add-form" onSubmit={onSubmitFunction}>
            <div className="form-input">
                <label>Task</label>
                <input type="text" 
                placeholder="Add task" 
                value={text} 
                onChange={(e) => setText(e.target.value)}></input>
            </div>
            <div className="form-input">
                <label>Day and day</label>
                <input type="text" 
                placeholder="Add day and day"
                value={day}
                onChange={(e) => setDay(e.target.value)}></input>
            </div>
            <div className="form-input">
                <label>Set Reminder</label>
                <input type="checkbox"
                checked={reminder}
                value={reminder}
                onChange={(e) => setReminder(e.currentTarget.checked)}></input>
            </div>
            <input type="submit" value="Save Task" ></input>
        </form>
    )
}

export default AddTask