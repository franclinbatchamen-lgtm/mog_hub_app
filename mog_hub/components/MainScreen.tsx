import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, TextInput, SafeAreaView, Image } from 'react-native';
import { useState } from 'react';
import styles from './Styles'
import { RadioButton } from 'react-native-paper';


function MainScreen(){

 const [petName, setPetName] = useState('');
 const [selectedValue, setSelectedVlaue] = useState('0')

 return(
  <View>
    <SafeAreaView>
      <ScrollView>
        <Image style={styles.mogHubLogo}
        source={require('./images/DAWG pic.jpg')}/>
        <Text style={styles.mainTxt}>Mog hub</Text>
        <Text style={styles.slogan}>P u r r f e c t  C o m p a n i o n s</Text>

        <View style={styles.inputFlex}>
          <Text style={styles.enterTxt}>Name Your Pet:</Text>
          <TextInput style={styles.userInputTxt}
          placeholder="Mog"
          value={petName}
          onChangeText={newText => setPetName(newText)}
          />
        </View>

        <View style={{ alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{ fontWeight: 'bold', fontSize: 18}}>
                SELECT YOUR PET:
            </Text>

            <View style={styles.radioContainer}>
                <View style={styles.raidoGroup}>
                    {/* raido button for cat */}
                    <View style={styles.radioBtn}>

                    </View>
                    {/* raido button for dog */}
                     <View style={styles.radioBtn}>

                    </View>
                    {/* raido button for other */}
                     <View style={styles.radioBtn}>

                    </View>

                </View>
            </View>

            
        </View>

        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  </View>
 );


}

export default MainScreen
