import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';

function CheckBoxWithImage() {
    const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event:any) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Div>
      <label>
        <input
          type="radio"
          checked={selectedOption === 'History'}
          onChange={handleOptionChange}
          value="History"
        />History
        <Image width={64} height={64} src="https://cdn.discordapp.com/icons/925136890926075964/cb0d7e0ba7f5e63e182c7bc9d85aef1e.webp" alt="radio Image" />
      </label>
      <label>
        <input
          type="radio"
          checked={selectedOption === 'Asgard'}
          onChange={handleOptionChange}
          value="Asgard"
        />Asgard
        <Image width={64} height={64} src="https://cdn.discordapp.com/icons/1032494167571574844/5aa185249e4b4b8f9bab392aa7cbc53c.webp" alt="radio Image" />
      </label>
      <label>
        <input
          type="radio"
          checked={selectedOption === 'The Classic'}
          onChange={handleOptionChange}
          value="The Classic"
        />The Classic
        <Image width={64} height={64} src="https://cdn.discordapp.com/icons/762114374885179392/0fb522f68e22d0090ed0cd55c531ade0.webp" alt="radio Image" />
      </label>
      <label>
        <input
          type="radio"
          checked={selectedOption === 'Funline'}
          onChange={handleOptionChange}
          value="Funline"
        />Funline
        <Image width={64} height={64} src="https://cdn.discordapp.com/icons/1049120280410345542/e08005a5a8c58932aed079206ddc922b.webp" alt="radio Image" />
      </label>
      <label>
        <input
          type="radio"
          checked={selectedOption === 'Outro'}
          onChange={handleOptionChange}
          value="Outro"
        />
         {selectedOption === 'Outro' ? <input /> : "Outro"}
      </label>
      
    </Div>
  );
}

export default CheckBoxWithImage;

const Div = styled.div`
overflow: auto;
    display: flex;
    flex-wrap: nowrap;
    column-gap: 30px;
    display: 100%;
    max-width: 740px;
    img{
        border-radius: 50%;
    }
    overflow-y: scroll;

    label{
        height: 90px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
`