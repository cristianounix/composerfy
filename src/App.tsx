// import React from 'react';
// import logo from './logo.svg';
import { FormEvent, useCallback, useRef, useState } from 'react';
import './App.css';
import { Document, initialData } from './Models';

function App() {
  const formRef = useRef<any>()
  const [dockerCompose, setDockerCompose] = useState<Document>(initialData)


  const handleFormSubmit = useCallback((event: any) => {
    event.preventDefault()
    const data = new FormData(event.target);
    console.log('data', data)
    console.log('data', )
    data.forEach((d) => {
      console.log('>>>', d)
    })
    
    setDockerCompose((oldData: any) => {

      const newDocument: Document = {
        ...oldData
      }

      console.log('newDocument', newDocument)
      return newDocument
    })
  },[])


  return (
    <div className="App">

      <div className='docker-compose-controls'>
        <form onSubmit={handleFormSubmit} ref={formRef}>
        <div>
        <div>
          <div>
            Service Name 
          </div>
          <div>
            <input type={"text"} name="serviceName" />
          </div>
        </div>
        <div>
          <div>Image</div>
          <div>
            <input type={"text"} name="image" />
          </div>
          <div>Version</div>
          <div>
            <input type={"text"} name="version" />
          </div>
        </div>
        <div>
          <div>Port Mapping:</div>
          <div>Exposed Port</div>
          <div>Internal Port</div>
        </div>
        <div>
          <div>Volumes Mapping:</div>
          <div>Local Dir/File</div>
          <div>Internal Dir/File</div>
        </div>
        <div>
          <div>Network:</div>
          <div>Create or Select a network</div>
          <div>
            <select>
              <option>default</option>
            </select>
          </div>
        </div>
        <div>
          <button type='submit'>Criar 2</button>
        </div>
        </div>
        </form>
      </div>

      <div className='preview-docker-compose-structure'>
        {JSON.stringify(dockerCompose)}
      </div>
      <div className='preview-docker-compose-structure-yml'>
        {JSON.stringify(dockerCompose)}
      </div>
    </div>
  );
}

export default App;
