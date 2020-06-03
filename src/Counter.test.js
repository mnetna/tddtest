import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Counter from './Counter';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const wrapper = mount(<Counter />);
const appComponent = wrapper.find('[data-test="component-app"]');

test("에러 없이 렌더링이 잘된다.", () => {
  expect(appComponent).toMatchSnapshot();
});

test("플러스 버튼 렌더링이 잘된다. ", () => {
  expect(appComponent.find('#increase')).toHaveLength(1);
});

test("카운터 숫자가 렌더링이 잘된다.", () => {
  expect(appComponent.find('b')).toHaveLength(1);
});

test("카운터의 초기값은 0이다.", () => {
  expect(appComponent.find('b').text()).toEqual('0');
});

test("클릭 버튼을 누르면 카운터 숫자가 증가된다.", () => {
  let plusButton = appComponent.find('#increase');
  plusButton.simulate('click');
  let number = appComponent.find('b');
  expect(number.text()).toBe('1');
});