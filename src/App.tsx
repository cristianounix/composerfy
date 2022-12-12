import { useState } from 'react';
import { useDockerImages } from './hooks/useImages';

export default function App() {
  const [dockerImage, setDockerImage] = useState<string>()
  const { data: images } = useDockerImages({imageName: dockerImage})
  return (
    <div>
        <div>
          <div>
            <h2>ComposerFy</h2>
            <span>Easy and fast docker-compose creation.</span>
          </div>
 
          <div>
            <button
              onClick={() => {
                setDockerImage('nginx')
              }}>
              Start
            </button>
            <button  onClick={() => {
                setDockerImage('')
              }}>Cancel</button>
          </div> 
      </div>

      <div>
          <pre>Hello world</pre>
      </div>
      </div>
  );
}