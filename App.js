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
import AddButton from './components/AddButton';

const someGroceries = ['eggs', 'bacon', 'cheese'];

const App = () => {
  const [groceries, setGroceries] = useState(someGroceries);

  const [groceryItem, setGroceryItem] = useState('');

  const renderItem = ({item}) => {
    return (
      <Text
        onPress={() => {
          deleteItem(item);
        }}>
        {item}
      </Text>
    );
  };

  const addItem = () => {
    setGroceries([...groceries, groceryItem]);
    setGroceryItem('');
  };

  const deleteItem = itemInput => {
    setGroceries(
      groceries.filter(item => {
        if (item !== itemInput) {
          return item;
        }
      }),
    );
  };

  return (
    <SafeAreaView style={styles.box1}>
      <View>
        <View style={styles.insertItemStyle}>
          <TextInput
            style={styles.textInputStyle}
            placeholder="Enter Item"
            value={groceryItem}
            spellCheck={true}
            onChangeText={text => setGroceryItem(text)}
          />
          <AddButton addItem={addItem} />
        </View>
        <FlatList
          contentContainerStyle={styles.flatlistStyle}
          data={groceries}
          renderItem={renderItem}
        />
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
  flatlistStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
    marginTop: 80,
  },
});
