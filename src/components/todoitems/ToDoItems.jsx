import React from 'react';
import "./ToDoItems.css";



const ToDoItems = (props) => {

    const { items, deleteItem } = props;

    let length = items.length;
    const ThisMap = length ? (items.map(item => {
        return (
            <div key={Math.random() * 1} className="container cota">
                <div>{item.name}</div>
                <div>{item.age}</div>
                <div onClick={() => deleteItem(item.id)} className="onclick">&times;</div>
            </div>
        )

    })
    ) : (
        <p>There is no item to show</p>
    )



    return (

        <div className='Actoin'>
          <div className="container">
           <div className="soma">
            <span className="span">Name</span>
            <span className="span">Age</span>
            <span className="span">Action</span>
            </div>
            {ThisMap}
            </div>
        </div>
    )
}

export default ToDoItems