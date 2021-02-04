import React, {useState} from 'react';
import {View, Text, Image, Modal} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

import {Rating, AirbnbRating} from 'react-native-elements';
import {UserRevStyle} from './style';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {moderateScale} from 'react-native-size-matters';

export default function UserReview(props) {
  const [editReview, setEditReview] = useState(false);
  return (
    <>
      <View>
        <View style={UserRevStyle.card}>
          <View style={UserRevStyle.head}>
            <Image
              style={UserRevStyle.profPic}
              source={require('../../Assets/Images/cat.jpg')}
            />
            <View>
              <View style={{flexDirection: 'row', paddingLeft: 10}}>
                <Text>9/10</Text>
                <Text style={{fontSize: 18, paddingLeft: 10}}>Great!</Text>
              </View>
              <Text style={{paddingLeft: 10}}>Reviewer: takahiro.moriuchi</Text>
              <Text style={{paddingLeft: 10}}>Reviewed February 1st 2021</Text>
              <Text style={{paddingLeft: 10}}>9/10</Text>
              <View style={{flexDirection: 'row'}}>
                <MaterialCommunityIcons
                  size={moderateScale(20)}
                  name="pencil-circle"
                  color="black"
                  onPress={() => setEditReview(true)}
                  style={{
                    elevation: 10,
                    shadowRadius: 50,
                    paddingLeft: 10,
                  }}
                />
                <EvilIcons
                  size={moderateScale(20)}
                  name="trash"
                  color="black"
                  style={{
                    elevation: 10,
                    shadowRadius: 50,
                    paddingLeft: 10,
                  }}
                />
              </View>
            </View>
          </View>
          <Text>
            Unbelievable! Great movie! I’m lovin' it! Maybe, I think, someday
            another country will remake this movie.
          </Text>
        </View>
        <TouchableOpacity onPress={() => props.navigation.navigate('Reviews')}>
          <Text>Move</Text>
        </TouchableOpacity>
      </View>
      <Modal visible={editReview}>
        <View style={{backgroundColor: 'black', flex: 1, opacity: 0.88}}>
          <View style={UserRevStyle.modalStyle}>
            <Text>How do you think about this movie?</Text>
            <Rating
              showRating
              fractions={1}
              startingValue={0}
              type="custom"
              ratingColor="#3498db"
              ratingBackgroundColor="#c8c7c8"
              ratingCount={10}
              imageSize={20}
              style={{paddingVertical: 10}}
            />
            <Text> Headline</Text>
            <Text>Explanations</Text>
            <AntDesign
              size={moderateScale(20)}
              name="closecircleo"
              color="black"
              onPress={() => setEditReview(false)}
            />
          </View>
        </View>
      </Modal>
    </>
  );
}
