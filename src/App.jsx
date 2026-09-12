import React from 'react';
import MobileApp from './MobileApp';
import DesktopApp from './DesktopApp';

export default function App() {
  return (
    <>
      <div className="md:hidden">
        <MobileApp />
      </div>
      <div className="hidden md:block">
        <DesktopApp />
      </div>
    </>
  );
}
