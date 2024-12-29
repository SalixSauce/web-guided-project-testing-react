import React from "react";
import { fireEvent, render, screen, wait } from '@testing-library/react'
import MissionList from './MissionsList'

const missions = [
    {
        mission_name: 'Thaicom',
        mission_id: '9D1B7E0',
    },
    {
        mission_name: 'Telstar',
        mission_id: 'F4F83DE'
    }
];

test('missions list shows data when rerender with new missions data', () => {
    const { rerender } = render(<MissionList errors="" missions={[]}/>)
    let missionsObjects = screen.queryAllByTestId('mission');
    expect(missionsObjects).toHaveLength(0)

    rerender(<MissionList errors="" missions={missions}/>)
    missionsObjects = screen.queryAllByTestId('mission');
    expect(missionsObjects).toHaveLength(2)
})