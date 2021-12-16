import { useState } from 'react';

import { ExpansionPanelStyled, ExpansionPanelSummaryStyled, ExpansionPanelDetailsStyled, ExpandMoreIconStyled } from './styles';

import { IDropDownProps } from '../../models/interfaces';

interface ParentCompProps {
    childComp: React.ReactNode;
}

const ParentComp = ({ childComp }: ParentCompProps) => {
    return <>{childComp}</>;
};
 
const DropDown = ({ containerChildren, contentChildren }: IDropDownProps) => {
    return (
        <ExpansionPanelStyled>
            <ExpansionPanelSummaryStyled
                expandIcon={<ExpandMoreIconStyled />}
            >
                <ParentComp childComp={containerChildren} />
            </ExpansionPanelSummaryStyled>
            <ExpansionPanelDetailsStyled>
                <ParentComp childComp={contentChildren} />
            </ExpansionPanelDetailsStyled>
        </ExpansionPanelStyled>
    );
};

export default DropDown;