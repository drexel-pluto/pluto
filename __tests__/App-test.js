import 'react-native';
import React from 'react';
import Tag from '../src/components/Tag';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<Tag />).toJSON();
  expect(tree).toMatchSnapshot();
});