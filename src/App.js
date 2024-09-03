
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Info from './Views/Info';
import OfficialVerification from './Views/OfficialVerification';
import React, { useState, useMemo, useEffect, useCallback, useRef } from 'react';

const App = ()=> {
  const [showOfficialVerification, setShowOfficialVerification] = useState(false);
  const verticalModeAspect = 1;
    const [useVerticalMode, setUseVerticalMode] = useState(window.innerHeight / window.innerWidth > verticalModeAspect);

    window.addEventListener('resize', function (event) {
        updateTimeline();
    });

    const updateTimeline = () =>{
        if (window.innerHeight / window.innerWidth > verticalModeAspect) {
            setUseVerticalMode(true);
        } else {
            setUseVerticalMode(false);
        }
    }

    useEffect(()=>{
        console.log('[change layout] Vertical:', useVerticalMode);
    }, [useVerticalMode]);

  return (
    <BrowserRouter>
      <Info 
        setShowOfficialVerification={setShowOfficialVerification} 
        useVerticalMode={useVerticalMode}/>
      {
        showOfficialVerification &&
        <OfficialVerification useVerticalMode={useVerticalMode}/>
      }
    </BrowserRouter>
      
  );
}

export default App;
