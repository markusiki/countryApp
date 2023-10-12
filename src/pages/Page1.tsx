import { IonButton, IonButtons, IonContent, IonHeader, IonImg, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonSearchbar, IonTitle, IonToolbar, useIonAlert } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { useEffect, useState } from 'react';
import { SearchResult } from '../hooks/userREST';
import { key } from 'ionicons/icons';


const Page1: React.FC = () => {

  const [searchTerm, setSearchTerm] = useState('')
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState<SearchResult[]>([])
  const [presentAlert] = useIonAlert()

  useEffect(() => {
    const loadData = async (): Promise<any> => {
      const response: any = await fetch('https://restcountries.com/v3.1/all')
      const countryList = await response.json()
      setCountries(countryList)
    }
  
    loadData()

  },[])

  
  
  useEffect(() => {
    if (searchTerm === '') {
      setFilteredCountries([])
    }
    else {
      const filteredCountries = countries.filter((country: { name: { common: string; }; }) => country.name.common.toLowerCase().includes(searchTerm.toLowerCase()))
      if (filteredCountries.toString() === '') {
        presentAlert('No country matches the given name')
      }
      setFilteredCountries(filteredCountries)
    }

  },[searchTerm])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start' >
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Search for country flag</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSearchbar
          value={searchTerm}
          debounce={300}
          onIonChange={(e) => setSearchTerm(e.detail.value!)}>
        </IonSearchbar>         
        <IonList>
          {filteredCountries.map((country: SearchResult) => (
            <IonItem button key={country.name.common}>
              <IonLabel class="ion-text-wrap">{country.name.common}</IonLabel>
                <IonImg src={country.flags.png}></IonImg>
            </IonItem>
           ))}
        </IonList>
      </IonContent>

    </IonPage>
  );
};

export default Page1
