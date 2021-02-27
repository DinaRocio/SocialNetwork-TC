import { FiHome } from "react-icons/fi";  

function HomeButton({goto}) {
  
  return (
    <>
      <a href="#home" className="js-to-home-link">
        <FiHome className="home-button" onClick={() => goto("main")}  />
      </a>
    </>
  );
}

export default HomeButton
