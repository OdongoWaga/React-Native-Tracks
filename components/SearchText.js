import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements';

class SearchText extends Component {
    state={
        value:''
    }

    onChange= (value) => {
        this.setState({value})
    }

    submitSearch=()=> {
        
    }

    render() {
        return (
            <>
            <Input
            containerStyle={styles.center}
            placeholder='Type here'
            label='Search for an artist'
            onChangeText={(e)=> this.onChange(e) }
            />
            <Button title='Search'
            onPress={()=>{}}/>
            </>
        )
    }
}

const styles = StyleSheet.create({
    center: {
        alignItems:'center'
    }
})

export default SearchText
