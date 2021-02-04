import React from 'react';
import {View, Text, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ReviewStyle} from './style';

export default function Reviews(props) {
  return (
    <ScrollView style={{backgroundColor: 'black'}}>
      <View style={ReviewStyle.card}>
        <View style={ReviewStyle.head}>
          <Image
            style={ReviewStyle.profPic}
            source={require('../../Assets/Images/cat.jpg')}
          />
          <View>
            <View style={{flexDirection: 'row', paddingLeft: 10}}>
              <Text>9/10</Text>
              <Text style={{fontSize: 18, paddingLeft: 10}}>Great!</Text>
            </View>
            <Text style={{paddingLeft: 10}}>Reviewer: takahiro.moriuchi</Text>
          </View>
        </View>
        <Text>
          Unbelievable! Great movie! I’m lovin' it! Maybe, I think, someday
          another country will remake this movie.
        </Text>
      </View>
      <View style={ReviewStyle.card}>
        <View style={ReviewStyle.head}>
          <Image
            style={ReviewStyle.profPic}
            source={require('../../Assets/Images/cat.jpg')}
          />
          <View>
            <View style={{flexDirection: 'row', paddingLeft: 10}}>
              <Text>9/10</Text>
              <Text style={{fontSize: 18, paddingLeft: 10}}>Great!</Text>
            </View>
            <Text style={{paddingLeft: 10}}>Reviewer: takahiro.moriuchi</Text>
          </View>
        </View>
        <Text>
          Unbelievable! Great movie! I’m lovin' it! Maybe, I think, someday
          another country will remake this movie.
        </Text>
      </View>
      <View style={ReviewStyle.card}>
        <View style={ReviewStyle.head}>
          <Image
            style={ReviewStyle.profPic}
            source={require('../../Assets/Images/cat.jpg')}
          />
          <View>
            <View style={{flexDirection: 'row', paddingLeft: 10}}>
              <Text>9/10</Text>
              <Text style={{fontSize: 18, paddingLeft: 10}}>Great!</Text>
            </View>
            <Text style={{paddingLeft: 10}}>Reviewer: takahiro.moriuchi</Text>
          </View>
        </View>
        <Text>
          Unbelievable! Great movie! I’m lovin' it! Maybe, I think, someday
          another country will remake this movie.
        </Text>
      </View>
      <View style={ReviewStyle.card}>
        <View style={ReviewStyle.head}>
          <Image
            style={ReviewStyle.profPic}
            source={require('../../Assets/Images/cat.jpg')}
          />
          <View>
            <View style={{flexDirection: 'row', paddingLeft: 10}}>
              <Text>9/10</Text>
              <Text style={{fontSize: 18, paddingLeft: 10}}>Great!</Text>
            </View>
            <Text style={{paddingLeft: 10}}>Reviewer: takahiro.moriuchi</Text>
          </View>
        </View>
        <Text>
          Unbelievable! Great movie! I’m lovin' it! Maybe, I think, someday
          another country will remake this movie.
        </Text>
      </View>
      <View style={ReviewStyle.card}>
        <View style={ReviewStyle.head}>
          <Image
            style={ReviewStyle.profPic}
            source={require('../../Assets/Images/cat.jpg')}
          />
          <View>
            <View style={{flexDirection: 'row', paddingLeft: 10}}>
              <Text>9/10</Text>
              <Text style={{fontSize: 18, paddingLeft: 10}}>Great!</Text>
            </View>
            <Text style={{paddingLeft: 10}}>Reviewer: takahiro.moriuchi</Text>
          </View>
        </View>
        <Text>
          Unbelievable! Great movie! I’m lovin' it! Maybe, I think, someday
          another country will remake this movie.
        </Text>
      </View>
      <View style={ReviewStyle.card}>
        <View style={ReviewStyle.head}>
          <Image
            style={ReviewStyle.profPic}
            source={require('../../Assets/Images/cat.jpg')}
          />
          <View>
            <View style={{flexDirection: 'row', paddingLeft: 10}}>
              <Text>9/10</Text>
              <Text style={{fontSize: 18, paddingLeft: 10}}>Great!</Text>
            </View>
            <Text style={{paddingLeft: 10}}>Reviewer: takahiro.moriuchi</Text>
          </View>
        </View>
        <Text>
          Unbelievable! Great movie! I’m lovin' it! Maybe, I think, someday
          another country will remake this movie.
        </Text>
      </View>
      <View style={ReviewStyle.card}>
        <View style={ReviewStyle.head}>
          <Image
            style={ReviewStyle.profPic}
            source={require('../../Assets/Images/cat.jpg')}
          />
          <View>
            <View style={{flexDirection: 'row', paddingLeft: 10}}>
              <Text>9/10</Text>
              <Text style={{fontSize: 18, paddingLeft: 10}}>Great!</Text>
            </View>
            <Text style={{paddingLeft: 10}}>Reviewer: takahiro.moriuchi</Text>
          </View>
        </View>
        <Text>
          Unbelievable! Great movie! I’m lovin' it! Maybe, I think, someday
          another country will remake this movie.
        </Text>
      </View>
      <View style={ReviewStyle.card}>
        <View style={ReviewStyle.head}>
          <Image
            style={ReviewStyle.profPic}
            source={require('../../Assets/Images/cat.jpg')}
          />
          <View>
            <View style={{flexDirection: 'row', paddingLeft: 10}}>
              <Text>9/10</Text>
              <Text style={{fontSize: 18, paddingLeft: 10}}>Great!</Text>
            </View>
            <Text style={{paddingLeft: 10}}>Reviewer: takahiro.moriuchi</Text>
          </View>
        </View>
        <Text>
          Unbelievable! Great movie! I’m lovin' it! Maybe, I think, someday
          another country will remake this movie.
        </Text>
      </View>
      <View style={ReviewStyle.card}>
        <View style={ReviewStyle.head}>
          <Image
            style={ReviewStyle.profPic}
            source={require('../../Assets/Images/cat.jpg')}
          />
          <View>
            <View style={{flexDirection: 'row', paddingLeft: 10}}>
              <Text>9/10</Text>
              <Text style={{fontSize: 18, paddingLeft: 10}}>Great!</Text>
            </View>
            <Text style={{paddingLeft: 10}}>Reviewer: takahiro.moriuchi</Text>
          </View>
        </View>
        <Text>
          Unbelievable! Great movie! I’m lovin' it! Maybe, I think, someday
          another country will remake this movie.
        </Text>
      </View>
    </ScrollView>
  );
}
