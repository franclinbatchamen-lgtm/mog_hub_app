import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, TextInput, SafeAreaView, Image, Button } from 'react-native';
import { useState } from 'react';
import styles from './Styles'
import { RadioButton } from 'react-native-paper';


function MainScreen(){

 const [petName, setPetName] = useState('');
 const [selectedValue, setSelectedValue] = useState('0')
//  creating an array
 const [pet, setPet] = useState<string[]>([]);

 const renderPets = () => {
    const arrDisplay = [];

    for (let i = 0; i < pet.length; i++){
        arrDisplay.push(
            <View key={i} style={styles.inputContainer}>
                <Text style={styles.petTxt}>
                    {pet[i]}

                </Text>
               
            </View>
        )
    }
    return arrDisplay
 }

 return(
  <View>
    <SafeAreaView>
      <ScrollView>
        <Image style={styles.mogHubLogo}
        source={require('../images/DAWG pic.jpg')}/>
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
                    {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
                    {/* raido button for cat */}
                    <View style={styles.radioBtn}>
                        <RadioButton.IOS
                            value="1"
                            status={selectedValue == "1" ? 'checked' : 'unchecked'}
                            onPress={() => setSelectedValue('1')}
                            color='orange'

                        
                        />
                        <Text style={styles.raidoLabel}>Cat</Text>

                    </View>

                    {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
                    {/* raido button for dog */}
                     <View style={styles.radioBtn}>
                        <RadioButton.IOS
                            value="3"
                            status={selectedValue == "2" ? 'checked' : 'unchecked'}
                            onPress={() => setSelectedValue('2')}
                            color='orange'
                            
                        
                        />
                        <Text style={styles.raidoLabel}>Dog</Text>

                    </View>

                    {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
                    {/* raido button for other */}
                     <View style={styles.radioBtn}>
                        <RadioButton.IOS
                            value="3"
                            status={selectedValue == "3" ? 'checked' : 'unchecked'}
                            onPress={() => setSelectedValue('3')}
                            color='orange'
                            
                        
                        />
                        <Text style={styles.raidoLabel}>Other</Text>

                    </View>

                </View>
            </View>

            
        </View>

        <StatusBar style="auto" />

        <Button title = "Add Pet"
             onPress ={() => {
                setPet ([...pet, petName]);
                setPetName("");
             }}
             
             />
             <View style= {styles.container}>
                {renderPets()}
             </View>

        
      </ScrollView>
    </SafeAreaView>
  </View>
 );


}

export default MainScreen
