import { IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start' >
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>MyApp</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

        <IonItem>
          <IonLabel class='ion-text-wrap'>
            <h1>You can search for country flags from the App page</h1>
          </IonLabel>
        </IonItem>
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
