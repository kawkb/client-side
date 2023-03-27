import React, { useState } from 'react';

interface Props {
  onToggle: (isToggled: boolean) => void;
  untoggledImage: string;
  toggledImage: string;
}

const CustomToggleButton = ({ onToggle, untoggledImage, toggledImage }: Props) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleClick = () => {
    setIsToggled(!isToggled);
    onToggle(!isToggled);
  };

  return (
    <div
	  className='toggle-slider'
      onClick={handleClick}
      style={{
		
        width: '40%',
        height: '20%',
        border: '4px solid var(--dark)',
        borderRadius: '25px',
        position: 'relative',
        cursor: 'pointer',
      }}
    >
      <img
        src={isToggled ? toggledImage : untoggledImage}
        alt="Toggle Button"
        style={{
          position: 'absolute',
          top: '-45px',
          left: isToggled ? '-30%' : '65%',
          transition: 'left 0.2s ease-in-out',
          width: '100px',
          height: '100px',
        //   borderRadius: '50%',
        //   border: '1px solid #ccc',
        }}
      />
    </div>
  );
};

export default CustomToggleButton;
