import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';

import React from 'react';
import UnsubscribeSuccess from './comp';

const UnsubScribePage = () => {
  return (
    <>
      <MainHeader version="1"></MainHeader>
      <UnsubscribeSuccess />
      <Footer></Footer>
    </>
  );
};

export default UnsubScribePage;
