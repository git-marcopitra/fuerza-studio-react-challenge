import React, { FC, useMemo, useState } from 'react';
import { UseFormGetValues, UseFormRegister } from 'react-hook-form';
import { v4 } from 'uuid';
import { Box } from '../../elements';
import Input from '../../elements/input';

const TextField: FC<{
  name: string;
  label?: string;
  type: 'text' | 'password' | 'email';
  register: UseFormRegister<any>;
  getValues: UseFormGetValues<any>;
}> = ({ label, type, name, getValues, register }) => {
  const textFieldId = v4();
  const [focus, setFocus] = useState(false);

  const isLabelPlaceholder = useMemo(
    () => !(focus || getValues(name)),
    // eslint-disable-next-line
    [focus, getValues(name)]
  );

  return (
    <Box
      my="L"
      width="100%"
      bg="foreground"
      borderRadius="S"
      position="relative"
      boxShadow="0 0 0.2rem #0001"
    >
      {label && (
        <Box
          px="L"
          top="0"
          left="0"
          position="absolute"
          display="inline-block"
          py={isLabelPlaceholder ? 'L' : 'S'}
          fontSize={isLabelPlaceholder ? 'M' : 'S'}
          fontWeight={isLabelPlaceholder ? '600' : '400'}
          color={isLabelPlaceholder ? 'accent' : 'text.secondary'}
        >
          <label htmlFor={textFieldId}>{label}</label>
        </Box>
      )}
      <Input
        p={'L'}
        type={type}
        width="100%"
        border="none"
        outline="none"
        color="accent"
        bg="transparent"
        id={textFieldId}
        onFocus={() => setFocus(true)}
        {...(!!label && { pt: '1.5rem', pb: '0.8rem' })}
        {...register(name, { onBlur: () => setFocus(false) })}
      />
    </Box>
  );
};

export default TextField;
