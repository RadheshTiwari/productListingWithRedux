import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React from 'react';
  import {useDispatch, useSelector} from 'react-redux';
import { addToCart, deleteFromCart, removeFromart } from '../redux/reducers';
//   import {addToCart, deleteFromCart, removeFromart} from './redux/reducers';
  
  const Cart = () => {
    const selector = useSelector(state => state.ProductSlice);
    const dispatch = useDispatch();
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={selector?.cartData ?? selector?.cartData}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                    backgroundColor: 'white',
                    marginTop: 10,
                    width: '94%',
                    alignSelf: 'center',
                    borderRadius: 10,
                    elevation: 5,
                    padding: 10,
                    flexDirection: 'row',
                }}>
                <Image
                  source={{uri: item?.image}}
                  style={{width: 100, height: 100, borderRadius: 10}}
                />
                <View style={{flex: 1, padding: 10}}>
                <Text style={{fontSize: 18, fontWeight: 800, color: 'grey'}}>
                  {item?.title.substring(0, 20) + '...'}
                </Text>
                  <View
                  style={{
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    flex: 1,
                    alignItems: 'center',
                    width: 100,
                    borderRadius: 10,
                    elevation: 10,
                  }}>
                  <Text style={{fontSize: 16, fontWeight: 600, color: 'black'}}>
                    {'₹' + item?.price}
                  </Text>
                </View>
                <Text style={{flexWrap: 'wrap', fontSize: 16, fontWeight: 600}}>
                  {item?.description.substring(0, 40) + '...'}
                </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                      alignItems:"center"
                    }}>
                    <TouchableOpacity
                      style={{
                        backgroundColor: 'green',
                    alignItems: 'center',
                    height: 30,
                    justifyContent: 'center',
                    borderRadius: 10,
                    width: 150,
                    elevation: 5,
                    marginTop: 10,
                      }}
                      onPress={() => {
                        // console.log("0000000444")
                        if (item.qty > 1) {
                          dispatch(removeFromart(item));
                        } else {
                          dispatch(deleteFromCart(item?.id));
                        }
                      }}>
                      <Text style={{fontWeight: 800}}>-</Text>
                    </TouchableOpacity>
                    <Text style={{fontSize: 16, fontWeight: 600, color: 'black'}}>{item?.qty}</Text>
                    <TouchableOpacity
                      style={{
                        backgroundColor: 'green',
                    alignItems: 'center',
                    height: 30,
                    justifyContent: 'center',
                    borderRadius: 10,
                    width: 150,
                    elevation: 5,
                    marginTop: 10,
                      }}
                      onPress={() => {
                        dispatch(addToCart(item));
                      }}>
                      <Text style={{fontWeight: 800}}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    );
  };
  
  export default Cart;
  
  const styles = StyleSheet.create({});
  