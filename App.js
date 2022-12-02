import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Additem from './components/Additem';
const somegroceries = [
  {
    id: 1,
    item: 'butter',
  },
  {
    id: 2,
    item: 'eggs',
  },
  {
    id: 3,
    item: 'cheese',
  },
];
const DATA = ['eggs', 'bacon', 'milk'];
const App = () => {
  const [groceries, setGroceries] = useState(somegroceries);

  const deleteItem = indx => {
    setGroceries(
      groceries.filter((item, idx) => {
        if (idx !== indx) {
          return item;
        }
      }),
    );
  };

  return (
    <SafeAreaView style={styles.box1}>
      <View>
        {/* {groceries.map((item, indx) => {
          return <Text onPress={() => deleteItem(indx)}>{item.item}</Text>;
        })} */}
        <View style={styles.insertItemStyle}>
          <TextInput
            style={styles.textInputStyle}
            placeholder="Enter Item"
            spellCheck={true}
          />
          <Additem />
        </View>
        <FlatList data={DATA} />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  box1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputStyle: {
    // margin: 10,
    height: 40,
    width: 120,
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  insertItemStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
});
