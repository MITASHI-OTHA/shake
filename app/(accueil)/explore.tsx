import { Image, StyleSheet, Platform, Text, Pressable, View } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link, Stack } from 'expo-router';
import React from "react";
export default function Explore() {
  return (
      <>
        <Text children={<> Route explore !</>}/>
      </>
  );
}
