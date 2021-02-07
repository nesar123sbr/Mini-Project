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
import FastImage from 'react-native-fast-image';

//pages
import Reviews from '../Allreview/Reviews';
import axios from 'axios';
import * as Source from '../../Utils/sourceURL';
import {connect} from 'react-redux';
import {fetchGenres, listMovies} from './Redux/Action';
import {MovieDetails} from './MovieDetails';

function Home(props) {
  const [fetchGenres, setFetchGenres] = useState([]);
  const [movies, setMovies] = useState([]);

  const actionGetGenres = () => {
    props.fetchGenres();
  };

  // const getGenres = async () => {
  //   try {
  //     const respond = await axios.get(
  //       Source.movdb + Source.genres + Source.mykey,
  //     );
  //     console.log(respond);
  //     if (respond) {
  //       let allMov = {name: 'All Movies', id: 999};
  //       let newGenre = respond.data.genres;
  //       newGenre.unshift(allMov);

  //       setFetchGenres(newGenre);
  //       console.log(respond);
  //     } else {
  //       console.log('Failed to load');
  //     }
  //   } catch (err) {
  //     console.log('Failed to get the api');
  //   }
  // };
  // console.log(fetchGenres);

  // useEffect(() => {
  //   getGenres();
  //   axios.get(Source.movdb + Source.popMov + Source.mykey).then((e) => {
  //     console.log(e.data.results);
  //     setMovies(e.data.results);
  //   });
  // }, []);

  useEffect(() => {
    props.fetchGenres('Genres');
    props.listMovies('Movies');
    console.log(props.listGenres);
    console.log(props.listMovies);
  }, []);

  console.log(props, 'props punya home');
  return (
    <>
      <ScrollView style={Homestyle.container}>
        <View style={{borderRadius: 20, backgroundColor: 'red'}}>
          <SearchBar>Search Movies</SearchBar>
        </View>

        <Text style={Homestyle.headers}>Best Genre</Text>

        <FlatList
          data={props.listGenres}
          horizontal
          renderItem={({item}) => {
            return (
              <TouchableOpacity>
                <Text
                  style={{
                    color: 'black',
                    padding: 5,
                    backgroundColor: 'white',
                    marginLeft: 5,
                    borderRadius: 5,
                    marginBottom: 10,
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          }}
        />

        <FlatList
          data={props.movies}
          renderItem={({item}) => {
            return (
              <View style={Homestyle.card}>
                <FastImage
                  source={{
                    uri: item.image_thumbnail,
                  }}
                  style={Homestyle.poster}
                />
                <Text>{item.title}</Text>
                <MovieDetails
                  overview={item.overview}
                  average={item.average_rating}
                  total={item.total_reviews}
                />
              </View>
            );
          }}
        />

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
    </>
  );
}

//untuk get data ke store
const mapStateToProps = (state) => ({
  listGenres: state.HomeReducer.genres,
  movies: state.HomeReducer.movies,
});

//untuk dispatch reduxm kumpulan action
const mapDispatchToProps = {
  fetchGenres,
  listMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
