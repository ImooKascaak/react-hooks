import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { render, waitFor, fireEvent, cleanup, getByTestId } from '@testing-library/react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

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
  it('App renders Layout component', () => {
    const element = shallow(<App />);
    expect(element.find(Layout)).to.have.lengthOf(1);
  });

  it('Layout renders AppBar component', () => {
    const element = shallow(<Layout />);
    expect(element.find(AppBar)).to.have.lengthOf(1);
  });

  it('Click on Posts/Users button changes Appbar title', () => {
    // const { container } = render(<Layout />);
    // const appBarTitleText = getByTestId(container, "appbar-title");
    // expect(appBarTitleText).equal('Posts');

    // const btnPosts = getByTestId(container, "btn-posts");
    // fireEvent.click(btnPosts);
    // expect(appBarTitleText.textContent).to.be('Posts');
    // const btnUsers = getByTestId(container, "btn-users");
    // fireEvent.click(btnUsers);
    // expect(appBarTitleText.textContent).to.be('Users');
  });

});
