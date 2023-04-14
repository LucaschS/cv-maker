import React, { useState, useContext } from 'react';
import FormContext from '../../store/form-context';

const Template = () => {
  const ctx = useContext(FormContext);

  console.log(ctx, 'TEMPLATE');

  return (
    <>
      <main>
        <p>
          {/* {ctx.formData.length === 0
            ? ''
            : ctx.formData.educationData.school} */}
          {/* {ctx.formData.length === 0
            ? ''
            : ctx.formData.personalData.name} */}
        </p>
      </main>
    </>
  );
};

export default Template;
