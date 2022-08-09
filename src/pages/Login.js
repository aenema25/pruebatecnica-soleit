import { useState } from 'react';
import {
  IonPage,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonInput,
  IonItem,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonAlert
} from '@ionic/react';
import {
  eyeOff,
  eye,
  people
} from 'ionicons/icons'
import '../styles/Login.css';
import { Redirect } from 'react-router';
import logInCall from '../helpers/login';

const Home = () => {
  const [user, setUser] = useState()
  const [password, setPassword] = useState()
  // allow eye icon to show and  hide password visibility
  const [showPassword, setShowPassword] = useState(false)
  const [authenticated, setAuthenticated] = useState()

  const login = () => logInCall(user, password).then(response => setAuthenticated(response))

  if (typeof authenticated?.key !== 'undefined') {
    // check if response is valid and procede with login redirection, set key to localstorage to persist sesion over page refresh
    localStorage.setItem('key', JSON.stringify(authenticated))
    return (
      <Redirect to={{ pathname: 'datos', state: authenticated }} />
    )
  } else {
    return (
      <IonPage>
        <div className='login-container'>
          <IonCard className='ion-padding login-card'>
            <IonCardHeader>
              <IonCardTitle className='ion-text-center header-title' >Iniciar sesión</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonItem>
                      <IonInput
                        value={user}
                        onIonChange={e => setUser(e.detail.value)}
                        placeholder='Usuario'
                        type='text'
                      />
                      <IonIcon
                        color='primary'
                        icon={people}
                      />
                    </IonItem>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonItem>
                      <IonInput
                        value={password}
                        onIonChange={e => setPassword(e.detail.value)}
                        placeholder='Contraseña'
                        type={(showPassword) ? 'text' : 'password'}
                      />
                      <IonIcon
                        color='primary'
                        icon={(showPassword) ? eyeOff : eye}
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    </IonItem>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonButton expand='full' onClick={login} >Entrar</IonButton>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCardContent>
          </IonCard>
          {/* Alert message, it check if authenticated.message exist and show the alert, on dismiss it empty authenticated variable*/}
          <IonAlert
            isOpen={(typeof authenticated?.message !== 'undefined')}
            onDidDismiss={() => setAuthenticated()}
            header="Error"
            message="El usuario y/o contraseña no coinciden o no existen, intenta nuevamente"
            buttons={['OK']}
          />
        </div>
      </IonPage>
    );
  }
};

export default Home;