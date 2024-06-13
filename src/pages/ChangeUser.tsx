import React from 'react';

const ChangeUser: React.FC = () => {

    // тут будет доставаться из стейта уроки и передаваться списком в баланс занятий
    
    return (
        <>
            <div className="container">
                <div className="box1">
                    <p>Содержимое контейнера 1</p>
                    <img src="https://i.ibb.co/TcMRKZv/SF-2-1.png" alt="SF-2-1"/>
                </div>
                <div className="box2">Содержимое контейнера 2</div>
            </div>


            <div className="container">
                <div className="box3">
                    <p>Баланс занятий</p>
                        <div>
                            <span>
                                Название урока lesson.name
                            </span>
                            {'  '}
                            <span>Count</span>
                        </div>



                    <button className="center-button ">Button</button>
                </div>
                <div className="box4">
                    <p>Ближайшие уроки</p>
                    <button className="center-button">Button</button>    
                </div>
            </div>
        </>
    );
};

export default ChangeUser;
