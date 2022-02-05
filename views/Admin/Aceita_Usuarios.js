import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable, Div, InteractionManager } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../styles.js';

export default function Aceita_Usuarios({navigation}) {
    var pending_exams = [['Santa Casa','Carolina','Requisitante'],
                        ['Moinhos de Vento','Carlos','Oftalmologista'],
                        ['Mãe de Deus','José','Examinador']];

    function aceita_coleta(){
        var response = confirm("Autorizar usuário?");

        if(response==true){
            // libera cadastro
        }
        else{
            // exclui usuário
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Usuários não autorizados</Text>
            {pending_exams.map((item) => {
                    return (
                        <Pressable style={styles.list_button} onPress={() => aceita_coleta()}>
                            <Text style={styles.list_subtitle}><Icon name="hospital" size={25} style={styles.list_icon}/>{item[0]}</Text>
                            <Text style={styles.list_title}>Usuário: {item[1]}</Text>
                            <Text style={styles.list_subtitle}>Perfil: {item[2]}</Text>
                        </Pressable>
                    );
            })}
            <StatusBar style="auto" />
        </View>
    );
}