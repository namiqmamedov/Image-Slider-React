import {useRef, useState} from 'react'
import './App.css'
import ReactImageMagnify from 'react-image-magnify'

const images = [
  "./src/assets/giay01.jpg",
  "./src/assets/giay02.jpg",
  "./src/assets/giay03.jpg",
  "./src/assets/giay04.jpg",
  "./src/assets/giay05.jpg",

]

function App() {
    const [img, setImg] = useState(images[0])
    const hoverHandler = (image,i) =>{
        setImg(image);
        refs.current[i].classList.add('active');
        for(var img = 0; images.length; img++){
          if(i!==img){
            refs.current[img].classList.remove('active');
          }
        }
    };

    const refs = useRef([])
    refs.current = [];
    const addRefs = (el) => {
      if(el && !refs.current.includes(el)){
        refs.current.push(el);
      }
    }

    return (
        <div className="container">
            <div className='left'>
              <div className="left_1">
                {
                  images.map((image,i) => (
                      <div className={i == 0 ? "img_wrap active" : "img_wrap"}
                      ref={addRefs}  key={i} onMouseOver={() => hoverHandler(image,i)}>
                          <img src={image} alt="" />
                      </div>
                  ))
                }
              </div>
              <div className="left_2">
              <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: img,
                        },
                        largeImage: {
                            src: img,
                            width: 1200,
                            height: 1800
                        }
                    }} />
              </div>
            </div>
            <div className='right'></div>
        </div>
    )
}

export default App
