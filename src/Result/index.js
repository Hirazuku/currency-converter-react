import "./style.css";

export const Result = ({ amount }) => (

    <>
        {amount !== undefined && (
            <>
                {
                    amount.map(task => (
                        <li
                            className={`task__item task__item--row`}
                            key={task.id}
                        >
                            <span >{task.number}&nbsp;PLN&nbsp;=&nbsp;{task.changednumber}&nbsp;{task.content}</span>
                        </li>
                    ))
                }
            </>
        )}
    </>
);