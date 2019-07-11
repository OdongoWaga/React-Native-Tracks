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

    onSubmitSearch=()=> {
        const {submitSearch}= this.props;
        submitSearch(this.state.value)
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
            onPress={()=> this.onSubmitSearch()}/>

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
