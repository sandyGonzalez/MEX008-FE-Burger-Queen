import React from "react";

class IconComponent extends React.Component {
    render() {
        return (
            <div>
                <a>
                    {this.props.img}
                </a>
            </div>
        );
    }
}

export default IconComponent