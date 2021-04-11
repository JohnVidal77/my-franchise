import React from 'react';

import Button from '../Button';

interface IWelcomeModal {
  isShowing: boolean;
  onClose(value: boolean): void;
}

const WelcomeModal: React.FC<IWelcomeModal> = ({
  isShowing,
  onClose,
}: IWelcomeModal) => {
  if (!isShowing) return <></>;

  return (
    <div className="absolute top-0 left-0 right-0 w-full h-screen backdrop-filter backdrop-blur-sm z-30 flex justify-center items-center">
      <div className="absolute top-0 left-0 right-0 w-full h-screen bg-black opacity-50 z-40" />
      <div className="w-5/6 md:w-1/2 min-h-2/4 rounded p-4 bg-white z-50">
        <h1 className="text-xl mb-4">Welcome to My Franchise Demo!</h1>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          feugiat ac ligula at venenatis. Praesent et arcu tincidunt, blandit
          orci nec, ornare velit. Ut vel tincidunt ipsum.
        </p>
        <span className="block">
          <strong>Email: </strong>test@test.com
        </span>
        <span className="block">
          <strong>Password: </strong>test
        </span>
        <div className="w-full text-center mt-4">
          <Button label="Continue!" onClick={() => onClose(false)} />
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
