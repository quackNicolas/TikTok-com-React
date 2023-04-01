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
          url="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/rNoP8ylHeix7ivq0k/videoblocks-230-premiere-pro-elements-big-pack_h00k3javu__p__857480c74672a6d7007c9b9aca94f318__P360.mp4"
        />
        <Video 
          likes={200} 
          messages={300} 
          shares={1500}
          name="Nicolas" 
          description="Video panoramico da cidade" 
          music="Musica epicamente epico mais epico impossivel"
          url="https://assets.mixkit.co/videos/preview/mixkit-the-spheres-of-a-christmas-tree-2720-large.mp4"
        />
        <Video 
          likes={200} 
          messages={300} 
          shares={1500}
          name="Nicolas" 
          description="Video panoramico da cidade" 
          music="Musica epicamente epico mais epico impossivel"
          url="https://assets.mixkit.co/videos/preview/mixkit-man-under-colored-lights-1241-large.mp4"
        />
        <Video 
          likes={200} 
          messages={300} 
          shares={1500}
          name="Nicolas" 
          description="Video panoramico da cidade" 
          music="Musica epicamente epico mais epico impossivel"
          url="https://assets.mixkit.co/videos/preview/mixkit-red-frog-on-a-log-1487-large.mp4"
        />
         
        
      </div>
    </div>
  );
}

export default App;
