import React, { FunctionComponent } from 'react';

type Props = {
title: string
}

export const Item: FunctionComponent<Props> = ({ title }) => (
<h1>{title}</h1>
)
