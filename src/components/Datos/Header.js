import { useEffect, useState, useRef } from "react"
import {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonButtons,
    IonGrid,
    IonCol,
    IonRow
} from "@ionic/react"


const Header = ({ message }) => {
    const [open, setOpen] = useState(false)
    const [time, setTime] = useState()
    // web socket server status 
    const [status, setStatus] = useState('Desconectado')
    const connection = useRef()

    // web socket functions
    const connectWS = () => setOpen(true)
    const closeWS = () => setOpen(false)
    const sendMessageWS = () => connection.current.send(JSON.stringify({ "action": "time" }));
    const logOut = () => {
        localStorage.removeItem('key')
        window.location = '/login'
    }

    useEffect(() => {
        // check if connection is open and if there is already a current connection open on connection variable
        if (open && !connection.current) {
            setStatus('Conectando...')
            const ws = new WebSocket("wss://websockettest.soleitapp.com")
            connection.current = ws
            connection.current.onopen = () => {
                sendMessageWS()
                setStatus('Conectado')
            };
            connection.current.onmessage = function (event) {
                const json = JSON.parse(event.data);
                setTime(json)
            };
            connection.current.onclose = () => {
                setStatus('Desconectado')
            }
        }
        // check if connection is close and if there is already a current connection open on connection variable
        if (!open && connection.current) {
            setStatus('Desconectando...')
            setTime()
            connection.current.close(1000, 'end')
            // empty conection
            connection.current = ''

        }
    }, [open])

    return (
        <IonHeader>
            <IonToolbar>
                <IonGrid>
                    <IonRow class="ion-align-items-center">
                        <IonCol sizeXs="12" sizeSm="12" sizeMd="6" sizeLg="3" sizeXl="6">
                            <IonTitle >
                                <strong>{message.welcome}</strong>
                            </IonTitle>
                        </IonCol>
                        <IonCol sizeXs="12" sizeSm="12" sizeMd="6" sizeLg="3" sizeXl="2">
                            {
                                time &&
                                <div>
                                    <strong>Hora:</strong> {time.time} | <strong>Total:</strong> {time.total}
                                </div>
                            }
                        </IonCol>
                        <IonCol sizeXs="12" sizeSm="12" sizeMd="6" sizeLg="2" sizeXl="1">
                            {status}
                        </IonCol>
                        <IonCol sizeXs="12" sizeSm="12" sizeMd="6" sizeLg="4" sizeXl="3">
                            <IonButtons >
                                <IonButton fill="solid" color={(status === "Conectado") ? 'success' : 'primary'} onClick={(open) ? sendMessageWS : connectWS}>
                                    {
                                        (status === "Conectado") ? 'Enviar Consulta' : 'Conectar'
                                    }
                                </IonButton>
                                <IonButton fill="solid" color="danger" onClick={closeWS}>
                                    Desconectar
                                </IonButton>
                                <IonButton fill='solid' color="tertiary" onClick={logOut}>
                                    Salir
                                </IonButton>
                            </IonButtons>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonToolbar>
        </IonHeader>
    )
}

export default Header