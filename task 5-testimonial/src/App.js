import "./styles.css";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
 

function App(){
     
  return(
  <>
    <div>
    <AwesomeSlider style={{width:"50%",margin:" 100px 0px 0px 350px" }}>
    <div>
    <div class="sub-container">
       <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2022/04/reverse-image-search-627b7e49986b0-sej-760x400.png" alt="Avatar"/>
       <p><span>Chris Fox</span> </p>
       <p>CEO at Mighty Schools.</p>
       <p>John Doe saved us from a web disaster.</p>
     </div>
     </div>
     <div>
     <div class="sub-container">
       <img src="https://us.123rf.com/450wm/massonforstock/massonforstock1111/massonforstock111100136/11147955-girl-sitting-near-tree-with-vintage-camera-photo-in-old-yellow-color-image-style-.jpg?ver=6" alt="Avatar"  />
       <p><span>Rebecca Flex</span></p>
       <p> CEO at Company.</p>
       <p>No one is better than John Doe.</p>
     </div>
     </div>

  </AwesomeSlider>
  </div>
  
  </>
  )
}
export default App;