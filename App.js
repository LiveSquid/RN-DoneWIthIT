import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  SafeAreaView,
  Image,
  Button,
  Alert,
  Platform,
  Dimensions,
} from 'react-native';

export default function App() {
  return (
    <View 
      style = {{
        backgroundColor: 'white',
        flex: 1,
      }}>
      <View 
      style = {{
        backgroundColor: 'dodgerblue',
        flex: 1,
      }}/>
      <View 
      style = {{
        backgroundColor: 'gold',
        flex: 1,
      }}/>
      <View 
      style = {{
        backgroundColor: 'tomato',
        flex: 1,
      }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
});


