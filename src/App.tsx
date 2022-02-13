import React, {useEffect, useRef} from 'react';
import clsx from 'clsx';

import './App.css';

function App() {

    const resInput = useRef(null)

    const [value, setValue] = React.useState(0);


    useEffect(() => {

    }, [])

    return (
        <>
            <header>
                <div className="topcoat-navigation-bar">
                    <div className="topcoat-navigation-bar__item center full">
                        <h1 className="topcoat-navigation-bar__title">Topcoat Grid</h1>
                    </div>
                </div>
            </header>

            <div className="topcoat-grid">
                <h1>12 column grid</h1>
                <div className="topcoat-grid__row">
                    <div className="topcoat-grid__column--1">
                        1 Column
                    </div>
                </div>
                <div className="topcoat-grid__row">
                    <div className="topcoat-grid__column--2">
                        2 Columns
                    </div>
                </div>
                <div className="topcoat-grid__row">
                    <div className="topcoat-grid__column--3">
                        3 Columns
                    </div>
                </div>
                <div className="topcoat-grid__row">
                    <div className="topcoat-grid__column--4">
                        4 Columns
                    </div>
                </div>
                <div className="topcoat-grid__row">
                    <div className="topcoat-grid__column--5">
                        5 Columns
                    </div>
                </div>
                <div className="topcoat-grid__row">
                    <div className="topcoat-grid__column--6">
                        6 Columns
                    </div>
                </div>
                <div className="topcoat-grid__row">
                    <div className="topcoat-grid__column--7">
                        7 Columns
                    </div>
                </div>
                <div className="topcoat-grid__row">
                    <div className="topcoat-grid__column--8">
                        8 Columns
                    </div>
                </div>
                <div className="topcoat-grid__row">
                    <div className="topcoat-grid__column--9">
                        9 Columns
                    </div>
                </div>
                <div className="topcoat-grid__row">
                    <div className="topcoat-grid__column--10">
                        10 Columns
                    </div>
                </div>
                <div className="topcoat-grid__row">
                    <div className="topcoat-grid__column--11">
                        11 Columns
                    </div>
                </div>
                <div className="topcoat-grid__row">
                    <div className="topcoat-grid__column--12">
                        12 Columns
                    </div>
                </div>
                <h1>11 offset classes</h1>
                <div className="topcoat-grid__row">
                    <div className="topcoat-grid__column--1 topcoat-grid__offset--1">
                        Offset 1
                    </div>
                </div>
                <div className="topcoat-grid__row">
                    <div className="topcoat-grid__column--1 topcoat-grid__offset--2">
                        Offset 2
                    </div>
                </div>
                <div className="topcoat-grid__row">
                    <div className="topcoat-grid__column--1 topcoat-grid__offset--3">
                        Offset 3
                    </div>
                </div>
                <div className="topcoat-grid__row">
                    <div className="topcoat-grid__column--1 topcoat-grid__offset--4">
                        Offset 4
                    </div>
                </div>
                <div className="topcoat-grid__row">
                    <div className="topcoat-grid__column--1 topcoat-grid__offset--5">
                        Offset 5
                    </div>
                </div>
                <div className="topcoat-grid__row">
                    <div className="topcoat-grid__column--1 topcoat-grid__offset--6">
                        Offset 6
                    </div>
                </div>
                <div className="topcoat-grid__row">
                    <div className="topcoat-grid__column--1 topcoat-grid__offset--7">
                        Offset 7
                    </div>
                </div>
                <div className="topcoat-grid__row">
                    <div className="topcoat-grid__column--1 topcoat-grid__offset--8">
                        Offset 8
                    </div>
                </div>
                <div className="topcoat-grid__row">
                    <div className="topcoat-grid__column--1 topcoat-grid__offset--9">
                        Offset 9
                    </div>
                </div>
                <div className="topcoat-grid__row">
                    <div className="topcoat-grid__column--1 topcoat-grid__offset--10">
                        Offset 10
                    </div>
                </div>
                <div className="topcoat-grid__row">
                    <div className="topcoat-grid__column--1 topcoat-grid__offset--11">
                        Offset 11
                    </div>
                </div>
                <h1>Mix columns and offset</h1>
                <div className="topcoat-grid__row">
                    <div className="topcoat-grid__column--2">
                        Column 2
                    </div>
                    <div className="topcoat-grid__column--3 topcoat-grid__offset--2">
                        Offset 2 Column 3
                    </div>
                    <div className="topcoat-grid__column--5">
                        Column 5
                    </div>
                </div>
                <div className="topcoat-grid__row">
                    <div className="topcoat-grid__column--3">
                        Column 3
                    </div>
                    <div className="topcoat-grid__column--4 topcoat-grid__offset--5">
                        Offset 5 Column 4
                    </div>
                </div>
                <div className="topcoat-grid__row">
                    <div className="topcoat-grid__column--4 topcoat-grid__offset--4">
                        Column 4 Offset 4
                    </div>
                </div>
                <h1>Auto width columns</h1>
                <div className="topcoat-grid__row">
                    <div className="topcoat-grid__column--auto">
                        Auto
                    </div>
                    <div className="topcoat-grid__column--auto">
                        Auto
                    </div>
                </div>
                <div className="topcoat-grid__row">
                    <div className="topcoat-grid__column--auto">
                        Auto
                    </div>
                    <div className="topcoat-grid__column--auto">
                        Auto
                    </div>
                    <div className="topcoat-grid__column--auto">
                        Auto
                    </div>
                </div>
                <div className="topcoat-grid__row">
                    <div className="topcoat-grid__column--auto">
                        Auto
                    </div>
                    <div className="topcoat-grid__column--auto">
                        Auto
                    </div>
                    <div className="topcoat-grid__column--auto">
                        Auto
                    </div>
                    <div className="topcoat-grid__column--auto">
                        Auto
                    </div>
                </div>
                <div className="topcoat-grid__row">
                    <div className="topcoat-grid__column--auto">
                        Auto
                    </div>
                    <div className="topcoat-grid__column--auto">
                        Auto
                    </div>
                    <div className="topcoat-grid__column--auto">
                        Auto
                    </div>
                    <div className="topcoat-grid__column--auto">
                        Auto
                    </div>
                    <div className="topcoat-grid__column--auto">
                        Auto
                    </div>
                </div>
                <h1>Mix fixed and auto width columns</h1>
                <div className="topcoat-grid__row">
                    <div className="topcoat-grid__column--2">
                        Column 2
                    </div>
                    <div className="topcoat-grid__column--auto">
                        Auto
                    </div>
                </div>
                <div className="topcoat-grid__row">
                    <div className="topcoat-grid__column--auto">
                        Auto
                    </div>
                    <div className="topcoat-grid__column--4">
                        Column 4
                    </div>
                    <div className="topcoat-grid__column--auto">
                        Auto
                    </div>
                </div>
                <div className="topcoat-grid__row">
                    <div className="topcoat-grid__column--4 topcoat-grid__offset--2">
                        Offset 2 Column 2
                    </div>
                    <div className="topcoat-grid__column--auto">
                        Auto
                    </div>
                </div>
                <h1>Nesting</h1>
                <div className="topcoat-grid__row">
                    <div className="topcoat-grid__column--12">
                        Column 12
                        <div className="topcoat-grid__row">
                            <div className="topcoat-grid__column--6">
                                Column 6
                                <div className="topcoat-grid__row">
                                    <div className="topcoat-grid__column--auto">
                                        Auto
                                    </div>
                                    <div className="topcoat-grid__column--auto">
                                        Auto
                                        <div className="topcoat-grid__row">
                                            <div className="topcoat-grid__column--4">
                                                Colmn 4
                                            </div>
                                            <div className="topcoat-grid__column--4">
                                                Column 4
                                            </div>
                                            <div className="topcoat-grid__column--4">
                                                Column 4
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="topcoat-grid__column--6">
                                Column 6
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
