import React, { useState } from 'react';

function App() {
  const [drug1, setDrug1] = useState('');
  const [drug2, setDrug2] = useState('');
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showGif, setShowGif] = useState(false); // added state for GIF

  const handleDrug1Change = (event) => {
    setDrug1(event.target.value);
  };

  const handleDrug2Change = (event) => {
    setDrug2(event.target.value);
  };

  const handleButtonClick = async () => {
    setIsLoading(true);
    const response = await fetch('https://api.respell.ai/v1/run', {
      method: 'POST',
      headers: {
        authorization: 'Bearer d18e23df-8acc-4210-85b0-0c44894a7d8c',
        accept: 'application/json',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        spellId: 'TK--BJGsKywvtTMrQjTjD',
        spellVersionId: 'E3QiIJ_uaGF7toulngYO5',
        inputs: {
          drug_interaction_prompt: 'Output the drug interactions between the drug 1 provided and each of the drugs provided in drug 2 and also any other side effects the patient might need to know. Organize the data in a user-friendly manner.',
          drug_1: drug1,
          drug_2: drug2,
          google_prompt: 'Generate the optimal Google search query using the drugs input to find the drug interactions and the side effects of the drugs that the user needs to know.',
        },
      }),
    });

    const data = await response.json();
    const textOutput = data.outputs['text_output'];
    setOutput(textOutput);
    setIsLoading(false);
    setShowGif(true); // set showGif to true to display the GIF
  };

  const handleResetClick = () => {
    setDrug1('');
    setDrug2('');
    setOutput('');
    setShowGif(false); // set showGif to false to hide the GIF
  }

  const handleReset = () => {
    setDrug1('');
    setDrug2('');
    setOutput('');
    setShowGif(false); // set showGif to false to hide the GIF
  };
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundSize: 'cover',
      minHeight: '100vh'
    }}>
     <img src="https://cdn.discordapp.com/attachments/1091569594046623824/1097200448538165418/DrugRadar-removebg-preview.png" alt="DrugRadar logo" style={{ width: '300px', marginBottom: '50px' }} />
      <div style={{ marginBottom: '10px' }}>
        <label style={{ marginRight: '10px', color: '#00012f' }}>Drug 1:</label>
        <input type="text" placeholder="Ex: Acetaminophen 325mg" value={drug1} onChange={handleDrug1Change} />
      </div>
      
      
      <div style={{ marginBottom: '10px' }}>
        <label style={{ marginRight: '10px', color: '#00012f' }}>Drug 2:</label>
        <input type="text" placeholder="Ex: Tamoxifen 10mg"value={drug2} onChange={handleDrug2Change} />
      </div>
      <button style={{ marginBottom: '10px' }} onClick={handleButtonClick} disabled={isLoading}>
        {isLoading ? <i className="fa fa-spinner fa-spin"></i> : 'Submit'}
      </button>
      {output && (
        <div style={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.3)', 
          padding: '10px', 
          borderRadius: '5px' 
      }}>
        <h2 style={{ color: '#00012f' }}>Output:</h2>
        <pre style={{ whiteSpace: 'pre-wrap', color: '#00012f '}}>{output}</pre>
      </div>
  
    )}

    <button style={{ marginBottom: '10px' }} onClick={handleResetClick}>
      Reset
    </button>
  </div>
);
}

export default App;
