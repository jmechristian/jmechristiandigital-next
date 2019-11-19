import React from 'react';

const Colors = ({ colors }) => {
  return (
    <section id='#colors'>
      <div className='flex my-12 h-64 md:h-96 lg:pb-8 pb-0 flex-wrap'>
        {colors.map(color => (
          <div
            className='w-2/4 md:w-1/4 flex justify-center'
            style={{ backgroundColor: `${color}` }}
            key={color}
          >
            <div className='self-center font-bold text-xl md:text-3xl text-white py-8'>
              {color}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Colors;
