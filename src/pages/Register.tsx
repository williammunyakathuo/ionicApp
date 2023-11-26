import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonPage, IonRow, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { checkmarkDoneCircleOutline } from 'ionicons/icons';
import React from 'react';

const Register: React.FC = () => {
    const router = useIonRouter()

    const register = (event: any) => {
        event.preventDefault()
        router.goBack()
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'success'}>
                    <IonButtons slot='start'>
                        <IonBackButton defaultHref='/login' />
                    </IonButtons>
                    <IonTitle>Create account </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent >
                <IonGrid fixed>
                    <IonRow className='ion-justify-content-center'>
                        <IonCol size='12' sizeMd='8' sizeLg='6' sizeXl='4'>
                            <IonCard>
                                <IonCardContent>
                                    <form onSubmit={register}>
                                        <IonInput fill='outline' labelPlacement='floating' label='Email' type='email' placeholder='example@gmail.com'></IonInput>
                                        <IonInput className='ion-margin-top' fill='outline' labelPlacement='floating' label='Password' type='password'></IonInput>
                                        <IonButton type='submit' expand='block' color={'tertiary'} className='ion-margin-top'>
                                            Register
                                            <IonIcon icon={checkmarkDoneCircleOutline} slot='end' />
                                        </IonButton>


                                    </form>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>


            </IonContent>
        </IonPage>
    );
};

export default Register;