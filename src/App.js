import React, { useState } from "react";
import "./styles.css";

import "./App.css";
import Board from "./components/Board/Board.js";
import Editable from "./components/Editable/Editable.js";

function App() {
  const [query, setQuery] = useState(",.,");

  const [boards, setBoards] = useState([
    {
      id: 1,
      title: "ToDo",
      cards: [
        {
          id: 11,
          title: "Card1"
        },
        {
          id: 12,
          title: "Card2"
        },
        {
          id: 13,
          title: "Card11"
        }
      ]
    },
    {
      id: 2,
      title: "Development",
      cards: [
        {
          id: 21,
          title: "Card3"
        },
        {
          id: 22,
          title: "React Routing"
        }
      ]
    },
    {
      id: 3,
      title: "Testing",
      cards: [
        {
          id: 31,
          title: "Card5"
        },
        {
          id: 32,
          title: "KanBan board"
        }
      ]
    },
    {
      id: 4,
      title: "Done",
      cards: [
        {
          id: 41,
          title: "Card7"
        },
        {
          id: 42,
          title: "Contact List"
        }
      ]
    }
  ]);

  const addCard = (title, bid) => {
    const card = {
      id: Date.now + Math.random(),
      title
    };
    const index = boards.findIndex((item) => item.id === bid);
    if (index < 0) return;

    const tempBoards = [...boards];
    tempBoards[index].cards.push(card);
    setBoards(tempBoards);
  };

  const removeCard = (cid, bid) => {
    const bIndex = boards.findIndex((item) => item.id === bid);
    if (bIndex < 0) return;
    const cIndex = boards[bIndex].cards.findIndex((item) => item.id === cid);
    if (cIndex < 0) return;
    const tempBoards = [...boards];
    tempBoards[bIndex].cards.splice(cIndex, 1);
    setBoards(tempBoards);
  };

  const addBoard = (title) => {
    setBoards([
      ...boards,
      {
        id: Date.now() + Math.random(),
        title
      }
    ]);
  };

  const removeBoard = (bid) => {
    const tempBoards = boards.filter((item) => item.id !== bid);
    setBoards(tempBoards);
  };
  const data = boards?.map((item) =>
    item.cards?.filter((data) => data.title.includes(query))
  );
  const setQueryes = (e) => {
    setQuery(e.target.value.toLowerCase() === "" ? ",.," : e.target.value);
  };

  // if (
  //   boards.map((data) =>
  //     data.cards.map((titlese) => console.log(titlese.title.includes("uuu")))
  //   )
  // ) {
  //   setBoards([
  //     {
  //       id: 1,
  //       title: "ToDo",
  //       cards: [
  //         {
  //           id: 41,
  //           title: "Card7"
  //         }
  //       ]
  //     },
  //     {
  //       id: 2,
  //       title: "Development",
  //       cards: []
  //     },
  //     {
  //       id: 3,
  //       title: "Testing",
  //       cards: []
  //     },
  //     {
  //       id: 4,
  //       title: "Done",
  //       cards: []
  //     }
  //   ]);
  // }

  // console.log(oldboards)
  // console.log(query)

  //  console.log(boards.map((data)=>data.card.filter((cards)=>cards.title)))
  // console.log(boards);
  // const p=boards.map((item) => item.cards.filter((data) => data.title));
  // console.log(p)

  return (
    <>
      <div className="app">
        <div className="app_navbar">
          <h2>KanBan Boards</h2>

          <div className="app_navbar_search">
            <input
              type="text"
              placeholder="search..."
              className="search"
              onChange={setQueryes}
            />
          </div>
        </div>
      </div>
      <div className="app">
        <div className="app_outer">
          <div className="app_boards">
            {boards.map((item) => (
              <Board
                key={item.id}
                board={item}
                removeBoard={removeBoard}
                addCard={addCard}
                removeCard={removeCard}
                data={data}
                query={query}
              />
            ))}

            <div className="app_boards_board">
              <Editable
                text="Add Board"
                placeholder="Enter board Name"
                onSubmit={(value) => addBoard(value)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
