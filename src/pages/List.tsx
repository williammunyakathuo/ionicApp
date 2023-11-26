import { IonAvatar, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonChip, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonMenuButton, IonPage, IonRefresher, IonRefresherContent, IonSearchbar, IonSkeletonText, IonTitle, IonToolbar, useIonAlert, useIonToast, useIonViewWillEnter } from '@ionic/react';
import { refresh, trashBinOutline } from 'ionicons/icons';
import React, { useState } from 'react';

const List: React.FC = () => {
    const [loading, setIsloading] = useState<boolean>(true)
    const [users, setUsers] = useState<any[]>([])
    const [showAlert] = useIonAlert()
    const [showToast] = useIonToast()

    useIonViewWillEnter(async () => {
        const users = await getUsers()
        console.log(users)
        setUsers(users)
        setIsloading(false)
    })
    const getUsers = async () => {
        const data = await fetch('https://randomuser.me/api?results=10')
        const users = await data.json()
        return users.results;
    }

    const clearList  =()=>{
        showAlert({
            header : 'Confirm !', 
            message : 'Are you sure you want to delete all users?',
            buttons : [
                {text: 'Cancel', role: 'cancel'},
                {
                    text: 'Delete',
                    handler : () =>{
                        setUsers([])
                        showToast({
                            message: 'All users deleted',
                            duration: 2000,
                            color: 'danger'
                        })
                    }
                }
            ]
        })
    }

    const refresh =async (event:any) => {
        const data = await getUsers()
        setUsers(data)
        event.detail.complete()
    }

    return (
        <IonPage>
            <IonHeader color='tertiary'>
                <IonToolbar color='tertiary'>
                    <IonButtons slot='start' >
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>List </IonTitle>
                    <IonButtons slot='end'>
                        <IonButton onClick={clearList}>
                            <IonIcon slot='icon-only' icon={trashBinOutline} color='light' />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
                <IonToolbar color='tertiary'>
                    <IonSearchbar color={'light'} />
                </IonToolbar>
            </IonHeader>
            <IonContent >
                <IonRefresher slot='fixed' onIonRefresh={refresh}>
                    <IonRefresherContent/>
                </IonRefresher>

                {loading && (
                    [...Array(10)].map((_, index) =>(
                        <IonCard key={index}>
                        <IonCardContent>
                            <IonItem lines='none'>
                                <IonAvatar slot='start'>
                                    <IonSkeletonText animated/>
                                </IonAvatar>
                                <IonLabel>
                                   <IonSkeletonText animated style={{width: "150px"}}/>
                                   <p>
                                    <IonSkeletonText/>
                                   </p>
                                </IonLabel>
                                <IonChip slot='end' color={'primary'}>
                                    
                                </IonChip>
                            </IonItem>
                        </IonCardContent>
                    </IonCard>
                    ))
                )}
                {users.map((user, index) => (
                    <IonCard key={index}>
                        <IonCardContent>
                            <IonItem lines='none'>
                                <IonAvatar slot='start'>
                                    <IonImg src={user.picture.thumbnail}/>
                                </IonAvatar>
                                <IonLabel>
                                    {user.name.first} {user.name.last}
                                    <p>{user.email}</p>
                                </IonLabel>
                                <IonChip slot='end' color={'primary'}>
                                    {user.nat}
                                </IonChip>
                            </IonItem>
                        </IonCardContent>
                    </IonCard>
                ))}
            </IonContent>
        </IonPage>
    );
};

export default List;