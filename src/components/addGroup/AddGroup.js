import style from "./AddGroup.module.css"
const AddGroup = (props) => {
   console.log(props)
    return ( 
        <div className={style.AddGroup}>
            <div className={style.titleGroup}>Insert your group : </div>
            <div>
                <input 
                 className={style.inputGroup}
                 type="text" 
                 value={props.inputGroup} 
                 onChange={props.changeInput} 
               />
            </div>

            <div>
                <button 
                className={style.buttonGroup}
                 onClick={props.addNewGroup}>
                    Add group
                </button>
            </div>
        </div>
    );
}
 
export default AddGroup;