import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { XCheckbox, Checkbox } from './checkbox';
import * as T from './qd';
import { initializeIcons } from '@fluentui/react';


describe('Checkbox.tsx', () => {
  beforeAll(() => initializeIcons())

  it('Calls qd.sync() when trigger is on', () => {
    const
      syncMock = jest.fn(),
      checkboxProps: Checkbox = { name: 'checkbox-test', trigger: true },
      { getByTestId } = render(<XCheckbox model={checkboxProps} />)

    T.qd.sync = syncMock
    fireEvent.click(getByTestId('checkbox-test'))

    expect(syncMock).toHaveBeenCalled()
  })

  it('Does not call qd.sync() when trigger is off', () => {
    const
      syncMock = jest.fn(),
      checkboxProps: Checkbox = { name: 'checkbox-test' },
      { getByTestId } = render(<XCheckbox model={checkboxProps} />)

    T.qd.sync = syncMock
    fireEvent.click(getByTestId('checkbox-test'))

    expect(syncMock).toHaveBeenCalledTimes(0)
  })

})