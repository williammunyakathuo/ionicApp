import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonMenu, IonMenuToggle, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { Redirect, Route } from 'react-router';
import List from './List';
import Settings from './Settings';
import { homeOutline, logOutOutline, newspaperOutline, settingsOutline } from 'ionicons/icons';

const Menu: React.FC = () => {
    const paths = [
        { name: 'Home', url: '/app/list', icon: homeOutline },
        { name: 'Settings', url: '/app/settings', icon: settingsOutline }
    ]
    return (
        <IonPage>
            <IonSplitPane contentId='main'>
                <IonMenu contentId='main' >
                    <IonHeader>
                        <IonToolbar color={'tertiary'}>
                            <IonTitle>Menu</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent >
                        {paths.map((item, index) => (
                            <IonMenuToggle key={index} autoHide={false}>
                                <IonItem routerLink={item.url} routerDirection='none'>
                                    {item.name}
                                    <IonIcon icon={item.icon} slot='start' />
                                </IonItem>
                            </IonMenuToggle>

                        ))}
                        <IonMenuToggle autoHide={false}>
                            <IonButton expand='full' routerLink='/' routerDirection='root'>
                                <IonIcon icon={logOutOutline} slot='start' />
                                Logout
                            </IonButton>
                        </IonMenuToggle>
                    </IonContent>
                </IonMenu>

                <IonRouterOutlet id='main'>
                    <Route exact path='/app/list' component={List} />
                    <Route exact path='/app/settings' component={Settings} />
                    <Route exact path='/app' >
                        <Redirect to='/app/list' />
                    </Route>

                </IonRouterOutlet>
            </IonSplitPane>
        </IonPage>
    );
};

export default Menu;