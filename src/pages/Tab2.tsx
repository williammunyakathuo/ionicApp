import { CreateAnimation, IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import React, { useRef } from 'react';

const Tab2: React.FC = () => {
    const animationRef = useRef<CreateAnimation | null>(null)
    const elementRef = useRef<HTMLDivElement | null>(null)

    useIonViewDidEnter(() =>{
        // animationRef.current?.animation.play()
    })

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start' >
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Tab 2 </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <CreateAnimation
                ref={animationRef}
                    duration={2000}
                    iterations={Infinity}
                    delay={1000}
                    keyframes={[
                        { offset: 0, transform: 'scale(1)', opacity: '1' },
                        { offset: 0.5, transform: 'scale(1.5)', opacity: '0.3' },
                        { offset: 1, transform: 'scale(1)', opacity: '1' },
                    ]}
                >
                    <IonButton>
                        Join ionic academy
                    </IonButton>
                </CreateAnimation>
                <div ref={elementRef} style={{width: 50, height: 50, backgroundColor: 'red'}}/>
            </IonContent>
        </IonPage>
    );
};

export default Tab2;