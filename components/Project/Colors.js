import React from 'react';

const Colors = () => {
  return (
    <section id="#colors">
      <div className="flex my-12 h-64 md:h-96 lg:pb-8 pb-0 flex-wrap">
        <div className="bg-primary w-2/4 md:w-1/4 flex justify-center">
          <div className="self-center font-bold text-xl md:text-3xl text-white py-8">
            #45tggh
          </div>
        </div>
        <div className="bg-secondary w-2/4 md:w-1/4 flex justify-center">
          <div className="self-center font-bold text-xl md:text-3xl text-white py-8">
            #ff4433
          </div>
        </div>
        <div className="bg-highlight w-2/4 md:w-1/4 flex justify-center">
          <div className="self-center font-bold text-xl md:text-3xl text-white py-8">
            #yt7789
          </div>
        </div>
        <div className="bg-lowlight w-2/4 md:w-1/4 flex justify-center">
          <div className="self-center font-bold text-xl md:text-3xl text-white">
            #ffgb67
          </div>
        </div>
      </div>
    </section>
  );
};

export default Colors;
