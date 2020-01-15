import React, { useState } from 'react'
import styled from 'styled-components'

const Item = (props) => {
    // const [isDone, setIsDone] = [最新の状態, 値を更新する関数]
    const [isDone, setIsDone] = useState(false)
    const [isImportant, setIsImportant] = useState(false)

    return (
        <li>
            <CheckItem>
                <div>
                    <input 
                        type="checkbox" 
                        // チェックされた際にisDoneをtrueにする
                        // チェックが外れた際にisDoneをfalseにする
                        onChange={() => {
                            setIsDone(!isDone)
                        }} 
                    />
                    <CheckBoxText>終了しましたか？</CheckBoxText><br/>
                    <input 
                        type="checkbox" 
                        // チェックされた際にisImportantをtrueにする
                        // チェックが外れた際にisImportantをfalseにする
                        onChange={() => {
                            setIsImportant(!isImportant)
                        }} 
                    />
                    <CheckBoxText>重要項目ですか？</CheckBoxText><br/>
                </div>
                <ContentText
                    isDone={isDone}
                    // 三項演算子を使用して、isDoneの値によって取り消し線の表示を切り替える
                    // style={{textDecoration: isDone ? 'line-through' : 'none'}}

                    isImportant={isImportant}
                    // 三項演算子を使用して、isImportantの値によって取り消し線の表示を切り替える
                    // style={{props => props.isImportant ? '#ff0000' : '#000'}}

                >{props.content}</ContentText>
            </CheckItem>
        </li>
    )
}

const CheckItem = styled.div`
    display: flex;
    align-items: center;
`

const CheckBoxText = styled.span`
    font-size: 0.8em;
`

const ContentText = styled.span`
    margin-left: 10px;
    font-size: 1.5em;
    text-decoration: ${props => props.isDone ? 'line-through' : 'none'};
    color: ${props => props.isImportant ? '#ff0000' : '#000'};
    font-weight: ${props => props.isImportant ? 'bold' : 'normal'};
`

export default Item

