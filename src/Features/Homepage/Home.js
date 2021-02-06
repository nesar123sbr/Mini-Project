import React, {useState, useEffect} from 'react';
//components
import {
  View,
  Text,
  ImageBackground,
  Image,
  Modal,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import {SearchBar, Rating} from 'react-native-elements';
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
import axios from 'axios';
import * as Source from '../../Utils/sourceURL';
import {connect} from 'react-redux';
import {fetchGenres} from './Redux/Action';

function Home(props) {
  const [addReview, setAddReview] = useState(false);
  const [fetchGenres, setFetchGenres] = useState([]);
  const [showMovies, setShowMovies] = useState([]);
  const [movies, setMovies] = useState([]);

  const actionGetGenres = () => {
    props.fetchGenres();
  };

  const getGenres = async () => {
    try {
      const respond = await axios.get(
        Source.movdb + Source.genres + Source.mykey,
      );
      console.log(respond);
      if (respond) {
        let allMov = {name: 'All Movies', id: 999};
        let newGenre = respond.data.genres;
        newGenre.unshift(allMov);

        setFetchGenres(newGenre);
        console.log(respond);
      } else {
        console.log('Failed to load');
      }
    } catch (err) {
      console.log('Failed to get the api');
    }
  };
  console.log(fetchGenres);

  useEffect(() => {
    getGenres();
    axios.get(Source.movdb + Source.popMov + Source.mykey).then((e) => {
      console.log(e.data.results);
      setMovies(e.data.results);
    });
  }, []);

  console.log(props, 'props punya home');
  return (
    <>
      <ScrollView style={Homestyle.container}>
        <View style={{borderRadius: 20, backgroundColor: 'red'}}>
          <SearchBar>Search Movies</SearchBar>
        </View>

        <TouchableOpacity onPress={actionGetGenres}>
          <Text style={{color: 'white'}}>test saga</Text>
        </TouchableOpacity>
        <Text style={Homestyle.headers}>Best Genre</Text>

        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          data={fetchGenres}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={async () => {
                  if (item.id === 999) {
                    axios
                      .get(Source.movdb + Source.popMov + Source.mykey)
                      .then((e) => {
                        console.log(e.data.results);
                        setMovies(e.data.results);
                      });
                  } else {
                    let result = await axios.get(
                      Source.movdb +
                        Source.getMovByCat +
                        Source.mykey +
                        `&with_genres=${item.id}`,
                    );
                    setMovies(result.data.results);
                  }
                }}
                style={{
                  padding: 5,
                  backgroundColor: 'white',
                  marginLeft: 5,
                  borderRadius: 5,
                }}>
                <Text style={{color: 'black'}}>{item.name}</Text>
              </TouchableOpacity>
            );
          }}
        />

        <Text style={Homestyle.headers}>Hot Thriller Movies</Text>

        <FlatList
          data={movies}
          renderItem={({item}) => {
            return <Text style={{color: 'white'}}>{item.title}</Text>;
          }}
        />
        {/* <View style={Homestyle.card}>
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
        </View> */}
      </ScrollView>

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
}

//untuk get data ke store
const mapStateToProps = (state) => {};

//untuk dispatch redux
const mapDispatchToProps = {
  fetchGenres,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
