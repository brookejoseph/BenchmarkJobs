import './App.css';
import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [data, setData] = useState('');
  const inputRef = useRef(null);
  const [currentOption, setCurrentOption] = useState('drop');
  const [benchmarkUrl, setBenchmarkUrl] = useState('');

  useEffect(() => {
    fetch('/helloworld')
      .then(res => res.json())
      .then(data => {setData(data.hello)
        console.log(data.hello)
      });
  }, []);

  const handleSubmit = async () => {
    try {
      console.log('within try');
      const response = await fetch('/helloworld/grabbinginput', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ benchmarkUrl }),
      });
      const data = await response.json();
      console.log('response', data);
    } catch (error) {
      console.error('There was an error sending the data!', error);
    }
  };
  const handleRunJob = () => {
    
  };

  const handleCompareJobs = () => {
    // Handle compare jobs logic here
  };


  
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
    {currentOption === 'drop' && ( 
      <>
      <h3>Pick which job you're doing</h3>
      <select onChange={(e) => setCurrentOption(e.target.value)} value={currentOption}>
        <option value="submit">Submit a Job</option>
        <option value="run">Run a Job</option>
        <option value="compare">Compare Jobs</option>
      </select>
      </>  
      )}

      {currentOption === 'submit' && (
        <div>
          <h1>Submit your benchmarks here</h1>
          <input
            type="text"
            value={benchmarkUrl}
            onChange={(e) => setBenchmarkUrl(e.target.value)}
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}

      {currentOption === 'run' && (
        <div>
          <h1>Run a Job</h1>
          <button onClick={handleRunJob}>Run Job</button>
        </div>
      )}
      
      {currentOption === 'compare' && (
        <div>
          <h1>Run a Job</h1>
          <button onClick={handleRunJob}>Run Job</button>
        </div>
      )}
    </div>
  );
}

export default App;
