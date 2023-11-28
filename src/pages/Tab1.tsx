import { Camera, CameraResultType } from '@capacitor/camera';
import { IonButton, IonButtons, IonContent, IonHeader, IonImg, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';

const Tab1: React.FC = () => {

    const [image, setImage] = useState<any>()

    const takePicture =async () => {
        const image = await Camera.getPhoto({
             quality: 90,
             allowEditing: false,
             resultType: CameraResultType.Base64
        })

        const img = `data:image/jpeg;base64, ${image.base64String}`
        setImage(img)
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start' >
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Image example </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                 <IonButton expand='full' onClick={takePicture}>Load picture</IonButton>
                 <IonImg src={image} alt=''  />
            </IonContent>
        </IonPage>
    );
};

export default Tab1;