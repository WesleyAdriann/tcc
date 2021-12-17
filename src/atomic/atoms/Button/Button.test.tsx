import React from 'react'
import { render, cleanup } from '@testing-library/react-native'

import { AllTheProviders as wrapper, mockTestID } from '../../../utils'

import { Button, IButton } from './index'

describe('Atoms/Button', () => {
  const props: IButton = {
    testID: 'Button',
    onPress: jest.fn(),
    text: 'Button'
  }

  const elContainer = mockTestID('Pressable', props.testID!).testID

  const renderComponent = () => render(<Button {...props} />, { wrapper })
  let component = renderComponent()

  beforeEach(() => {
    jest.clearAllMocks()
    cleanup()
    component = renderComponent()
  })

  it(`should render component #${elContainer}`, async () => {
    const sut = await component.findByTestId(elContainer)
    expect(sut).toBeTruthy()
  })

  it('should render snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })
})
