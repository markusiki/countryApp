import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonMenu, IonMenuToggle, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import { homeOutline, newspaperOutline, logOutOutline, apertureOutline } from 'ionicons/icons'
import { Redirect, Route } from 'react-router';
import Page1 from './Page1'
import Home from './Home'

const Menu: React.FC = () => {

  const paths = [
    { name: 'Home', url: '/home', icon: homeOutline },
    { name: 'App', url: '/page1', icon: apertureOutline}
  ]
  return (
    <IonPage>
      <IonSplitPane contentId='main'>
        <IonMenu contentId='main'>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            {paths.map((item, index) => (
              <IonMenuToggle key={index} >
                <IonItem routerLink={item.url} routerDirection='none'>
                  <IonIcon icon={item.icon} slot='start'></IonIcon>
                  {item.name}
                </IonItem>
              </IonMenuToggle>
            ))}
          
          </IonContent>
        </IonMenu>

        <IonRouterOutlet id='main'>
          <Route exact path='/home' component={Home} />
          <Route exact path='/page1' component={Page1} />
          <Route exact path='/'>
            <Redirect to='/home' />
            </Route>
        </IonRouterOutlet>
      </IonSplitPane>
    </IonPage>
  );
};

export default Menu
