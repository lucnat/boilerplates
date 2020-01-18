
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import * as Ion from '@ionic/react';
import * as Icons from 'ionicons/icons';

import { Plugins, CameraResultType } from '@capacitor/core';
const { Camera } = Plugins;

class Tab3Page extends React.Component {

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri
    });

    var imageUrl = image.webPath;
    console.log(imageUrl);

  }

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Photoo Gallery</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <Ion.IonFab vertical="bottom" horizontal="center" slot="fixed">
            <Ion.IonFabButton >
              <Ion.IonFabButton onClick={this.takePicture}>
                <Ion.IonIcon icon={Icons.camera}></Ion.IonIcon>
              </Ion.IonFabButton>
            </Ion.IonFabButton>
          </Ion.IonFab>
        </IonContent>
      </IonPage>
    );
  }
};

export default Tab3Page;
