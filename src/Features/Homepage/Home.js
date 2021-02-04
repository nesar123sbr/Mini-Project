import React, {useState} from 'react';
//components
import {View, Text, ImageBackground, Image, Modal} from 'react-native';
import {SearchBar, Rating} from 'react-native-elements';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Homestyle} from './style';
import {
  CollapseBody,
  CollapseHeader,
  Collapse,
} from 'accordion-collapse-react-native';

//icons
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
//style
import {moderateScale} from 'react-native-size-matters';
//pages
import Reviews from '../Allreview/Reviews';

export default function Home(props, navigation) {
  const [addReview, setAddReview] = useState(false);

  return (
    <>
      <ScrollView style={Homestyle.container}>
        <View style={{borderRadius: 20, backgroundColor: 'red'}}>
          <SearchBar>Search Movies</SearchBar>
        </View>
        <Text style={Homestyle.headers}>Best Genre</Text>
        <ScrollView horizontal>
          <TouchableOpacity style={Homestyle.genre}>
            <View style={Homestyle.genreButton}>
              <Entypo
                size={moderateScale(12)}
                name="database"
                color="black"
                style={{
                  elevation: 10,
                  shadowRadius: 50,
                }}
              />
              <Text>Action</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={Homestyle.genre}>
            <View style={Homestyle.genreButton}>
              <Entypo
                size={moderateScale(12)}
                name="database"
                color="black"
                style={{
                  elevation: 10,
                  shadowRadius: 50,
                }}
              />
              <Text>Romance</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={Homestyle.genre}>
            <View style={Homestyle.genreButton}>
              <Entypo
                size={moderateScale(12)}
                name="database"
                color="black"
                style={{
                  elevation: 10,
                  shadowRadius: 50,
                }}
              />
              <Text>Thriller</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={Homestyle.genre}>
            <View style={Homestyle.genreButton}>
              <Entypo
                size={moderateScale(12)}
                name="database"
                color="black"
                style={{
                  elevation: 10,
                  shadowRadius: 50,
                }}
              />
              <Text>Comedy</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
        <Text style={Homestyle.headers}>Hot Thriller Movies</Text>

        <View style={Homestyle.card}>
          <View>
            <ImageBackground
              style={Homestyle.poster}
              source={require('../../Assets/Images/poster.jpg')}>
              <AntDesign
                size={moderateScale(30)}
                name="playcircleo"
                color="yellow"
                style={{
                  elevation: 10,
                  shadowRadius: 50,
                }}
              />
            </ImageBackground>
          </View>

          <Collapse style={{width: 250}}>
            <CollapseHeader>
              <View>
                <Text>Details</Text>
              </View>
            </CollapseHeader>
            <CollapseBody>
              <View style={{flexDirection: 'row'}}>
                <Text>Parasite</Text>
                <Text>2019 | Thriller</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={{width: 80, height: 120}}
                  source={require('../../Assets/Images/cat.jpg')}
                />
                <View>
                  <View style={{flexDirection: 'row'}}>
                    <View style={{paddingLeft: 10}}>
                      <Entypo
                        size={moderateScale(20)}
                        name="star-outlined"
                        color="black"
                      />
                      <Text>9/10</Text>
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
                  <Text>
                    A poor family, the Kims, con their way into becoming the
                    servants of a rich family, the Parks. But their easy life
                    gets complicated when their deception is threatened with
                    exposure.
                  </Text>
                </View>
              </View>
            </CollapseBody>
          </Collapse>

          <View style={Homestyle.lowSect}>
            <View style={{flexDirection: 'row'}}>
              <EvilIcons
                size={moderateScale(20)}
                name="comment"
                color="black"
                style={{
                  elevation: 10,
                  shadowRadius: 50,
                }}
              />
              <Text>123</Text>
            </View>
            <Entypo
              size={moderateScale(20)}
              name="share"
              color="black"
              style={{
                elevation: 10,
                shadowRadius: 50,
              }}
            />
          </View>
        </View>
      </ScrollView>

      <Modal visible={addReview} transparent={true}>
        <View style={{backgroundColor: 'black', flex: 1, opacity: 0.88}}>
          <View style={Homestyle.reviewModal}>
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
              onPress={() => setAddReview(false)}
            />
          </View>
        </View>
      </Modal>
    </>
  );
}
