import React from 'react'

const VirtualDom = () => {

    const virtualDOMNode = {
        type: 'div',
        props: {
            id: 'profile-container',
            className: 'card',
            children: [
                {
                    type: 'h1',
                    props: {
                        style: { color: 'blue' },
                        children: 'User Profile'  // convert into button
                    }
                },
                {
                    type: 'p',
                    props: {
                        children: 'Status: Active'
                    }
                }
            ]
        }
    };

    return <div className='bg-gray-800 h-screen'>
        {React.createElement(
            virtualDOMNode.type,
            virtualDOMNode.props,
            ...virtualDOMNode.props.children.map(child => React.createElement(child.type, child.props, child.props.children))
        )}
    </div>
}

export default VirtualDom