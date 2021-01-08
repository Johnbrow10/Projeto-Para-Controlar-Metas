import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import { Container, TitleInput, InputForm, BtnSubmitForm, TxtSubmitForm, TitleRequired, LoadingArea } from './styles';
import { ActivityIndicator, Alert } from 'react-native';

import api from "../../config/api";

export default function AddMeta() {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    const addMeta = async () => {
        setLoading(true);
        await api.post('/metas', {name, description, status})
        .then((response) => {
            Alert.alert("", response.data.message);
            setLoading(false);
        }).catch((err) => {
            if(err.response){
                Alert.alert("", response.data.message);
            }else{
                Alert.alert("", "Erro: Meta não cadastrada com sucesso, tente mais tarde!");
            }
            setLoading(false);
        })
    }

    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <Container>
                <TitleInput>* Nome: </TitleInput>
                <InputForm
                    placeholder="Nome da meta"
                    autoCorrect={false}
                    value={name}
                    editable={!loading}
                    onChangeText={text => setName(text)}
                />

                <TitleInput>* Descrição: </TitleInput>
                <InputForm
                    placeholder="Descrição da meta"
                    autoCorrect={false}
                    value={description}
                    editable={!loading}
                    onChangeText={text => setDescription(text)}
                />

                <TitleInput>* Status: </TitleInput>
                <InputForm
                    placeholder="Status da meta"
                    autoCorrect={false}
                    value={status}
                    editable={!loading}
                    onChangeText={text => setStatus(text)}
                />

                <TitleRequired>* Campo Obrigatório</TitleRequired>

                <BtnSubmitForm disabled={loading} onPress={addMeta}>
                    <TxtSubmitForm>Cadastrar</TxtSubmitForm>
                </BtnSubmitForm>

                {loading && 
                    <LoadingArea>
                        <ActivityIndicator size="large" color="#fff" />
                    </LoadingArea>
                }

            </Container>
        </ScrollView>
    );
}