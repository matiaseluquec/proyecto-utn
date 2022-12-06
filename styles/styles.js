import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width:360,
    height:42,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius:10,
    padding:10,
    marginVertical: 10,
    backgroundColor:'#ffffff90',
    marginBottom: 20,
    fontSize: 18,
    borderBottomWidth: 2,
    marginEnd: -40,
    paddingHorizontal:10,
  },
  inputWithIcon: {
    width: 300,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingEnd:10,

  },
  button: {
    marginTop: 1,
    padding: 2,
    width: 220,
    height: 50,
    borderRadius:10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#fff',
    borderWidth:1,
    backgroundColor: '#33FFBB'
  },
  InputReset:{
    width:360,
    height:42,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius:10,
    padding:10,
    marginVertical: 10,
    backgroundColor:'#ffffff90',
    marginBottom: 20,
    fontSize: 18,
    borderBottomWidth: 2,
    paddingHorizontal:15,
  },
  buttonReset: {
    marginTop: 1,
    padding: 2,
    width: 220,
    height: 50,
    borderRadius:10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#fff',
    borderWidth:1,
    backgroundColor: '#33FFBB'
  },
  textReset:{
    alignItems:'center',
    fontSize:18,
  },
  error: {
    color: 'red',
    alignSelf: 'center'
  },

  textLight: {
    color: 'snow'
  },
  buttonText: {
    fontSize: 18,
  },
  itemStyle: {
    padding: 10,
  },
  containerTask: {
    flex: 1,
    backgroundColor: '#D6EEE7',
  },
  buttonText: {
    fontSize: 18,
  },
  tasksWrap: {
    paddingTop: 20,
    paddingHorizontal: 18,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 50,
  },
  item: {
    backgroundColor: '#33FFBB',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  limit: {
    width: 40,
    height: 30,
  },
  itemText: {
    maxWidth: '70%',
  },
  WTaskWrap: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal:12,
  },
  inputTask: {
    paddingVertical: 20,
    paddingHorizontal: 4,
    backgroundColor: 'red',
    borderRadius: 10,
    borderWidth: 1,
    width: 270,
  },
  inicio: {
    bottom: 20,
    alignItems: 'center',
    width: '100%',
  },
  inputTa: {
      width:300,
      height:50,
      borderColor: 'black',
      borderWidth: 3,
      borderRadius: 5,
      padding: 10,
      marginVertical: 10,
      backgroundColor:'#ffffff90',
      fontSize: 20,
      borderBottomWidth: 2,
    },
    gray:{
      backgroundColor:'#D6EEE7',
    },
});
