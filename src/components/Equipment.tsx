import React from 'react';
import styled from "styled-components";

export const Equipment = () => {
    const equipment = [
        {name: "рюкзак от 20л", isDone: true},
        {name: "Накидка на рюкзак", isDone: true},
        {name: "Фонарик", isDone: true},
        {name: "Миска / Кружка / Ложка", isDone: true},
        {name: "Всё для гигиены", isDone: true},
        {name: "Бутылка воды 1,5л", isDone: true},
        {name: "Личная аптечка", isDone: true},
        {name: "Powerbank и зарядка", isDone: true},
        {name: "Телефон и паспорт", isDone: true},
        {name: "Непромокаемая обувь", isDone: true},
        {name: "2 пары носков", isDone: true},
        {name: "Непромокаемая куртка", isDone: true},
        {name: "Дождевик", isDone: true},
        {name: "Флиска", isDone: true},
        {name: "Немаркие штаны", isDone: true},
        {name: "Футболка / Рубашка", isDone: true},
        {name: "Термобельё", isDone: true},
        {name: "шапка / перчатки", isDone: true},
    ];

    const equipmentOpt = [
        {name: "Средство от комаров", isDone: true},
        {name: "Солнцезащитные очки", isDone: true},
        {name: "Сидушка", isDone: true},
        {name: "трек. палки", isDone: true},
        {name: "термос", isDone: true},
        {name: "Лёгкий пуховик", isDone: true},
        {name: "гамаши", isDone: true},
    ];

    return (
        <Wrapp>
            <Tttle>Что брать в поход Decahike?</Tttle>
            <Desc>
                Ахой! Снаряжение для похода - это вопрос, на котором многие новички впадают в ступор. Именно поэтому мы
                решили развеять все сомнения в этой статье.
            </Desc>
            <p>
                Мы в Decahike ходим в походы круглый год, а значит и списки снаряжения отличаются - летние, зимние и
                межсезонные. Правда, когда температура воздуха ночью падает до 0° - мы ходим только в однодневные
                походы.
            </p>
            {equipment.map((el, index) => {
                return (
                    <BoxList>
                        <List key={index}>
                            <input type="checkbox" checked={true}/>
                            <span>{el.name}</span>
                        </List>
                    </BoxList>
                )
            })}
        </Wrapp>
    );
};

const Wrapp = styled.div`
    max-width: 400px;
    margin: 40px;
    border: 1px solid #9d6969;
`

const Tttle = styled.h3`

`
const Desc = styled.p`
    
`

const BoxList = styled.ul`
    display: flex;
    flex-direction: column;
`
const List = styled.li`
    display: flex;
    gap: 10px;
    padding: 5px;
    background: aqua;
`