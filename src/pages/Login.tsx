import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonPage, IonRow, IonTitle, IonToolbar, useIonLoading, useIonRouter } from '@ionic/react';
import { useEffect, useState } from 'react';
import { logInOutline, personCircleOutline } from 'ionicons/icons'
import fcc from '../assets/fcc_secondary_small.svg'
import Intro from '../components/Intro';
import { Preferences } from '@capacitor/preferences';

const INTRO_KEY = 'intro_seen'

const Login: React.FC = () => {

    const router = useIonRouter()
    const [introSeen, setIntroSeen] = useState(false)
    const [present, dismiss] = useIonLoading()
    useEffect(() => {
        const checkStorage = async () => {
            const seen = await Preferences.get({ key: INTRO_KEY })
            console.log(seen.value)
            setIntroSeen(seen.value === 'true')
        }
        checkStorage()
    }, [])

    const login = async (event: any) => {
        event.preventDefault()
        await present('Logging in ... ')

        setTimeout(async () => {
            dismiss()
            router.push('/app', 'root')
        }, 2000)
    }

    const finishIntro = () => {
        console.log('FIN')
        setIntroSeen(true)
        Preferences.set({ key: INTRO_KEY, value: 'true' });

    }
    return (
        <>
            {!introSeen ? (
                <Intro onFinish={finishIntro} />
            ) : (
                <IonPage>
                    <IonHeader>
                        <IonToolbar color={'success'}>
                            <IonTitle>Free Code Camp </IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent scrollY={false} className='ion-padding '>
                        <IonGrid fixed>
                            <IonRow className='ion-justify-content-center'>
                                <IonCol size='12' sizeMd='8' sizeLg='6' sizeXl='4'>
                                    <div className='ion-text-center ion-padding'>
                                        <img width={'50%'} src={fcc} alt='logo' />
                                    </div>
                                </IonCol>
                            </IonRow>
                            <IonRow className='ion-justify-content-center'>
                                <IonCol size='12' sizeMd='8' sizeLg='6' sizeXl='4'>
                                    <IonCard>
                                        <IonCardContent>
                                            <form onSubmit={login}>
                                                <IonInput fill='outline' labelPlacement='floating' label='Email' type='email' placeholder='example@gmail.com'></IonInput>
                                                <IonInput  className='ion-margin-top' fill='outline' labelPlacement='floating' label='Password' type='password'></IonInput>
                                                <IonButton  type='submit' expand='block' className='ion-margin-top'>
                                                    Login
                                                    <IonIcon icon={logInOutline} slot='end' />
                                                </IonButton>
                                                <IonButton routerLink='/register' color={'tertiary'}   expand='block' className='ion-margin-top'>
                                                    Register
                                                    <IonIcon icon={personCircleOutline} slot='end' />

                                                </IonButton>

                                            </form>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                            </IonRow>
                        </IonGrid>

                    </IonContent>
                </IonPage>)}
        </>
    );
};

export default Login;