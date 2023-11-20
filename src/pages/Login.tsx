import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { logInOutline, personCircleOutline } from 'ionicons/icons'
import fcc from '../assets/fcc_secondary_small.svg'

const Login: React.FC = () => {

    const login = (event: any) => {
        event.preventDefault()
        console.log('logged in')
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'success'}>
                    <IonTitle>Free Code Camp </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent >
                <img src={fcc} alt='logo'/>
                <IonCard>
                    <IonCardContent>
                        <form onSubmit={login}>
                            <IonInput fill='outline' labelPlacement='floating' label='Email' type='email' placeholder='example@gmail.com'></IonInput>
                            <IonInput className='ion-margin-top' fill='outline' labelPlacement='floating' label='password' type='password'></IonInput>
                            <IonButton type='submit' expand='block' className='ion-margin-top'>
                                Login
                                <IonIcon icon={logInOutline} slot='end' />
                            </IonButton>
                            <IonButton routerLink='/register' color={'tertiary'} type='submit' expand='block' className='ion-margin-top'>
                                Register
                                <IonIcon icon={personCircleOutline} slot='end' />

                            </IonButton>

                        </form>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Login;