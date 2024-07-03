import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, productLisitng} from '../redux/reducers';

const Main = props => {
//   const [price, setprice] = useState();
  const dispatch = useDispatch();
  const selector = useSelector(state => state.ProductSlice);
  function fetchingdata() {
    return fetch('https://fakestoreapi.com/products/').then(res => res.json());
  }
  useEffect(() => {
    const getDataFromFetch = async () => {
      let data = await fetchingdata();
      //   console.log('---->', data);

      let finalData = data.map(item => ({
        ...item,
        qty: 0,
      }));
      //   console.log('finalData--->', finalData);
      finalData.map(items => {
        dispatch(productLisitng(items));
      });
    };
    getDataFromFetch();
  }, []);
//   console.log('==productData==>', selector?.cartData);
//   function priceCal() {
//     selector?.cartData.map(item => {
//        setprice(prev => prev + item?.qty * item?.price);
//     });
//     console.log('price===4=>', price);
//   }
  return (
    <View>
      <FlatList
        data={selector?.productData ?? selector?.productData}
        ListHeaderComponent={() => {
          return selector?.cartData.length > 0 ? (
            <View
              style={{
                backgroundColor: 'white',
                marginTop: 10,
                width: '94%',
                alignSelf: 'center',
                borderRadius: 10,
                elevation: 5,
                // padding: 10,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: 'green',
                  alignItems: 'center',
                  height: 30,
                  justifyContent: 'center',
                  borderRadius: 10,
                  width: 150,
                  elevation: 5,
                  marginTop: 10,
                }}>
                <Text style={{fontSize: 16, fontWeight: 800}}>
                  Total Items {selector?.cartData.length}
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: '#c4c4c4',
                  alignItems: 'center',
                  height: 30,
                  justifyContent: 'center',
                  borderRadius: 10,
                  width: 150,
                  elevation: 5,
                  marginTop: 10,
                }}
                onPress={() => {
                  props.navigation.navigate('Cart');
                }}>
                <Text style={{fontSize: 16, fontWeight: 800}}>Cart</Text>
              </TouchableOpacity>
            </View>
          ) : null;
        }}
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
              <View style={{padding: 10, flex: 1}}>
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
                    // priceCal();
                  }}>
                  <Text style={{fontSize: 16, fontWeight: 800}}>
                    Add To Cart
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({});
