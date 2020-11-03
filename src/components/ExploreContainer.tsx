import React from 'react';
import './ExploreContainer.css';
import { IonGrid, IonRow, IonCol, IonContent, IonButton, IonIcon, IonCheckbox, IonItem, IonLabel } from '@ionic/react';
import { cloud, earth } from 'ionicons/icons';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (

    <IonContent>
      <IonGrid>
      <IonRow>
        <IonCol class="ion-text-end">Latitude:</IonCol>
        <IonCol><b>22222</b></IonCol>
      </IonRow>
      <IonRow>
        <IonCol class="ion-text-end">Longitude:</IonCol>
        <IonCol><b>22222</b></IonCol>
      </IonRow>
      <IonRow>
        <IonCol class="ion-text-end">Altitude:</IonCol>
        <IonCol><b>22222</b></IonCol>
      </IonRow>
      <IonRow>
        <IonCol class="ion-text-end">Velocit&agrave;:</IonCol>
        <IonCol><b>22222</b></IonCol>
      </IonRow>
      <IonRow>
        <IonCol class="ion-text-end">Data:</IonCol>
        <IonCol><b>22222</b></IonCol>
      </IonRow>
      <IonRow>
        <IonCol class="ion-text-end">Ora:</IonCol>
        <IonCol><b>22222</b></IonCol>
      </IonRow>
      
      <IonRow>
      <IonCol> &nbsp;</IonCol>
      </IonRow>
            
            
      <IonRow>
        <IonCol class="ion-text-end">Frequenza GPS:</IonCol>
        <IonCol><b>5</b></IonCol>
      </IonRow>
      <IonRow>
        <IonCol class="ion-text-end">Frequenza Invio:</IonCol>
        <IonCol><b>10</b></IonCol>
      </IonRow>
      <IonRow>
        <IonCol class="ion-text-end">Server:</IonCol>
        <IonCol><b>http://www.bacigalupo.it/cercariccardo/track.php</b></IonCol>
      </IonRow>
    </IonGrid>
         <IonItem>
            <IonLabel>Avvia</IonLabel>
            <IonCheckbox slot="end" color="primary" />
        </IonItem>
    </IonContent>
  );
};

export default ExploreContainer;
