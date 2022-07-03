import React, { Component } from 'react';
import {
  View,
  Button,
  Alert,
  StyleSheet,
} from 'react-native';

export default class EmotionScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{ width: 200, height: 100, marginTop: 20, marginLeft: 80 }}>
          <Button
            title="Enjoyment"
            color="blue"
            onPress={() =>
              alert(
                'Spiderhead,Jurassic World Dominion,The Black Phone,Watcher'
              )
            }
          />
        </View>

        <View
          style={{ width: 200, height: 100, marginTop: 20, marginLeft: 80 }}>
          <Button
            title="Sad"
            color="blue"
            onPress={() =>
              alert('Spiderhead,Top Gun: Maverick,Lightyear,Elvis')
            }
          />
        </View>

        <View
          style={{ width: 200, height: 100, marginTop: 20, marginLeft: 80 }}>
          <Button
            title="Action"
            color="blue"
            onPress={() =>
              alert(
                'Indiana Jones,The Man Who Would Be King,The Goonies,Up,The Mummy,The Adventures of Tintin,Pirates of the Caribbean,Thor: Ragnarok,Thor: Ragnarok reinvented the God of Thunder.'
              )
            }
          />
        </View>
        <View style={{width: 200, height: 100, marginTop: 20, marginLeft: 80 }}>
          <Button
            title="Action"
            color="blue"
            onPress={() => alert('Hustle,The Longest Yard,Rise,The Sandlot')}
          />
        </View>
        <View
          style={{ width: 200, height: 100, marginTop: 20, marginLeft: 80 }}>
          <Button
            title="Horror"
            color="blue"
            onPress={() =>
              alert(
                'The Exorcist,Hereditary,The Conjuring,The Shining,The Texas Chainsaw MassacreThe Ring,Halloween,Sinister'
              )
            }
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fce5cd',
  },
});
