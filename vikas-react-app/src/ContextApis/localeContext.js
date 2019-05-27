/* eslint-disable react/no-unused-state */
import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';

export const { Provider: LocaleProvider, Consumer: LocaleConsumer } = createContext();

export default class localeContext extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  state = {
    locale: 'en',
    authors: [],
    loading: false,
    error: false,
    fetchData: () => this.fetchData(),
  };

  fetchData = async () => {
    this.setState({ loading: true });
    try {
      setTimeout(async () => {
        const resAuthors = await fetch('http://localhost:3004/authors');
        const authors = await resAuthors.json();
        this.setState({ authors, loading: false });
      }, 1000);
    } catch (error) {
      this.setState({ error, loading: false });
    }
  };

  render() {
    const { locale } = this.state;
    const { children } = this.props;
    return (
      <LocaleProvider value={this.state}>
        <div>
          <select value={locale} onChange={e => this.setState({ locale: e.target.value })}>
            <option value="en">English</option>
            <option value="es">Spanish</option>
          </select>
          {children}
        </div>
      </LocaleProvider>
    );
  }
}
