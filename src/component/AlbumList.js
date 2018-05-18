import React,{Component} from 'react';
import { View,Text } from 'react-native';

class AlbumList extends Component {
    componentwillMount{
console.log('componentwillMount in albumList');
}

render() {
    return (
        <View>
            <Text>Album list..!</Text>
        </View>
    );
}
}
export default AlbumList;