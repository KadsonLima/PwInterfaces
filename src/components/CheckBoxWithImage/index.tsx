import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';



interface ServerPW {
  setServerPW:Function
}

function CheckBoxWithImage({setServerPW}:ServerPW){
    const [selectedOption, setSelectedOption] = useState('');
    
  const handleOptionChange = (event:any) => {
    setSelectedOption(event.target.value);
    setServerPW(event.target.value);
  };

  return (
    <Div>
      {/* <label className={selectedOption === 'History' ? "ativado" : "desativado"}>
        <input
          type="radio"
          name='history'
          checked={selectedOption === 'History'}
          onChange={handleOptionChange}
          value="History"
        />History
        <Image width={32} height={32} src="https://cdn.discordapp.com/icons/925136890926075964/cb0d7e0ba7f5e63e182c7bc9d85aef1e.webp" alt="radio Image" />
      </label> */}
      
      <label className={selectedOption === 'Asgard' ? "ativado" : "desativado"}>
        <input
          type="radio"
          name='asgard'
          checked={selectedOption === 'Asgard'}
          onChange={handleOptionChange}
          value="Asgard"
        />Asgard
        <Image width={32} height={32} src="https://cdn.discordapp.com/icons/1032494167571574844/5aa185249e4b4b8f9bab392aa7cbc53c.webp" alt="radio Image" />
      </label>
      <label className={selectedOption === 'The Classic' ? "ativado" : "desativado"}>
        <input
          type="radio"
          name='classic'
          checked={selectedOption === 'The Classic'}
          onChange={handleOptionChange}
          value="The Classic"
        />The Classic
        <Image width={32} height={32} src="https://cdn.discordapp.com/icons/762114374885179392/0fb522f68e22d0090ed0cd55c531ade0.webp" alt="radio Image" />
      </label>
      <label className={selectedOption === 'Funline' ? "ativado" : "desativado"}>
        <input
          type="radio"
          name='funline'
          checked={selectedOption === 'Funline'}
          onChange={handleOptionChange}
          value="Funline"
        />Funline
        <Image width={32} height={32} src="https://cdn.discordapp.com/icons/1049120280410345542/e08005a5a8c58932aed079206ddc922b.webp" alt="radio Image" />
      </label>
    </Div>
  );
}

export default CheckBoxWithImage;

const Div = styled.div`
    overflow: auto;
    display: flex;
    flex-wrap: nowrap;
    gap: 10px;
    display: 100%;
    max-width: 740px;
    img{
        border-radius: 50%;
    }
    overflow-y: scroll;

    label{
      min-width: 145px;
      height: 48px;
        display: flex;
        gap: 6px;
        justify-content: space-around;
        align-items: center;
        cursor: pointer;
        padding: 6px;
        border-radius: 6px;
    }

 
`