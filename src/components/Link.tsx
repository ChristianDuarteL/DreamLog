import React, { useEffect } from "react";
import { Link as LinkElem, useLocation } from "react-router-dom";

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    to: string;
    untraceable?: boolean;
}

const Link = React.forwardRef(({to, untraceable, ...props}: Props, _) => {
    const location = useLocation();
    return (
        <LinkElem to={{pathname: to}} state={untraceable ? {} : { prevPath: to == location.pathname ? location.state.prevPath : location.pathname }} {...props} />
    );
})

export default Link;