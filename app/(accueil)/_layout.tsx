import { Text, View } from 'react-native';
import { BottomNavigation, Button } from 'react-native-paper';
import React from 'react';
import Header from '@/components/Header';
import { listIconsType } from '@/types';
import { Icon } from '@iconify/react';
import { MaterialIcons } from '@expo/vector-icons';
import * as Device from 'expo-device';
import { requestPermissions } from '@/hooks/useBLE';

const TabLayout = () => {
  const [visible, setVisible] = React.useState(true);
  const scanForDevices = async () => {
    const isPermissionsEnabled = await requestPermissions();
    if (isPermissionsEnabled) {
      //scanForPeripherals();
    }
  };
  const MusicRoute = () => <Text>Musique</Text>;
  const AlbumsRoute = () => <View>
    <Text>** { Device.platformApiLevel } **</Text> 
    <Button style={{ width: 200, marginTop: 200 }} icon="camera" mode="contained" onPress={() => scanForDevices()}>
      Press me
  </Button>
  </View>;
  const partagesRoute = () => <Text>Partages</Text>;

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'contacts', title: 'Contacts', focusedIcon: 'person', unfocusedIcon: 'person-outline' },
    { key: 'shake', title: 'Shake', focusedIcon: 'vibrate', unfocusedIcon: 'vibrate' },
    { key: 'partages', title: 'partages', focusedIcon: 'history' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    contacts: MusicRoute,
    shake: AlbumsRoute,
    partages: partagesRoute,
  });


  const renderIcon = ({ route, focused }: {route: {key: string}, focused: boolean}) => {
    switch (route.key) {
      case 'contacts':
        return <MaterialIcons name={focused ? 'person' : 'person-outline'} size={24} color={focused ? 'blue' : 'grey'} />;
      case 'shake':
        return <MaterialIcons name="vibration" size={24} color={focused ? 'blue' : 'grey'} />;
      case 'partages':
        return <MaterialIcons name={focused ? 'info' : 'info-outline'} size={24} color={focused ? 'blue' : 'grey'} />;
      default:
        return null;
    }
  };

  const listIcons: listIconsType[] = [
    { name: 'magnify', onpress: () => null },
    { name: 'dots-vertical', onpress: () => null },
  ];

  return (
    <>
      <Header title="SHAKE" icons={listIcons} />
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        renderIcon={renderIcon} // Ici on utilise renderIcon
      />
    </>
  );
};

export default TabLayout;

