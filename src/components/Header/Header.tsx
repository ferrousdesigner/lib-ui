import * as React from 'react';

export interface IHeaderProps {
    children: any;
}

export function Header(props: IHeaderProps) {
    const { children } = props;
    return <div>{children}</div>;
}
