import React from 'react';
import background from '../assets/images/background_3 1.png';
import Image from 'next/image';

const BackgroundPhoto = () => <Image
    src={background}
    layout='intrinsic'
    alt='AndreaFrittella.com'
/>

export { BackgroundPhoto }