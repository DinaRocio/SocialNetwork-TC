import { store } from "./../store";

function BoardItem({goto}){

  

  const myBoards = store.boards.filter((board) => board.myBoards == true);
  const otherBoards = store.boards.filter((board) => board.myBoards !== true);
  
  
  return(
    <section className="boards_section">
    <h2 className="boards_section__titles">My Boards</h2>
    <ul className="my_boards board_grid" >
    {myBoards.map((myBoard) => {
      return (
          <li className="board_grid"key={myBoard.title} >
            <div className="boardItem" onClick={() => goto("showBoard")} >
              <p className="board_text">{myBoard.title}</p>
              <ul className="colaborator_list">
                <li className="colaborator_item">
                  <div className='colaborator_picture'>
                    <img src= {"https://www.labreabakery.com/sites/default/files/styles/teaser/public/2018-04/Melissa%20Trimmer%20Headshot-cropped-730.png?itok=0HnVg9_P"} alt="pic" />
                  </div>
                </li>
                <li className="colaborator_item">
                  <div className='colaborator_picture'>
                    <img src= {"https://www.leisureopportunities.co.uk/images/995586_746594.jpg"} alt="pic" />
                  </div>
                </li>
              </ul>
            </div>
          </li>
      )
    } )}
    </ul>
      <h2 className="boards_section__titles">Other Boards</h2>
      <ul className="other_boards board_grid">
      {otherBoards.map((otherBoard) => {
        return (
          <li className="board_grid" key={otherBoard.title}>
            <div className="boardItem" >
              <p className="board_text">{otherBoard.title}</p>
              <ul className="colaborator_list">
                <li className="colaborator_item">
                  <div className='colaborator_picture'>
                    <img src= {"https://www.labreabakery.com/sites/default/files/styles/teaser/public/2018-04/Melissa%20Trimmer%20Headshot-cropped-730.png?itok=0HnVg9_P"} alt="pic" />
                  </div>
                </li>
                <li className="colaborator_item">
                  <div className='colaborator_picture'>
                    <img src= {"https://www.leisureopportunities.co.uk/images/995586_746594.jpg"} alt="pic" />
                  </div>
                </li>
              </ul>
            </div>
          </li>
      )
    } )}
    </ul>
    </section>
    
  )
}

export default BoardItem