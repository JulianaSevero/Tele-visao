import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon_person from 'react-native-vector-icons/Fontisto';
import styles from '../styles.js';
/* Test examinador branch */

export default function Examinador_Home({ route, navigation }) {
  const { users } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.welcome}>
        <div>
          <Text style={styles.title}>Bem-vinda</Text>
          <br/>
          <Text style={styles.subtitle}>{users[0]['dados']['nome']}</Text>
        </div>
          <Icon_person name="person" size={40} color='#363636' />
      </View>
      <Text style={styles.menu}>Menu</Text>
      <View style={styles.menu_button_container}>
      <Pressable style={styles.menu_button} onPress={() => navigation.navigate('Coletas_Em_Andamento')}>
        <Icon name="clipboard-text-multiple" size={40} color='#5A6CF3' />
        <Text style={styles.text_menu_button}>Coletas em andamento</Text>
      </Pressable>
      <Pressable style={styles.menu_button} onPress={() => navigation.navigate('Exames_Pendentes')}>
        <Icon name="alert" size={40} color='#F08F5F' />
        <Text style={styles.text_menu_button}>Exames pendentes</Text>
      </Pressable>
      </View>
      {/* <Pressable style={styles.menu_button} onPress={() => navigation.navigate('Exames_Atribuidos')}>
        <Icon name="alert" size={35} color='#F08F5F' />
        <Text style={styles.text_menu_button}>Exames atribuídos</Text>
      </Pressable> */}
      <View style={styles.menu_button_container_low}>
      <View style={styles.menu_button_container_inside}>
      <Pressable style={styles.menu_button} onPress={() => navigation.navigate('Coletas_Feitas')}>
        <Icon name="clipboard-check-multiple-outline" size={40} color='#5CE1CD' />
        <Text style={styles.text_menu_button}>Coletas feitas</Text>
      </Pressable></View></View>
      <StatusBar style="auto" />
    </View>
  );
}