import "./App.css";
import Video from "./pages/Video";

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video 
          likes={100} 
          messages={200} 
          shares={300} 
          name="Nicolas" 
          description="Video panoramico da cidade" 
          music="Musica epica"
          url="https://v4.cdnpk.net/videvo_files/video/free/2019-01/large_watermarked/190111_04_TaksinBridge_Drone_02_preview.mp4"
        />
        <Video 
          likes={200} 
          messages={300} 
          shares={1500}
          name="Nicolas" 
          description="Video panoramico da cidade" 
          music="Musica epicamente epico mais epico impossivel"
          url="https://v4.cdnpk.net/videvo_files/video/free/2019-01/large_watermarked/190111_04_TaksinBridge_Drone_02_preview.mp4"
        />
        <Video 
          likes={200} 
          messages={300} 
          shares={1500}
          name="Nicolas" 
          description="Video panoramico da cidade" 
          music="Musica epicamente epico mais epico impossivel"
          url="https://v4.cdnpk.net/videvo_files/video/free/2019-01/large_watermarked/190111_04_TaksinBridge_Drone_02_preview.mp4"
        />
        <Video 
          likes={200} 
          messages={300} 
          shares={1500}
          name="Nicolas" 
          description="Video panoramico da cidade" 
          music="Musica epicamente epico mais epico impossivel"
          url="https://v4.cdnpk.net/videvo_files/video/free/2019-01/large_watermarked/190111_04_TaksinBridge_Drone_02_preview.mp4"
        />
         
        
      </div>
    </div>
  );
}

export default App;
