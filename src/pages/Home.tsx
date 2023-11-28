import React, { useState } from 'react';
import { IonButton, IonInput, IonLoading, IonPage,IonContent,IonCardContent,IonIcon, useIonRouter } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { logInOutline, personCircleOutline } from 'ionicons/icons';
const LoginPage = () => {
    const history = useHistory();
    const router = useIonRouter();
    const [loading, setLoading] = useState(false);

    const doLogin = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            // Simulating an asynchronous login process
            await new Promise((resolve) => setTimeout(resolve, 2000));

            // Navigate to '/app' on successful login
            router.push('/app', 'root');
        } catch (error) {
            console.error('Error during login:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <IonPage>
            <IonLoading isOpen={loading} message="Logging in..." />
            <header className='header'>
        <div className="toolbar">
          <h1 className='text'>
          PList
          </h1>
        </div>
      </header>
      <IonContent scrollY={false} className='ion'>
                    <IonCardContent className='content'>
                        <form className='input1' onSubmit={doLogin}>
                            <input type="email" className='input' placeholder='Email' required />
                            <input type="password" className='input1' placeholder='Password' required />
                            <a href="">Forgot Password?</a>
                            <IonButton  size='large' color={'primary'} type='submit' expand='block' className='ion-margin-top'>
                                Login
                                <IonIcon icon={logInOutline} slot="end">
                                </IonIcon>
                            </IonButton>
                            <IonButton size='large' routerLink='/register' color={'primary'} type='button' expand='block' className='ion-margin-top'>
                                Create Account
                                <IonIcon icon={personCircleOutline} slot="end"></IonIcon>
                            </IonButton>
                        </form>
                    </IonCardContent>
            </IonContent>
            </IonPage>
        </>
    );
};

export default LoginPage;
