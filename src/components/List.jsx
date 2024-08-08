import { MdDone } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { useState, useEffect } from "react";


const tableheadings = [
  ' No.', 'Task', 'Priority', 'Actions'
]
const List = ({ tasks,
  color,
  onChangeTask,
  handleDeleteTask,
  handleselection,
  handleEditTask
}) => {
  const [tasklists, setTasklists] = useState(tasks)
  
  const priority = [
    'Low Priority', 'Medium Priority', 'High Priority'
  ]
  useEffect(() => {
    setTasklists(tasks);
  }, [tasks]);

  function bgcolor(priority) {
    switch (priority) {
      case "Low Priority":
        return { backgroundColor: "yellow" };

      case "Medium Priority":
        return { backgroundColor: "orange" }
      case "High Priority":
        return { backgroundColor: "red" }
      default:
        return {};
    }
  }


  const handleid = (task) => {
    return tasks.findIndex(t => t.id === task.id) + 1;
  };

  return (
    <>

      <table className="table text-white mb-0" style={{ backgroundColor: "aliceblue", width: "40rem" }}>
        <thead>
          <tr>
            {tableheadings.map((heading, index) => (
              <th scope="col" key={index}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tasklists.map((task, index) => (
            <tr className="fw-normal" key={task.id} >
              <td className="align-middle" >
                <span style={{ margin: "0 2rem" }}>{handleid(task)}</span>
              </td>
              <td className="align-middle">
                {task.isEditing  ? (<input value={task.task}
                  onChange={(e)=>handleEditTask(task.id,e.target.value)}
                  style={color} />) : (<span>{task.task}</span>)}
              </td>
              <td className="align-middle">
                <h6 className="mb-0">


                  {task.priority && !task.isEditing  ? (
                    <div style={bgcolor(task.priority)}>{task.priority}</div>
                  ) :
                 <select onChange={(e) => handleselection(e, task)} value={task.priority}>
                      <option value="" disabled>Select priority</option>
                      {priority.map(pri =>
                        <option value={pri} key={pri}>{pri}</option>
                      
                      )}
                   
                   </select>
                  }
                </h6>
              </td>
              <td className="align-middle">
                <button title={task.isEditing ? "Save" : "Edit"} onClick={() => onChangeTask(task)} >
                  {task.isEditing ?(
                    <MdDone style={{ color: "orange", margin: "0 1rem" }} />
                  ) : (
                    <FaEdit style={{ color: "orange", margin: "0 1rem" }} />
                  )}
                </button>

                <button title="Remove" onClick={() => handleDeleteTask(task)}>
                  <FaTrashAlt style={{ color: "red", margin: "0 1rem" }} />
                </button>
              </td>
            </tr>


          ))}

        </tbody>


      </table>
    </>
  )
}

export default List
