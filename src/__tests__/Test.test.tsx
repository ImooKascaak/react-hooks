import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { render, waitFor, cleanup } from '@testing-library/react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import mockedAxios from 'axios';

import App from '../App';
import Layout from '../components/Layout';

afterEach(cleanup);

// test('mocking axios request', async () => {
//   const data = {
//     data: [
//       {
//         id: 1,
//         title: 'title 1'
//       },
//       {
//         id: 2,
//         title: 'title 2'
//       },
//       {
//         id: 3,
//         title: 'mocked title'
//       }]
//   };
//   mockedAxios.get.mockResolvedValueOnce(data);
//   const { getByText } = render(<Layout />);
//   await waitFor(() => {
//     expect(getByText('mocked title'));
//   });
// });

describe('<App />', () => {
  it('App renders <Layout /> component', () => {
    const element = shallow(<App />);
    expect(element.find(Layout)).to.have.lengthOf(1);
  });

  it('Layout renders AppBar', () => {
    const element = shallow(<Layout />);
    expect(element.find(AppBar)).to.have.lengthOf(1);
  });
});
