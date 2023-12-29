import React from "react";
import { Link as LinkElem } from "react-router-dom";

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    to: string;
    untraceable?: boolean;
}

const Link = React.forwardRef(({to, untraceable, ...props}: Props, _) => (
    <LinkElem to={{pathname: to}} state={untraceable ? {} : { prevPath: location.pathname }} {...props} />
))

export default Link;