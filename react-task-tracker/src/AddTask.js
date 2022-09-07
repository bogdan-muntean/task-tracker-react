
const AddTask = () => {
  return (
    <form className="add-form">
        <div className="form-input">
            <label>Task</label>
            <input type="text" placeholder="Add task"></input>
        </div>
        <div className="form-input">
            <label>Day and Time</label>
            <input type="text" placeholder="Add day and time"></input>
        </div>
        <div className="form-input">
            <label>Set Reminder</label>
            <input type="checkbox"></input>
        </div>
        <input type="submit" value="Save Task"></input>
    </form>
  )
}

export default AddTask