import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Button, CardSection} from '../../components/common';
import { Alert } from 'react-native';
import FirebasePerformance from '../../config/FirebasePerformace';

class Performance extends Component {

    customTrace() {
        FirebasePerformance.customTrace();
        Alert.alert('Alert', 'Custom Trace send to Firebase Platform');
    }

    render() {
        return (
            <View style={styles.container}>
                <CardSection styles={styles.customCardHeader}>
                    <Text style={styles.textTitle}>
                        Firebase Performance Monitoring
                    </Text>
                </CardSection>
                {/*<CardSection styles={styles.customCard}>
                    <Button>
                        Simple Screen Transition
                    </Button>
                </CardSection>*/}
                <CardSection styles={styles.customCard}>
                    <Button onPress={() => this.customTrace()}>
                        Custom Trace
                    </Button>
                </CardSection>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        padding: 10,
    },
    textTitle: {
        fontSize: 16
    },
    customCardHeader: {
        backgroundColor: 'yellow',
        padding: 50,
    },
    customCard: {
        backgroundColor: 'orange',
        padding: 50,
    },
};

export default Performance;
