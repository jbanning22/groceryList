import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AddButton from './components/AddButton';
import axios, {isCancel, AxiosError} from 'axios';

const someGroceries = ['eggs', 'bacon', 'cheese'];

const App = () => {
  const [groceries, setGroceries] = useState(someGroceries);

  const [groceryItem, setGroceryItem] = useState('');

  const [students, setStudents] = useState();

  const fetchApi = async () => {
    try {
      const res = await axios.get('http://192.168.1.154:3000/api/v1/students');
      //console.log(res.data);
      setStudents(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

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

  const renderStudentItem = ({item}) => {
    console.log(item.name);
    return (
      <View>
        <Text>{item.name}</Text>
        <Text>{item.age}</Text>
      </View>
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
        <FlatList
          contentContainerStyle={styles.flatlistStyle}
          data={students}
          renderItem={renderStudentItem}
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
    padding: 10,
  },
});
