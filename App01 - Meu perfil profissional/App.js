import React from 'react';
import { View, Text, Image} from 'react-native';

function App(){
  return(
    <View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{marginTop: 25}}>Meu Perfil Profssional</Text>
        <Image
            source={{ uri: 'https://avatars.githubusercontent.com/u/86390779?v=4' }}
            style={{width: 120, height: 120, marginTop: 5}}
        />
      </View>

      <View style={{marginLeft: 5}}>
        <Text style={{color: 'green', marginTop: 15}}>Dados pessoais:</Text>
        <Text>WILLIAN PAES DE ANDRADE PARDO, 31 anos, Agente Administrativo - Prefeitura do Municipio da Praia Grande</Text>

        <Text style={{color: 'red', marginTop: 15}}>Formação:</Text>
        <Text>Cursando Análise e Desenvolvimento de Sitemas - FATEC Praia Grande</Text>
       
        <Text style={{color: 'brown', marginTop: 15}}>Experiência:</Text>
        <Text> Em construção</Text>

        <Text style={{color: 'blue', marginTop: 15}}>Projetos:</Text>
        <Text>Monografia sobre IoT durante a Pandemia(Covid-19)</Text>

        <Text style={{color: 'pink', marginTop: 15}}>OBSERVAÇÃO:</Text>
        <Text>Cursando a disciplina de Programação para Dispositivos Móveis </Text>
      </View>
    </View>
  )
}
export default App;
