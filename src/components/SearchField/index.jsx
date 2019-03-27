import React from 'react';
import { Input } from 'semantic-ui-react';
import './styles.scss';

const SearchField = ({handleKeyPress}) => <Input
  icon='search'
  placeholder='Search...'
  onKeyPress={handleKeyPress}
  className="ytc-search_field"
/>

export default SearchField;