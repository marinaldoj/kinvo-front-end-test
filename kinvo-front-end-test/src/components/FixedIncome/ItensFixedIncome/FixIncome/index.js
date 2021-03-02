import React from 'react'
import { RiInformationLine } from 'react-icons/ri'

import { 
    Container,
    ContainerTitle,
    ContainerBody,
    Separator,
    SeparatorClass,
    Title,
    TitleBody,
    ClassBody,
} from './style'

class FixIncome extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Container>
                <ContainerTitle>
                    <Title>TÍTULO</Title>
                    <RiInformationLine color="#4E5B61"/>
                </ContainerTitle>
                <ContainerBody>
                    <Separator>
                        <TitleBody>{this.props.title}</TitleBody>
                    </Separator>
                    <SeparatorClass>
                        <Title>CLASSE</Title>
                        <ClassBody>{this.props.class}</ClassBody>
                    </SeparatorClass>
                </ContainerBody>
            </Container>
        )
    }
}

export default FixIncome;