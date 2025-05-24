import { useState, useContext } from 'react';
import { TodoContext } from '../store/TodoContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
export default function InsertTodo() {
    const [inputState, setInputState] = useState('');
    const { addTodo } = useContext(TodoContext);

    function saveInputText(insertedText) {
        if (insertedText.trim !== '') {
            setInputState(insertedText);
            addTodo(inputState);
            setInputState('');   
        }
    }

    return(
        <div>
            <input type="text" placeholder="할 일을 입력하세요" value={inputState} onChange={(event) => setInputState(event.target.value)}></input>
            <div onClick={(text) => saveInputText(text)}>
                <FontAwesomeIcon icon={faPlus} />
            </div>
        </div>
    );
}
