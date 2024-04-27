import { Box, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { NormalText } from '../StyledTypography/StyledTypography';
import React from 'react';
import { dictionary } from '../../../config/dictionary';
import { useDictionary } from '../../hooks/useDictionary';

export const FilterCurrency = () => {
  const [alignment, setAlignment] = React.useState('left');  
  const dictionary  = useDictionary();

  const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    setAlignment(newAlignment);
  };

  const children = [
    <ToggleButton
      value='left'
      key='left'
    >
      {dictionary.filterCurrency.currencyRU}
    </ToggleButton>,
    <ToggleButton
      value='center'
      key='center'
    >
      {dictionary.filterCurrency.currencyUSD}
    </ToggleButton>,
    <ToggleButton
      value='right'
      key='right'
    >
      {dictionary.filterCurrency.currencyEUR}
    </ToggleButton>,
  ];

  const control = {
    value: alignment,
    onChange: handleChange,
    exclusive: true,
  };
  return (
    <Box>
      <Box>
        <NormalText>{dictionary.filterCurrency.title}</NormalText>
      </Box>
      <Box sx={style.boxButtonGroup}>
        <ToggleButtonGroup
          {...control}
          aria-label='Medium sizes'
        >
          {children}
        </ToggleButtonGroup>
      </Box>
    </Box>
  );
};


const style = {
    boxButtonGroup : {
        mt : '20px'
    }
}