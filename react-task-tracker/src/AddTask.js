import { useState } from 'react'

const AddTask = () => {
    const [text, setText] = useState('')
    const [time, setTime] = useState('')
    const [reminder, setReminder] = useState(false)
    return (
        <form className="add-form">
            <div className="form-input">
                <label>Task</label>
                <input type="text" 
                placeholder="Add task" 
                value={text} 
                onChange={(e) => setText(e.target.value)}></input>
            </div>
            <div className="form-input">
                <label>Day and Time</label>
                <input type="text" 
                placeholder="Add day and time"
                value={time}
                onChange={(e) => setTime(e.target.value)}></input>
            </div>
            <div className="form-input">
                <label>Set Reminder</label>
                <input type="checkbox"
                checked={reminder}
                value={reminder}
                onChange={(e) => setReminder(e.currentTarget.checked)}></input>
            </div>
            <input type="submit" value="Save Task"></input>
        </form>
    )
}

export default AddTask