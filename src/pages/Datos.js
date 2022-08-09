import { useEffect, useState } from "react"
import { Redirect, useLocation } from "react-router"
import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCol,
    IonContent,
    IonGrid,
    IonPage,
    IonRow
} from '@ionic/react';
import { Header, ScatterGraphApexChart, ScatterGraphChartjs } from '../components/Datos'
import { fetchPoints, fetchWelcome } from "../helpers/datos";
import '../styles/Datos.css'

const Datos = () => {
    // get location object
    const location = useLocation()
    // check if key value is stored in localstorage to avoid redirect on page refresh
    let key;
    if (localStorage.getItem('key')) {
        key = JSON.parse(localStorage.getItem('key')).key
    } else {
        key = (location.state) ? location.state.key : null
    }

    const [points, setPoints] = useState()
    const [message, setMessage] = useState()

    useEffect(() => {
        fetchWelcome(key).then(response => setMessage(response))
        fetchPoints().then(response => setPoints(response))
    }, [])

    if (!key) {
        return (
            // redirect to home if user is not logged
            <Redirect to='/' />
        )
    } else {
        return (
            <IonPage>
                {
                    message &&
                    <Header message={message} />
                }
                <IonContent>
                    {
                        points &&
                        <IonGrid>
                            <IonRow>
                                <IonCol className="ion-padding col" sizeXs="12" sizeLg="6">
                                    <IonCard className="ion-padding">
                                        <IonCardHeader data-testid="ApexChart">
                                            ApexChart
                                        </IonCardHeader>
                                        <IonCardContent>
                                            <ScatterGraphApexChart points={points} />
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                                <IonCol className="ion-padding col" sizeXs="12" sizeLg="6">
                                    <IonCard className="ion-padding">
                                        <IonCardHeader>
                                            React-chartjs-2
                                        </IonCardHeader>
                                        <IonCardContent>
                                            <ScatterGraphChartjs points={points} />
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    }
                </IonContent>
            </IonPage>
        )
    }
}

export default Datos