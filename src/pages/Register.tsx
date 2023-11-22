import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { checkmarkDoneCircleOutline} from 'ionicons/icons';
import React from 'react';

const Register: React.FC = () => {
    const router = useIonRouter()

    const register = (event: any) => {
        event.preventDefault()
        console.log('logged in')
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

            
            <IonCard>
                <IonCardContent>
                    <form onSubmit={register}>
                        <IonInput fill='outline' labelPlacement='floating' label='Email' type='email' placeholder='example@gmail.com'></IonInput>
                        <IonInput className='ion-margin-top' fill='outline' labelPlacement='floating' label='password' type='password'></IonInput>
                        <IonButton type='submit' expand='block' color={'tertiary'} className='ion-margin-top'>
                            Register
                            <IonIcon icon={checkmarkDoneCircleOutline} slot='end' />
                        </IonButton>
                        

                    </form>
                </IonCardContent>
            </IonCard>
        </IonContent>
    </IonPage>
    );
};

export default Register;