import React from 'react'
import styled from 'styled-components'

const Form = () => {
    return (
        <form>
            <input type="text"/>
            <SubmitBtn type="submit">追加</SubmitBtn>
        </form>
        
    )
}

// styled-componentを作成
const SubmitBtn = styled.button`
    width: 100px;
    border-radius: 5px;
`

export default Form