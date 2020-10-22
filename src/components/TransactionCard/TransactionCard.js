import React from 'react'

const TransactionCard = props => {
    return (
        <div className="Box-root Flex-flex Flex-direction--column bs-Card--small" style={{padding: 'unset'}}>
            <div className="Text-fontWeight--bold Padding-all--16 Text-fontSize--18 Border-bottom--1">
                {props.title}
            </div>
            <div className="Padding-top--12 Flex-flex Flex-direction--row Text-align--center">
                <div className="Flex-flex--1 Padding-top--4">
                    {props.label1}
                </div>
                <div className="Flex-flex--1 Padding-top--4">
                    {props.label2}
                </div>
                <div className="Flex-flex--1 Padding-top--4">
                    {props.label3}
                </div>
            </div>
            <div className="Padding-top--12 Flex-flex Flex-direction--row Text-align--center">
                <div className="Flex-flex--1 Padding-top--4">
                    <span>100</span>
                </div>
                <div className="Flex-flex--1 Padding-top--4">
                    <span>100</span>
                </div>
                <div className="Flex-flex--1 Padding-top--4">
                    <span>100</span>
                </div>
            </div>
        </div>
    )
}

export default TransactionCard;
