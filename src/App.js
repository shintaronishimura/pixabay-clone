import logo from "./logo.svg";
import "./App.css";
import ImageGrallery from "./ImageGrallery";
import { useRef, useState } from "react";

function App() {
  const [fetchData, setFetchData] = useState([]);
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ref.current.value);

    const endpointURL = `https://pixabay.com/api/?key=38291029-1ab339f33dd0c07ed5bc772c3&q=${ref.current.value}&image_type=photo`;
    fetch(endpointURL)
      .then((response) => response.json())
      .then((data) => {
        setFetchData(data);
      });
  };

  return (
    <div className="container">
      <h2>My Pixabay</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="画像を探す" ref={ref} />
      </form>
      <ImageGrallery />
    </div>
  );
}

export default App;
