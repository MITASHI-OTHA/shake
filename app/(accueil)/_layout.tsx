import { Slot, Stack, Tabs } from 'expo-router';
import { Image, StyleSheet, Platform, Text, Pressable, View } from 'react-native';
import { Appbar, Banner, BottomNavigation } from 'react-native-paper';
import React from 'react';
import { Colors } from '@/constants/Colors';
import Header from '@/components/Header';
import { listIconsType } from '@/types';

const  TabLayout = () => {
 const [visible, setVisible] = React.useState(true);

const MusicRoute = () => <Text>Musique</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const NotificationsRoute = () => <Text>Notifications</Text>;

const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'albums', title: 'Albums', focusedIcon: 'album' },
    { key: 'recents', title: 'Recents', focusedIcon: 'history' },
    { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    notifications: NotificationsRoute,
  });
  const listIcons: listIconsType[] = [
    {
      name: 'magnify',
      onpress: ()=> null
    },
    {
      name: 'dots-vertical',
      onpress: ()=> null
    }
  ]
  return (<>
  <Header title='SHAKE' icons={listIcons}/>
<BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  </>
  )
}
export default TabLayout;