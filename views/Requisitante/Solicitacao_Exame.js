import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Text, TextInput, View, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateField from 'react-native-datefield';
import styles from '../styles.js';

export default function Cadastro_Perfil() {
    var options = ["Santa Casa","Moinhos de Vento","Mãe de Deus"];

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Solicitar exame</Text>
            <Text style={styles.field_name}>Nome completo</Text>
            <TextInput style={styles.field} placeholder="Digite aqui o nome completo" />
            <Text style={styles.field_name}>Sexo</Text>
            <Picker style={styles.picker}>
                <Picker.Item style={styles.text} label='M' value='M' />
                <Picker.Item style={styles.text} label='F' value='F' />
            </Picker>
            <Text style={styles.field_name}>Data de nascimento</Text>
            <DateField 
                labelDate="Dia"
                labelMonth="Mês"
                labelYear="Ano"
                styleInput={{ fontSize: 15 }}
                containerStyle={{ marginVertical: 20 }}
                styleInput={{ width: 244/3,
                            height: 50,
                            backgroundColor: '#F2F2F5',
                            marginLeft: 2,
                            marginRight: 2
                            }}
                onSubmit={(value) => console.log(value)}
            />
            <Text style={styles.field_name}>Raça</Text>
            <Picker style={styles.picker}>
                <Picker.Item label='Branco' value='Branco' />
                <Picker.Item label='Negro' value='Negro' />
                <Picker.Item label='Pardo' value='Pardo' />
                <Picker.Item label='Amarelo' value='Amarelo' />
                <Picker.Item label='Indígena' value='Indígena' />
                <Picker.Item label='Outro' value='Outro' />
            </Picker>
            <Text style={styles.field_name}>Hospital</Text>
            <Picker style={styles.picker}>
                {options.map((item, index) => {
                    return (<Picker.Item label={item} value={index} key={index} />);
                })}
            </Picker>
            <Text style={styles.field_name}>Matrícula</Text>
            <TextInput style={styles.field} placeholder="Digite aqui a matrícula" />
            <Text style={styles.field_name}>Leito atual</Text>
            <TextInput style={styles.field} placeholder="Digite aqui o número" />
            <Text style={styles.field_name}>Histórico do paciente</Text>
            <TextInput multiline={true} style={styles.big_field} placeholder="Digite aqui o histórico do paciente" />
            <Text style={styles.field_name}>Informações da solicitação</Text>
            <TextInput multiline={true} style={styles.big_field} placeholder="Digite aqui as informações da solicitação do paciente" />
            <Pressable style={styles.button}>
                <Text style={styles.text}>Cadastrar</Text>
            </Pressable>
            <StatusBar style="auto" />
        </View>
    );
}