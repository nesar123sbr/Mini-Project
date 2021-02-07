import React, {useState} from 'react';
import {
  View,
  ImageBackground,
  Image,
  Modal,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {moderateScale} from 'react-native-size-matters';
import {Rating} from 'react-native-elements';

import {Homestyle} from './style';

export const MovieDetails = ({overview, average, total}) => {
  const [addReview, setAddReview] = useState(false);
  return (
    <>
      <Collapse style={{width: 250}}>
        <CollapseHeader>
          <Entypo
            size={moderateScale(20)}
            name="chevron-small-down"
            color="black"
            style={{alignSelf: 'center'}}
          />
        </CollapseHeader>
        <CollapseBody>
          <View style={{flexDirection: 'row', backgroundColor: 'green'}}>
            <View>
              <View style={{flexDirection: 'row'}}>
                <View style={{paddingLeft: 10}}>
                  <Entypo
                    size={moderateScale(20)}
                    name="star-outlined"
                    color="black"
                  />
                  <Text>{`${average}/${total}`}</Text>
                </View>
                <View style={{paddingLeft: 10}}>
                  <Entypo
                    size={moderateScale(20)}
                    name="star-outlined"
                    color="black"
                    onPress={() => setAddReview(true)}
                  />
                  <Text>Rate this</Text>
                </View>
              </View>
              <Text>{overview}</Text>
            </View>
          </View>
        </CollapseBody>
      </Collapse>

      <Modal visible={addReview} transparent={true}>
        <View style={{backgroundColor: 'black', flex: 1, opacity: 0.88}}>
          <View style={Homestyle.reviewModal}>
            <Text style={{fontSize: 15}}>
              How do you think about this movie?
            </Text>
            <Rating
              showRating
              fractions={1}
              startingValue={0}
              type="custom"
              ratingColor="yellow"
              ratingBackgroundColor="#c8c7c8"
              ratingCount={10}
              imageSize={20}
              style={{paddingVertical: 10}}
            />
            <TextInput
              style={{
                height: 40,
                width: 250,
                borderColor: 'gray',
                borderWidth: 1,
                backgroundColor: 'white',
              }}
              placeholderTextColor="blue"
              placeholder="hoho"
            />

            <TextInput
              multiline
              numberOfLines={5}
              style={{
                height: 150,
                width: 250,
                borderColor: 'gray',
                borderWidth: 1,
                backgroundColor: 'white',
                marginTop: 10,
                textAlignVertical: 'top',
              }}
              placeholderTextColor="red"
              placeholder="hehe"
            />

            <TouchableOpacity
              onPress={() => {
                console.log('test');
                setAddReview(false);
              }}
              style={{backgroundColor: 'white', padding: 5, marginTop: 10}}>
              <Text>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};
