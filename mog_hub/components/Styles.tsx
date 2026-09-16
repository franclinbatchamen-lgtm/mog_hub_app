import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  mainTxt: {
    paddingTop: 50,
    color: 'green',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
  },

  slogan: {
    color: 'orange',
    fontSize: 20,
    textAlign: 'center'

  },

  mogHubLogo: {
    height: 350,
    width: 350,
    paddingTop: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },

  inputFlex: {
    flexDirection: 'row',
    marginTop: 25,
    justifyContent: 'space-evenly'

  },

  enterTxt: {
    fontWeight: 'bold'

  },

  userInputTxt: {

    borderBottomWidth: 1
    
  },

  radioContainer: {
    flex: 0,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center'
  },

  raidoGroup: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 15,
    elevation: 5,
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,

  },

  radioBtn: {
    flexDirection: 'column',
    alignItems:'center'

  },

  raidoLabel: {
    marginLeft: 5,
    fontSize: 15,
    color: 'black'

  },

  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#cf6400'


  },

  petTxt: {
    fontSize: 15,
    marginVertical: 5,
    borderBlockColor: 'black',
    borderBottomWidth: 1
  },

  petContainer: {
    flex: 5
  }



});
export default styles;