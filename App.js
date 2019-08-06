import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/reducers';
import {Header} from './src/components/common';
import Performance from './src/usecase/performance/Performance';

const App = () => {
  return (
      <Provider store={createStore(reducers)}>
        <View style={styles.viewStyle}>
          <Header headerText="Firebase" />
          <Performance />
        </View>
      </Provider>
  );
};

const styles = {
  viewStyle: {
    flex: 1,
  },
};

export default App;
