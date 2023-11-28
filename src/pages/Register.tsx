import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { checkmarkDoneOutline, logInOutline, personCircleOutline } from 'ionicons/icons';
import React from 'react';

import './Register.css'

const Register: React.FC = () => {
    const router = useIonRouter();

    const doRegister = (event: any) => {
        event.preventDefault();
        console.log('doRegister')
        router.goBack();
    };

    return (
        <IonPage>
           <header className='header'>
           <IonButtons slot="start" className='back'>
        <IonBackButton defaultHref='/'></IonBackButton>
                    </IonButtons>
        <div className="toolbar">
        
          <h1 className='text'>
          PList
          </h1>
        </div>
      </header>
            <IonContent scrollY={false} className='ion'>
                
                
                    <IonCardContent className='content'>
                        <form onSubmit={doRegister} className='input1'>
                        <input type="text" className='input' placeholder='Name' required />
                        <input type="email" className='input1' placeholder='Email' required />
                        <input type="password" className='input1' placeholder='Password' required />
                            <IonButton type='submit' size='large' expand='full' className='ion-margin-top'>
                                Create my Account
                                <IonIcon icon={checkmarkDoneOutline} slot="end">
                                </IonIcon>
                            </IonButton>
                        </form>
                    </IonCardContent>
                
            </IonContent>
        </IonPage>
    );
};

export default Register;