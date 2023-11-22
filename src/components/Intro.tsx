import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import fcc from '../assets/fcc_secondary_small.svg'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'

interface ContainerProps {
    onFinish: () => void
}

const Intro: React.FC<ContainerProps> = () => {

    return (
        <Swiper>
            <SwiperSlide>
                <div className='ion-text-center ion-padding'>
                    <img width={'50%'} src={fcc} alt='logo' />
                </div>
                <IonText>Login into free code camp</IonText>
            </SwiperSlide>
            <SwiperSlide>
                <div className='ion-text-center ion-padding'>
                    <img width={'50%'} src={fcc} alt='logo' />
                </div>
                <IonText>Welcome to free code camp</IonText>
            </SwiperSlide>
            <SwiperSlide>
                <div className='ion-text-center ion-padding'>
                    <img width={'50%'} src={fcc} alt='logo' />
                </div>
                <IonText>Learn with free code camp</IonText>
            </SwiperSlide> 
            
        </Swiper>
    );
};

export default Intro;