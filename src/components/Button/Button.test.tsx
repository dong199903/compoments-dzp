import React from 'react';
import { render, screen,fireEvent } from '@testing-library/react';
import Button from "./index";
describe('test button props',()=>{
  it('test default button',()=>{
    render(<Button>dzp</Button>);
    const ele = screen.queryByText('dzp');
    expect(ele).toBeTruthy();
    expect(ele?.tagName).toBe('BUTTON');
    expect(ele?.className).toMatch('btn btn-default');
  })

  it('test primary button',()=>{
    render(<Button type='primary'>dzp</Button>);
    const ele = screen.queryByText('dzp');
    expect(ele).toBeTruthy();
    expect(ele?.tagName).toBe('BUTTON');
    expect(ele?.className).toMatch('btn btn-primary');
  })

  it('test a button',()=>{
    render(<Button type='link'>dzp</Button>);
    const ele = screen.queryByText('dzp');
    expect(ele).toBeTruthy();
    expect(ele?.tagName).toBe('A');
  })

  it('test event button',()=>{
    const handleClick = jest.fn()
    render(<Button type='link' onClick={handleClick}>dzp</Button>);
    const ele = screen.queryByText('dzp');
    fireEvent.click(ele as HTMLElement);
    expect(handleClick).toBeCalled();
  })

})