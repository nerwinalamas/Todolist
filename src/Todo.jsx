import React, { useState } from "react";
import { Data } from "./data";
import { v4 as uuidv4 } from 'uuid';
import { FaTrash, FaCheck } from "react-icons/fa";

const Todo = () => {
  const [data, setData] = useState(Data);
  const [title, setTitle] = useState("");
  const [toggleDone, setToggleDone] = useState(false);

  const handleAddClick = () => {
    if (title === "") return false
    setData([
      ...data,
      {
        id: uuidv4(),
        title: title,
        done: false
      },
    ]);
    setTitle("");
  };

  const handleDeleteClick = (dataId) => {
    setData(data.filter((d) => d.id !== dataId));
  };

  const handleDoneClick = (d) => {
    setData(data.map(todo => {
      if (todo.id === d.id) {
        return {...todo, done: !todo.done}
      } else {
        return todo
      }
    }))
  };

  return (
    <div className="w-full h-[500px] md:w-96 bg-cardBackgroundColor p-2 rounded-md">
      <div className="">
        {/* CREATE */}
        <div className="flex justify-between mb-5">
          <input 
            type="text"
            required
            placeholder="Task for today"
            className="w-full mr-2 rounded-md p-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
          className="text-cardBackgroundColor" 
          onClick={handleAddClick}
          disabled={!title}
          >ADD</button>
        </div>

        {/* GET ALL / Todo */}
        <div className="max-h-[410px] text-white overflow-y-auto">
          {data.map((d) => {
            return (
              <div key={d.id} className="flex justify-between m-2 p-2 ">
                <span className={d.done ? "line-through decoration-red-500 decoration-2" : "no-underline"}>{d.title}</span>
                <div className="flex">
                  <a
                    onClick={() => handleDoneClick(d)}
                    className=" text-white mx-1"
                  >
                    <FaCheck />
                  </a>
                  <a
                    onClick={() => handleDeleteClick(d.id)}
                    className=" text-white mx-1"
                  >
                    <FaTrash />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Todo;
