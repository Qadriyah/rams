import React from 'react'

const UserCard = props => {
    return (
        <div className="Box-root Flex-flex Flex-direction--column bs-Card--small" style={{padding: 'unset'}}>
            <div className="Text-fontWeight--bold Padding-all--16 Text-fontSize--32 Border-bottom--1">
                {props.title}
            </div>
            <div className="Padding-left--16 Padding-top--12 Flex-flex Flex-direction--row">
                <span className="Flex-flex--1 Padding-top--4">
                    {props.label1}
                </span>
                <span className="Flex-flex--1">
                    <button className="bs-Button bs-Button--green Text-align--center Text-color--blue Text-fontSize--32 Text-fontWeight--bold" style={{minWidth: '150px'}}>
                        10,000
                    </button>
                </span>
            </div>
            <div className="Padding-left--16 Padding-top--12 Flex-flex Flex-direction--row">
                <span className="Flex-flex--1 Padding-top--4">
                    {props.label2}
                </span>
                <span className="Flex-flex--1">
                    <button className="bs-Button bs-Button--green Text-align--center Text-color--blue Text-fontSize--32 Text-fontWeight--bold" style={{minWidth: '150px'}}>
                        500
                    </button>
                </span>
            </div>
        </div>
    )
}

export default UserCard;
