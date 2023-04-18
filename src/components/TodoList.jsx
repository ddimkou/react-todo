import React from "react";

function TodoList({ todos, deleteTodo }) {
  return (
    <ul className="list">
      {todos.map((todo, index) => {
        return (
          <li key={index}>
            <label htmlFor="">
              <input type="checkbox" />
              {todo}
            </label>
            <button
              className="btn btn-danger"
              onClick={() => deleteTodo(index)}
            >
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;

// import React from "react";

// function todo({ todos, deleteTodo }) {
//   return (
//     <ul className="list">
//       {todos.map((todo, index) => {
//         return (
//           <li key={index}>
//             <label htmlFor="">
//               <input type="checkbox" />
//               {todo}
//             </label>
//             <button
//               className="btn btn-danger"
//               onClick={() => deleteTodo(index)}
//             >
//               delete
//             </button>
//           </li>
//         );
//       })}
//     </ul>
//   );
// }

// export default todo;
