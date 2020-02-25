
import React from 'react';
import * as Ion from '@ionic/react';

export default class Home extends React.Component {

  renderToolbar() {
    return (
      <Ion.IonToolbar>
        <Ion.IonButtons slot="start">
          <Ion.IonMenuButton />
        </Ion.IonButtons>
        <Ion.IonTitle>Home</Ion.IonTitle>
      </Ion.IonToolbar>
    );
  }

  render() {
    return (
    <Ion.IonPage>
      <Ion.IonHeader> {this.renderToolbar()} </Ion.IonHeader>
      <Ion.IonContent>
      
        <p>Der Denker Denkt...</p>

      </Ion.IonContent>
    </Ion.IonPage>
    );
  }
}
