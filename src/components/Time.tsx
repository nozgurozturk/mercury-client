import React, { FunctionComponent } from 'react';

type Props = {
title: string
}

export const ComponentName: FunctionComponent<Props> = ({ title }) => (
<h1>{title}</h1>
)