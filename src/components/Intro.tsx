import { IonButton, IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';

import React from 'react';
import fcc from '../assets/fcc_secondary_small.svg'

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css'
import './Intro.css'



interface ContainerProps {
    onFinish: () => void
}

const Intro: React.FC<ContainerProps> = ({onFinish}) => {

    const  SwiperButtonNext = ({children} : any) => {
        const swiper = useSwiper();
      
        return   <IonButton onClick={() => swiper.slideNext()} color={'danger'}>{children}</IonButton>
       
      }


    return (
        <Swiper >
            <SwiperSlide>
                <div className='ion-text-center ion-padding'>
                    <img width={'50%'} src={fcc} alt='logo' />
                </div>
                <IonText>Login into free code camp</IonText>
                <SwiperButtonNext  className="next" >Next</SwiperButtonNext>
            </SwiperSlide>
            <SwiperSlide>
                <div className='ion-text-center ion-padding'>
                    <img width={'50%'} src={fcc} alt='logo' />
                </div>
                <IonText>Welcome to free code camp</IonText>
                <SwiperButtonNext>Next</SwiperButtonNext>
            </SwiperSlide>
            <SwiperSlide>
                <div className='ion-text-center ion-padding'>
                    <img width={'50%'} src={fcc} alt='logo' />
                </div>
                <IonText>Learn with free code camp</IonText>
                <IonButton onClick={()=> onFinish()}>FINISH</IonButton>
            </SwiperSlide>

        </Swiper>
    );
};

export default Intro;