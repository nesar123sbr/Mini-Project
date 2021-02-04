import {StyleSheet} from 'react-native';

export const Homestyle = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    borderRadius: 20,
  },
  headers: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
  },
  topCon: {
    backgroundColor: 'red',
  },
  genre: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    margin: 8,
    width: 100,
    borderRadius: 10,
  },
  genreButton: {
    flexDirection: 'row',
  },
  poster: {
    width: 300,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  line: {
    borderWidth: 200,
  },
  lowSect: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  reviewModal: {
    height: 400,
    width: 320,
    backgroundColor: 'orange',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
  },
});
