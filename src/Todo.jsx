import React, { useState } from "react";
import { Data } from "./data";
import { v4 as uuidv4 } from "uuid";
import { FaTrash, FaCheck } from "react-icons/fa";

const Todo = () => {
  const [data, setData] = useState(Data);
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    if (title) {
      setData([
        ...data,
        {
          id: uuidv4(),
          title: title,
          done: false,
        },
      ]);
      setTitle("");
    }
  };

  const handleDelete = (dataId) => {
    setData(data.filter((d) => d.id !== dataId));
  };

  const handleToggleDone = (d) => {
    setData(
      data.map((todo) => {
        if (todo.id === d.id) {
          return { ...todo, done: !todo.done };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <>
      <div className="w-full h-[600px] md:w-96 bg-cardBackgroundColor rounded-md">
        <div className="h-full relative">
          {/* CREATE */}
          <div className="flex justify-between mb-3">
            <input
              type="text"
              required
              placeholder="Task for today"
              className="w-full m-3 rounded-md p-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <button
              className="text-cardBackgroundColor my-3 mr-3"
              onClick={handleAdd}
              disabled={!title}
            >
              ADD
            </button>
          </div>

          {/* GET ALL / Todo */}
          <div className="h-[400px] text-cardBackgroundColor font-medium overflow-y-auto overscroll-y-none bg-white mx-3 rounded">
            {data.map((d) => {
              return (
                <div key={d.id} className="flex justify-between m-2 p-2 ">
                  <span
                    className={
                      d.done
                        ? "line-through decoration-red-500 decoration-2"
                        : "no-underline"
                    }
                  >
                    {d.title}
                  </span>
                  <div className="flex">
                    <a
                      onClick={() => handleToggleDone(d)}
                      className=" text-cardBackgroundColor mx-1"
                    >
                      <FaCheck />
                    </a>
                    <a
                      onClick={() => handleDelete(d.id)}
                      className=" text-cardBackgroundColor mx-1"
                    >
                      <FaTrash />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-[80px] h-[40px] bg-white font-medium ml-3 my-3 flex items-center justify-center p-2 rounded">
            <span className="text-cardBackgroundColor">
              {data.length} Tasks
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
