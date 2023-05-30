import React, { useState } from 'react';
import './styles.css';

const App = () => {
  const [layout, setLayout] = useState('collage');

  const changeLayout = (newLayout) => {
    setLayout(newLayout);
  };

  return (
    <div>
      <div className="controls">
        <button onClick={() => changeLayout('collage')}>Collage</button>
        <button onClick={() => changeLayout('masonry')}>Masonry</button>
        <button onClick={() => changeLayout('grid')}>Grid</button>
        <button onClick={() => changeLayout('strip')}>Strip</button>
        <button onClick={() => changeLayout('column')}>Column</button>
        <button onClick={() => changeLayout('bricks')}>Bricks</button>
      </div>

      <div className={`image-grid ${layout}`} id="imageGrid">
        <img src="https://source.unsplash.com/user/c_v_r/1900x800" alt="Image 1" />
        <img src="https://source.unsplash.com/user/c_v_r/800x1200" alt="Image 2" />
        <img src="https://source.unsplash.com/user/c_v_r/1000x500" alt="Image 3" />
        <img src="https://source.unsplash.com/user/c_v_r/1200x600" alt="Image 4" />
        <img src="https://source.unsplash.com/user/c_v_r/900x900" alt="Image 5" />
        <img src="https://source.unsplash.com/user/c_v_r/700x1000" alt="Image 6" />
      </div>
    </div>
  );
};

export default App;

